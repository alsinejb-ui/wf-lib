import gsap from "gsap";
import collection from "./collection.js";

const DEFAULT_CONFIG = {
  imageCount: 25,
  radius: 275,
  sensitivity: 500,
  effectFalloff: 250,
  cardMoveAmount: 50,
  lerpFactor: 0.15,
};

function getGalleryScale(viewportWidth) {
  if (viewportWidth < 768) return 0.6;
  if (viewportWidth < 1200) return 0.8;
  return 1;
}

function splitTitleIntoWords(element) {
  const text = element.textContent ?? "";
  const words = text.split(/\s+/).filter(Boolean);
  element.textContent = "";

  return words.map((word, index) => {
    const span = document.createElement("span");
    span.className = "word";
    span.textContent = word;
    element.appendChild(span);
    if (index < words.length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
    return span;
  });
}

function normalizeWheelDelta(event) {
  if (event.deltaMode === 1) return event.deltaY * 16;
  if (event.deltaMode === 2) return event.deltaY * window.innerHeight;
  return event.deltaY;
}

export function initInkwellImageGallery(el) {
  if (el._inkwellImageGalleryCleanup) {
    el._inkwellImageGalleryCleanup();
  }

  const gallery = el.querySelector("[data-iwg-gallery]");
  const galleryContainer = el.querySelector("[data-iwg-gallery-container]");
  const titleContainer = el.querySelector("[data-iwg-title-container]");
  const closeButton = el.querySelector("[data-iwg-close]");
  const progressFill = el.querySelector("[data-iwg-progress-fill]");
  if (!gallery || !galleryContainer || !titleContainer) return;

  const config = { ...DEFAULT_CONFIG, isMobile: window.innerWidth < 1000 };
  const cards = [];
  const transformState = [];

  let currentTitle = null;
  let isPreviewActive = false;
  let isTransitioning = false;
  let isTitleTransitioning = false;
  let pendingTitleIndex = null;
  let pendingTitleDirection = 1;
  let isPreviewNavigating = false;
  let activePreviewIndex = 0;
  let previewRotationDeg = 0;
  let previewStartIndex = 0;
  let previewOffset = 0;
  let wheelAccumulator = 0;
  let seenStepsInCycle = 0;
  let progressResetTimeoutId = null;
  let rafId = null;
  let disposed = false;
  const setProgressScale = progressFill
    ? gsap.quickTo(progressFill, "scaleX", {
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
      })
    : null;

  const parallaxState = {
    targetX: 0,
    targetY: 0,
    targetZ: 0,
    currentX: 0,
    currentY: 0,
    currentZ: 0,
  };

  function setCloseButtonVisible(visible, x, y) {
    if (!closeButton) return;
    if (visible) {
      closeButton.classList.add("is-visible");
      if (typeof x === "number" && typeof y === "number") {
        gsap.set(closeButton, { x: x + 20, y: y + 20 });
      }
    } else {
      closeButton.classList.remove("is-visible");
    }
  }

  function setProgress(value) {
    if (!progressFill) return;
    const clamped = Math.max(0, Math.min(1, value));
    setProgressScale?.(clamped);
  }

  function updateCloseHover(event) {
    if (!isPreviewActive || isTransitioning) {
      setCloseButtonVisible(false);
      return;
    }

    const target = event.target instanceof Element ? event.target : null;
    const onCard = Boolean(target?.closest(".card"));
    const onNav = Boolean(target?.closest("[data-iwg-nav]"));
    const onFooter = Boolean(target?.closest("[data-iwg-footer]"));
    const onTitle = Boolean(target?.closest("[data-iwg-title-container]"));
    const onClose = Boolean(target?.closest("[data-iwg-close]"));
    const onBlankArea = !onCard && !onNav && !onFooter && !onTitle;

    if (onBlankArea || onClose) {
      setCloseButtonVisible(true, event.clientX, event.clientY);
      return;
    }

    setCloseButtonVisible(false);
  }

  gallery.innerHTML = "";

  for (let i = 0; i < config.imageCount; i++) {
    const angle = (i / config.imageCount) * Math.PI * 2;
    const x = config.radius * Math.cos(angle);
    const y = config.radius * Math.sin(angle);
    const cardIndex = i % collection.length;

    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = String(i);
    card.dataset.title = collection[cardIndex].title;

    const img = document.createElement("img");
    img.src = collection[cardIndex].img;
    img.alt = collection[cardIndex].title;
    card.appendChild(img);

    gsap.set(card, {
      x,
      y,
      rotation: (angle * 180) / Math.PI + 90,
      transformPerspective: 800,
      transformOrigin: "center center",
    });

    gallery.appendChild(card);
    cards.push(card);
    transformState.push({
      currentRotation: 0,
      targetRotation: 0,
      currentX: 0,
      targetX: 0,
      currentY: 0,
      targetY: 0,
      currentScale: 1,
      targetScale: 1,
      angle,
    });
  }

  function clearTransforms() {
    transformState.forEach((state) => {
      state.currentRotation = 0;
      state.targetRotation = 0;
      state.currentScale = 1;
      state.targetScale = 1;
      state.currentX = 0;
      state.targetX = 0;
      state.currentY = 0;
      state.targetY = 0;
    });
  }

  function getPreviewRotationDegrees(index) {
    const angle = transformState[index].angle;
    const targetPosition = (Math.PI * 3) / 2;
    let rotationRadians = targetPosition - angle;
    if (rotationRadians > Math.PI) rotationRadians -= Math.PI * 2;
    else if (rotationRadians < -Math.PI) rotationRadians += Math.PI * 2;
    return (rotationRadians * 180) / Math.PI + 360;
  }

  function createTitleElement(titleText) {
    const p = document.createElement("p");
    p.textContent = titleText;
    titleContainer.appendChild(p);
    currentTitle = p;
    return p;
  }

  function transitionTitle(nextIndex, direction = 1, delay = 0) {
    if (!cards[nextIndex]) return;
    const nextTitleText = cards[nextIndex]?.dataset.title ?? "";
    const inFrom = direction > 0 ? "125%" : "-125%";
    const outTo = direction > 0 ? "-125%" : "125%";

    if (!currentTitle) {
      const p = createTitleElement(nextTitleText);
      const words = splitTitleIntoWords(p);
      gsap.set(words, { y: inFrom });
      gsap.to(words, {
        y: "0%",
        duration: 0.75,
        delay,
        stagger: 0.08,
        ease: "power4.out",
      });
      return;
    }

    if (isTitleTransitioning) {
      pendingTitleIndex = nextIndex;
      pendingTitleDirection = direction;
      return;
    }
    isTitleTransitioning = true;

    const oldWords = currentTitle.querySelectorAll(".word");
    gsap.to(oldWords, {
      y: outTo,
      duration: 0.45,
      stagger: 0.04,
      ease: "power3.in",
      onComplete: () => {
        currentTitle?.remove();
        currentTitle = null;

        const p = createTitleElement(nextTitleText);
        const words = splitTitleIntoWords(p);
        gsap.set(words, { y: inFrom });
        gsap.to(words, {
          y: "0%",
          duration: 0.6,
          delay,
          stagger: 0.06,
          ease: "power4.out",
          onComplete: () => {
            isTitleTransitioning = false;
            if (
              pendingTitleIndex !== null &&
              pendingTitleIndex !== nextIndex &&
              isPreviewActive
            ) {
              const queuedIndex = pendingTitleIndex;
              const queuedDirection = pendingTitleDirection;
              pendingTitleIndex = null;
              transitionTitle(queuedIndex, queuedDirection, 0);
            } else {
              pendingTitleIndex = null;
            }
          },
        });
      },
    });
  }

  function navigatePreview(direction) {
    if (!isPreviewActive || isTransitioning || isPreviewNavigating) return;
    isPreviewNavigating = true;
    const step = 360 / config.imageCount;

    previewOffset += direction;
    const rawIndex = previewStartIndex + previewOffset;
    activePreviewIndex = ((rawIndex % config.imageCount) + config.imageCount) % config.imageCount;
    previewRotationDeg += direction * step;

    seenStepsInCycle += 1;
    if (seenStepsInCycle >= config.imageCount) {
      setProgress(1);
      if (progressResetTimeoutId) {
        window.clearTimeout(progressResetTimeoutId);
      }
      progressResetTimeoutId = window.setTimeout(() => {
        seenStepsInCycle = 0;
        setProgress(0);
      }, 180);
    } else {
      setProgress(seenStepsInCycle / config.imageCount);
    }

    gsap.to(gallery, {
      rotation: previewRotationDeg,
      duration: 0.9,
      ease: "power3.inOut",
      overwrite: true,
      onComplete: () => {
        isPreviewNavigating = false;
      },
    });

    transitionTitle(activePreviewIndex, direction, 0);
  }

  function togglePreview(index) {
    isPreviewActive = true;
    isTransitioning = true;
    el.classList.add("is-preview-active");
    pendingTitleIndex = null;
    wheelAccumulator = 0;
    seenStepsInCycle = 0;
    if (progressResetTimeoutId) {
      window.clearTimeout(progressResetTimeoutId);
      progressResetTimeoutId = null;
    }
    setProgress(0);
    activePreviewIndex = index;
    previewStartIndex = index;
    previewOffset = 0;
    previewRotationDeg = getPreviewRotationDegrees(index);

    clearTransforms();

    gsap.to(gallery, {
      onStart: () => {
        cards.forEach((card, i) => {
          gsap.to(card, {
            x: config.radius * Math.cos(transformState[i].angle),
            y: config.radius * Math.sin(transformState[i].angle),
            rotationY: 0,
            scale: 1,
            duration: 1.25,
            ease: "power4.out",
          });
        });
      },
      scale: 5,
      y: 1300,
      rotation: previewRotationDeg,
      duration: 2,
      ease: "power4.inOut",
      onComplete: () => {
        isTransitioning = false;
      },
    });

    gsap.to(parallaxState, {
      currentX: 0,
      currentY: 0,
      currentZ: 0,
      duration: 0.5,
      ease: "power2.out",
      onUpdate: () => {
        gsap.set(galleryContainer, {
          rotateX: parallaxState.currentX,
          rotateY: parallaxState.currentY,
          rotation: parallaxState.currentZ,
          transformOrigin: "center center",
        });
      },
    });

    transitionTitle(index, 1, 1.25);
  }

  function resetGallery() {
    if (isTransitioning) return;
    isTransitioning = true;
    isTitleTransitioning = false;
    pendingTitleIndex = null;

    if (currentTitle) {
      gsap.killTweensOf(currentTitle.querySelectorAll(".word"));
    }

    if (currentTitle) {
      const words = currentTitle.querySelectorAll(".word");
      gsap.to(words, {
        y: "-125%",
        duration: 0.75,
        delay: 0.5,
        stagger: 0.1,
        ease: "power4.out",
        onComplete: () => {
          currentTitle?.remove();
          currentTitle = null;
        },
      });
    }

    gsap.to(gallery, {
      scale: getGalleryScale(window.innerWidth),
      y: 0,
      x: 0,
      rotation: 0,
      duration: 2.5,
      ease: "power4.inOut",
      onComplete: () => {
        isPreviewActive = false;
        isTransitioning = false;
        isTitleTransitioning = false;
        isPreviewNavigating = false;
        previewOffset = 0;
        wheelAccumulator = 0;
        seenStepsInCycle = 0;
        if (progressResetTimeoutId) {
          window.clearTimeout(progressResetTimeoutId);
          progressResetTimeoutId = null;
        }
        setProgress(0);
        el.classList.remove("is-preview-active");
        setCloseButtonVisible(false);
        Object.assign(parallaxState, {
          targetX: 0,
          targetY: 0,
          targetZ: 0,
          currentX: 0,
          currentY: 0,
          currentZ: 0,
        });
      },
    });
  }

  const onResize = () => {
    config.isMobile = window.innerWidth < 1000;
    gsap.set(gallery, { scale: getGalleryScale(window.innerWidth) });

    if (!isPreviewActive) {
      Object.assign(parallaxState, {
        targetX: 0,
        targetY: 0,
        targetZ: 0,
        currentX: 0,
        currentY: 0,
        currentZ: 0,
      });
      clearTransforms();
    }
  };

  const onClick = (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const card = event.target instanceof Element ? event.target.closest(".card") : null;
    if (card && el.contains(card) && !isPreviewActive && !isTransitioning) {
      togglePreview(Number(card.dataset.index));
      event.stopPropagation();
      return;
    }

    if (!isPreviewActive || isTransitioning || !target || !el.contains(target)) return;

    const shouldCloseFromBlankClick = !target.closest(
      ".card, [data-iwg-nav], [data-iwg-footer], [data-iwg-title-container], [data-iwg-close]",
    );

    if (shouldCloseFromBlankClick) {
      resetGallery();
    }
  };

  const onCloseClick = (event) => {
    event.stopPropagation();
    if (isPreviewActive && !isTransitioning) {
      resetGallery();
    }
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape" && isPreviewActive && !isTransitioning) {
      resetGallery();
    }
  };

  const onMouseMove = (event) => {
    if (isPreviewActive) {
      updateCloseHover(event);
      return;
    }
    if (isTransitioning || config.isMobile) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const percentX = (event.clientX - centerX) / centerX;
    const percentY = (event.clientY - centerY) / centerY;

    parallaxState.targetY = percentX * 15;
    parallaxState.targetX = -percentY * 15;
    parallaxState.targetZ = (percentX + percentY) * 5;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.sensitivity) {
        const flipFactor = Math.max(0, 1 - distance / config.effectFalloff);
        const angle = transformState[index].angle;
        const moveAmount = config.cardMoveAmount * flipFactor;
        transformState[index].targetRotation = 180 * flipFactor;
        transformState[index].targetScale = 1 + 0.3 * flipFactor;
        transformState[index].targetX = moveAmount * Math.cos(angle);
        transformState[index].targetY = moveAmount * Math.sin(angle);
      } else {
        transformState[index].targetRotation = 0;
        transformState[index].targetScale = 1;
        transformState[index].targetX = 0;
        transformState[index].targetY = 0;
      }
    });
  };

  const onMouseOut = (event) => {
    if (
      (event.relatedTarget === null || event.relatedTarget.nodeName === "HTML") &&
      !isPreviewActive &&
      !isTransitioning
    ) {
      clearTransforms();
      parallaxState.targetX = 0;
      parallaxState.targetY = 0;
      parallaxState.targetZ = 0;
    }

    if (isPreviewActive && (event.relatedTarget === null || event.relatedTarget.nodeName === "HTML")) {
      setCloseButtonVisible(false);
    }
  };

  const onWheel = (event) => {
    if (!isPreviewActive) return;
    event.preventDefault();
    if (isTransitioning || isPreviewNavigating) return;
    wheelAccumulator += normalizeWheelDelta(event);
    const threshold = 50;

    if (Math.abs(wheelAccumulator) < threshold) return;

    const direction = wheelAccumulator > 0 ? 1 : -1;
    wheelAccumulator = 0;
    navigatePreview(direction);
  };

  window.addEventListener("resize", onResize);
  document.addEventListener("click", onClick);
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseout", onMouseOut);
  el.addEventListener("wheel", onWheel, { passive: false });
  closeButton?.addEventListener("click", onCloseClick);
  gsap.set(closeButton, { x: -9999, y: -9999 });
  if (progressFill) {
    gsap.set(progressFill, { transformOrigin: "left center", scaleX: 0 });
  }
  setProgress(0);
  onResize();

  const animate = () => {
    if (disposed) return;
    if (!isPreviewActive && !isTransitioning) {
      parallaxState.currentX +=
        (parallaxState.targetX - parallaxState.currentX) * config.lerpFactor;
      parallaxState.currentY +=
        (parallaxState.targetY - parallaxState.currentY) * config.lerpFactor;
      parallaxState.currentZ +=
        (parallaxState.targetZ - parallaxState.currentZ) * config.lerpFactor;

      gsap.set(galleryContainer, {
        rotateX: parallaxState.currentX,
        rotateY: parallaxState.currentY,
        rotation: parallaxState.currentZ,
        transformOrigin: "center center",
      });

      cards.forEach((card, index) => {
        const state = transformState[index];
        state.currentRotation +=
          (state.targetRotation - state.currentRotation) * config.lerpFactor;
        state.currentScale +=
          (state.targetScale - state.currentScale) * config.lerpFactor;
        state.currentX += (state.targetX - state.currentX) * config.lerpFactor;
        state.currentY += (state.targetY - state.currentY) * config.lerpFactor;

        const x = config.radius * Math.cos(state.angle);
        const y = config.radius * Math.sin(state.angle);

        gsap.set(card, {
          x: x + state.currentX,
          y: y + state.currentY,
          rotationY: state.currentRotation,
          scale: state.currentScale,
          rotation: (state.angle * 180) / Math.PI + 90,
          transformOrigin: "center center",
          transformPerspective: 1000,
        });
      });
    }
    rafId = window.requestAnimationFrame(animate);
  };

  animate();

  el._inkwellImageGalleryCleanup = () => {
    disposed = true;
    if (rafId) window.cancelAnimationFrame(rafId);
    window.removeEventListener("resize", onResize);
    document.removeEventListener("click", onClick);
    document.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseout", onMouseOut);
    el.removeEventListener("wheel", onWheel);
    closeButton?.removeEventListener("click", onCloseClick);
    if (progressResetTimeoutId) {
      window.clearTimeout(progressResetTimeoutId);
      progressResetTimeoutId = null;
    }
    gsap.killTweensOf(gallery);
    gsap.killTweensOf(cards);
    gsap.killTweensOf(parallaxState);
    gsap.killTweensOf(closeButton);
    gsap.killTweensOf(progressFill);
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="inkwell-image-gallery"]')
      .forEach((el) => initInkwellImageGallery(el));
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
