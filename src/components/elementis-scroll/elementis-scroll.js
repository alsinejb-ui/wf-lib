import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { escapeHtml } from "../../core/dom.js";

gsap.registerPlugin(ScrollTrigger);

const STRIPS_COUNT = 25;
const SCROLL_DISTANCE_PER_TRANSITION = 1000;
const INITIAL_SCROLL_DELAY = 300;
const FINAL_SCROLL_DELAY = 300;
const TITLE_CHANGE_THRESHOLD = 0.5;
const STRIP_DELAY_FACTOR = 0.5;

function isSafeUrl(url) {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim().toLowerCase();
  return (
    trimmed === "#" ||
    trimmed.startsWith("/") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("http://")
  );
}

function parseSlides(el) {
  const json = el.getAttribute("data-elementis-slides");
  if (json) {
    try {
      const parsed = JSON.parse(json);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.warn("[elementis-scroll] Invalid data-elementis-slides JSON:", err);
      return [];
    }
  }
  const items = el.querySelectorAll("[data-elementis-slide]");
  return Array.from(items).map((item) => ({
    title: item.getAttribute("data-title") ?? "",
    image: item.getAttribute("data-image") ?? "",
    url: item.getAttribute("data-url") ?? "#",
  }));
}

function getScaleForImage(imageIndex, currentImageIndex, progress) {
  if (imageIndex > currentImageIndex) return 1.25;
  if (imageIndex < currentImageIndex - 1) return 1;

  const totalProgress =
    imageIndex === currentImageIndex ? progress : 1 + progress;
  return 1.25 - (0.25 * totalProgress) / 2;
}

