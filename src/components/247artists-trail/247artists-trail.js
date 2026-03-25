const DEFAULT_IMAGES = Array.from(
  { length: 20 },
  (_, i) => `https://picsum.photos/seed/247artists-trail-${i + 1}/420/420`,
);

function safeParseImages(value) {
  if (!value) return DEFAULT_IMAGES;
  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed) || parsed.length === 0) return DEFAULT_IMAGES;
    return parsed.filter((item) => typeof item === "string" && item.trim().length > 0);
  } catch {
    return DEFAULT_IMAGES;
  }
}

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function distance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

export function init247artistsTrail(el) {
  if (el._artists247TrailCleanup) {
    el._artists247TrailCleanup();
  }

  const trailContainer =
    el.querySelector("[data-247-trail-container]") || el.querySelector(".trail-container");
  if (!trailContainer) return;

  const config = {
    imageLifespan: Number(el.dataset.trailImageLifespan ?? 1000),
    mouseThreshold: Number(el.dataset.trailMouseThreshold ?? 150),
    inDuration: Number(el.dataset.trailInDuration ?? 750),
    outDuration: Number(el.dataset.trailOutDuration ?? 1000),
    staggerIn: Number(el.dataset.trailStaggerIn ?? 100),
    staggerOut: Number(el.dataset.trailStaggerOut ?? 25),
    slideDuration: Number(el.dataset.trailSlideDuration ?? 1000),
    slideEasing: el.dataset.trailSlideEasing ?? "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    easing: el.dataset.trailEasing ?? "cubic-bezier(0.87, 0, 0.13, 1)",
    imageSize: Number(el.dataset.trailImageSize ?? 175),
  };
  el.style.setProperty("--trail-image-size", `${config.imageSize}px`);

  const images = safeParseImages(el.dataset.trailImages);
  const mousePos = { x: 0, y: 0 };
  const lastMousePos = { x: 0, y: 0 };
  const interpolatedMousePos = { x: 0, y: 0 };
  const trailItems = [];
  const timeoutIds = new Set();
  let rafId = null;
  let currentImageIndex = 0;
  let isDesktop = window.innerWidth > 1000;

  const schedule = (callback, delay) => {
    const id = window.setTimeout(() => {
      timeoutIds.delete(id);
      callback();
    }, delay);
    timeoutIds.add(id);
  };

  const isInTrailContainer = (x, y) => {
    const rect = trailContainer.getBoundingClientRect();
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };

  const createTrailImage = () => {
    const imgContainer = document.createElement("div");
    imgContainer.className = "trail-img";

    const imgSrc = images[currentImageIndex % images.length];
    currentImageIndex += 1;

    const rect = trailContainer.getBoundingClientRect();
    const offset = config.imageSize / 2;
    const startX = interpolatedMousePos.x - rect.left - offset;
    const startY = interpolatedMousePos.y - rect.top - offset;
    const targetX = mousePos.x - rect.left - offset;
    const targetY = mousePos.y - rect.top - offset;

    imgContainer.style.left = `${startX}px`;
    imgContainer.style.top = `${startY}px`;
    imgContainer.style.transition = `left ${config.slideDuration}ms ${config.slideEasing}, top ${config.slideDuration}ms ${config.slideEasing}`;

    const maskLayers = [];
    const imageLayers = [];
    for (let i = 0; i < 10; i += 1) {
      const layer = document.createElement("div");
      layer.className = "mask-layer";

      const imageLayer = document.createElement("div");
      imageLayer.className = "image-layer";
      imageLayer.style.backgroundImage = `url("${imgSrc}")`;

      const startPercent = i * 10;
      const endPercent = (i + 1) * 10;
      layer.style.clipPath = `polygon(50% ${startPercent}%, 50% ${startPercent}%, 50% ${endPercent}%, 50% ${endPercent}%)`;
      layer.style.transition = `clip-path ${config.inDuration}ms ${config.easing}`;
      layer.style.transform = "translateZ(0)";
      layer.style.backfaceVisibility = "hidden";

      layer.appendChild(imageLayer);
      imgContainer.appendChild(layer);
      maskLayers.push(layer);
      imageLayers.push(imageLayer);
    }

    trailContainer.appendChild(imgContainer);

    requestAnimationFrame(() => {
      imgContainer.style.left = `${targetX}px`;
      imgContainer.style.top = `${targetY}px`;

      maskLayers.forEach((layer, i) => {
        const startPercent = i * 10;
        const endPercent = (i + 1) * 10;
        const distanceFromMiddle = Math.abs(i - 4.5);
        const delay = distanceFromMiddle * config.staggerIn;
        schedule(() => {
          layer.style.clipPath = `polygon(0% ${startPercent}%, 100% ${startPercent}%, 100% ${endPercent}%, 0% ${endPercent}%)`;
        }, delay);
      });
    });

    trailItems.push({
      element: imgContainer,
      maskLayers,
      imageLayers,
      removeTime: Date.now() + config.imageLifespan,
    });
  };

  const removeOldImages = () => {
    const now = Date.now();
    if (trailItems.length === 0) return;

    const oldest = trailItems[0];
    if (now < oldest.removeTime) return;

    const item = trailItems.shift();
    if (!item) return;

    item.maskLayers.forEach((layer, i) => {
      const startPercent = i * 10;
      const endPercent = (i + 1) * 10;
      const distanceFromEdge = 4.5 - Math.abs(i - 4.5);
      const delay = distanceFromEdge * config.staggerOut;
      layer.style.transition = `clip-path ${config.outDuration}ms ${config.easing}`;
      schedule(() => {
        layer.style.clipPath = `polygon(50% ${startPercent}%, 50% ${startPercent}%, 50% ${endPercent}%, 50% ${endPercent}%)`;
      }, delay);
    });

    item.imageLayers.forEach((imageLayer) => {
      imageLayer.style.transition = `opacity ${config.outDuration}ms ${config.easing}`;
      imageLayer.style.opacity = "0.25";
    });

    schedule(() => {
      item.element.remove();
    }, config.outDuration + 112);
  };

  const render = () => {
    const movedDistance = distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);

    interpolatedMousePos.x = lerp(interpolatedMousePos.x || mousePos.x, mousePos.x, 0.1);
    interpolatedMousePos.y = lerp(interpolatedMousePos.y || mousePos.y, mousePos.y, 0.1);

    if (movedDistance > config.mouseThreshold && isInTrailContainer(mousePos.x, mousePos.y)) {
      createTrailImage();
      lastMousePos.x = mousePos.x;
      lastMousePos.y = mousePos.y;
    }

    removeOldImages();
    rafId = requestAnimationFrame(render);
  };

  const onMouseMove = (event) => {
    mousePos.x = event.clientX;
    mousePos.y = event.clientY;
  };

  const startAnimation = () => {
    if (!isDesktop || rafId !== null) return;
    document.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(render);
  };

  const stopAnimation = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    document.removeEventListener("mousemove", onMouseMove);
    trailItems.forEach((item) => item.element.remove());
    trailItems.length = 0;
  };

  const onResize = () => {
    const wasDesktop = isDesktop;
    isDesktop = window.innerWidth > 1000;
    if (isDesktop && !wasDesktop) startAnimation();
    if (!isDesktop && wasDesktop) stopAnimation();
  };

  window.addEventListener("resize", onResize);
  if (isDesktop) startAnimation();

  el._artists247TrailCleanup = () => {
    stopAnimation();
    window.removeEventListener("resize", onResize);
    timeoutIds.forEach((id) => window.clearTimeout(id));
    timeoutIds.clear();
  };
}