export function initElementisScroll(el) {
  if (el._elementisScrollCleanup) {
    el._elementisScrollCleanup();
  }

  const slides = parseSlides(el);
  if (!slides.length) return;

  const imagesHost = el.querySelector("[data-elementis-images]");
  const titleEl = el.querySelector("[data-elementis-title]");
  const linkAnchor = el.querySelector("a[data-elementis-link]") ?? el.querySelector("[data-elementis-link] a");

  if (!imagesHost || !titleEl) return;

  const useLenis = el.getAttribute("data-elementis-lenis") === "true";
  const scrubVal = el.getAttribute("data-elementis-scrub");
  const scrub = scrubVal === "true" ? true : Number(scrubVal) || 1;

  let lenis = null;
  let gsapTickerHandler = null;
  let currentTitleIndex = 0;
  let queuedTitleIndex = null;
  let isAnimating = false;
  let lastImageProgress = 0;

  const totalSlides = slides.length;
  const transitionCount = totalSlides - 1;
  const totalScrollDistance =
    transitionCount * SCROLL_DISTANCE_PER_TRANSITION +
    INITIAL_SCROLL_DELAY +
    FINAL_SCROLL_DELAY;

  const transitionRanges = [];
  let currentScrollPosition = INITIAL_SCROLL_DELAY;

  for (let i = 0; i < transitionCount; i++) {
    const transitionStart = currentScrollPosition;
    const transitionEnd = transitionStart + SCROLL_DISTANCE_PER_TRANSITION;
    transitionRanges.push({
      transition: i,
      startPercent: transitionStart / totalScrollDistance,
      endPercent: transitionEnd / totalScrollDistance,
    });
    currentScrollPosition = transitionEnd;
  }

  function calculateImageProgress(scrollProgress) {
    if (!transitionRanges.length) return 0;
    if (scrollProgress < transitionRanges[0].startPercent) return 0;
    if (
      scrollProgress >
      transitionRanges[transitionRanges.length - 1].endPercent
    ) {
      return transitionRanges.length;
    }

    for (let i = 0; i < transitionRanges.length; i++) {
      const range = transitionRanges[i];
      if (
        scrollProgress >= range.startPercent &&
        scrollProgress <= range.endPercent
      ) {
        const rangeSize = range.endPercent - range.startPercent;
        const normalizedProgress =
          (scrollProgress - range.startPercent) / rangeSize;
        return i + normalizedProgress;
      }
      if (scrollProgress > range.endPercent) return i + 1;
    }
    return 0;
  }

  function getTitleIndexForProgress(imageProgress) {
    const imageIndex = Math.floor(imageProgress);
    const imageSpecificProgress = imageProgress - imageIndex;
    if (imageSpecificProgress >= TITLE_CHANGE_THRESHOLD) {
      return Math.min(imageIndex + 1, slides.length - 1);
    }
    return imageIndex;
  }

  function animateTitleChange(index, direction) {
    if (index === currentTitleIndex) return;
    if (index < 0 || index >= slides.length) return;

    if (isAnimating) {
      queuedTitleIndex = index;
      return;
    }

    isAnimating = true;
    const slide = slides[index];
    const outY = direction === "down" ? "-120%" : "120%";
    const inY = direction === "down" ? "120%" : "-120%";

    gsap.killTweensOf(titleEl);
    if (linkAnchor) linkAnchor.href = isSafeUrl(slide.url) ? slide.url : "#";

    gsap.to(titleEl, {
      y: outY,
      duration: 0.5,
      ease: "power3.out",
      onComplete: () => {
        titleEl.textContent = slide.title;
        gsap.set(titleEl, { y: inY });

        gsap.to(titleEl, {
          y: "0%",
          duration: 0.5,
          ease: "power3.out",
          onComplete: () => {
            currentTitleIndex = index;
            isAnimating = false;
            if (
              queuedTitleIndex !== null &&
              queuedTitleIndex !== currentTitleIndex
            ) {
              const nextIndex = queuedTitleIndex;
              queuedTitleIndex = null;
              animateTitleChange(nextIndex, direction);
            }
          },
        });
      },
    });
  }

  imagesHost.innerHTML = "";

  const firstImgContainer = document.createElement("div");
  firstImgContainer.className = "elementis-scroll-img";
  const firstImg = document.createElement("img");
  firstImg.src = slides[0].image;
  firstImg.alt = escapeHtml(slides[0].title);
  firstImg.style.transform = "scale(1.25)";
  firstImgContainer.appendChild(firstImg);
  imagesHost.appendChild(firstImgContainer);

  titleEl.textContent = slides[0].title;
  if (linkAnchor) linkAnchor.href = isSafeUrl(slides[0].url) ? slides[0].url : "#";

  for (let i = 1; i < totalSlides; i++) {
    const imgContainer = document.createElement("div");
    imgContainer.className = "elementis-scroll-img-container";
    imgContainer.dataset.slideIndex = String(i);
    imgContainer.style.opacity = "0";

    for (let j = 0; j < STRIPS_COUNT; j++) {
      const strip = document.createElement("div");
      strip.className = "elementis-scroll-strip";

      const img = document.createElement("img");
      img.src = slides[i].image;
      img.alt = escapeHtml(slides[i].title);
      img.style.transform = "scale(1.25)";

      const stripPositionFromBottom = STRIPS_COUNT - j - 1;
      const stripLowerBound = (stripPositionFromBottom + 1) * (100 / STRIPS_COUNT);
      const stripUpperBound = stripPositionFromBottom * (100 / STRIPS_COUNT);

      strip.style.clipPath = `polygon(0% ${stripLowerBound}%, 100% ${stripLowerBound}%, 100% ${stripUpperBound - 0.1}%, 0% ${stripUpperBound - 0.1}%)`;

      strip.appendChild(img);
      imgContainer.appendChild(strip);
    }

    imagesHost.appendChild(imgContainer);
  }

  const imgContainers = [];
  for (let i = 1; i < totalSlides; i++) {
    const c = imagesHost.querySelector(`[data-slide-index="${i}"]`);
    if (c) imgContainers.push({ container: c, strips: c.querySelectorAll(".elementis-scroll-strip"), images: c.querySelectorAll("img") });
  }

  const trigger = el.querySelector("[data-elementis-trigger]") ?? el;

  const st = ScrollTrigger.create({
    trigger,
    start: "top top",
    end: `+=${totalScrollDistance}vh`,
    pin: true,
    pinSpacing: true,
    scrub,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const imageProgress = calculateImageProgress(self.progress);
      const scrollDirection =
        imageProgress > lastImageProgress ? "down" : "up";
      const currentImageIndex = Math.floor(imageProgress);
      const imageSpecificProgress = imageProgress - currentImageIndex;

      const correctTitleIndex = getTitleIndexForProgress(imageProgress);
      if (correctTitleIndex !== currentTitleIndex) {
        if (linkAnchor && slides[correctTitleIndex]) {
          const url = slides[correctTitleIndex].url;
          linkAnchor.href = isSafeUrl(url) ? url : "#";
        }
        queuedTitleIndex = correctTitleIndex;
        if (!isAnimating) {
          animateTitleChange(correctTitleIndex, scrollDirection);
        }
      }

      const firstSlideImgScale = getScaleForImage(
        0,
        currentImageIndex,
        imageSpecificProgress,
      );
      gsap.set(firstImg, { scale: firstSlideImgScale, force3D: true });

      imgContainers.forEach(({ container, strips, images }, idx) => {
        const transitionIndex = idx;
        container.style.opacity = "1";

        if (transitionIndex < currentImageIndex) {
          strips.forEach((strip, stripIndex) => {
            const stripPositionFromBottom = STRIPS_COUNT - stripIndex - 1;
            const stripUpperBound =
              stripPositionFromBottom * (100 / STRIPS_COUNT);
            const stripLowerBound =
              (stripPositionFromBottom + 1) * (100 / STRIPS_COUNT);
            strip.style.clipPath = `polygon(0% ${stripLowerBound}%, 100% ${stripLowerBound}%, 100% ${stripUpperBound - 0.1}%, 0% ${stripUpperBound - 0.1}%)`;
          });
        } else if (transitionIndex === currentImageIndex) {
          strips.forEach((strip, stripIndex) => {
            const stripPositionFromBottom = STRIPS_COUNT - stripIndex - 1;
            const stripUpperBound =
              stripPositionFromBottom * (100 / STRIPS_COUNT);
            const stripLowerBound =
              (stripPositionFromBottom + 1) * (100 / STRIPS_COUNT);
            const stripDelay = (stripIndex / STRIPS_COUNT) * STRIP_DELAY_FACTOR;
            const adjustedProgress = Math.max(
              0,
              Math.min(1, (imageSpecificProgress - stripDelay) * 2),
            );
            const currentstripUpperBound =
              stripLowerBound -
              (stripLowerBound - (stripUpperBound - 0.1)) * adjustedProgress;
            strip.style.clipPath = `polygon(0% ${stripLowerBound}%, 100% ${stripLowerBound}%, 100% ${currentstripUpperBound}%, 0% ${currentstripUpperBound}%)`;
          });
        } else {
          strips.forEach((strip, stripIndex) => {
            const stripPositionFromBottom = STRIPS_COUNT - stripIndex - 1;
            const stripLowerBound =
              (stripPositionFromBottom + 1) * (100 / STRIPS_COUNT);
            strip.style.clipPath = `polygon(0% ${stripLowerBound}%, 100% ${stripLowerBound}%, 100% ${stripLowerBound}%, 0% ${stripLowerBound}%)`;
          });
        }

        const imgScale = getScaleForImage(
          transitionIndex,
          currentImageIndex,
          imageSpecificProgress,
        );
        gsap.set(images, { scale: imgScale, force3D: true });
      });

      lastImageProgress = imageProgress;
    },
  });

  if (useLenis) {
    lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsapTickerHandler = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(gsapTickerHandler);
    gsap.ticker.lagSmoothing(0);
  }

  el._elementisScrollCleanup = () => {
    st.kill();
    gsap.killTweensOf(titleEl);
    if (gsapTickerHandler) gsap.ticker.remove(gsapTickerHandler);
    lenis?.destroy();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="elementis-scroll"]')
      .forEach((el) => initElementisScroll(el));
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
