/**
 * Smooothy Parallax Slider — Slider horizontal infini avec effet parallax fluide.
 * Inspiré du template https://template-1-c1ef73.webflow.io/
 * GSAP ticker + lerp pour animation fluide, parallax sur [data-p].
 */

import gsap from "gsap";

const DEFAULT_CONFIG = {
  sensitivity: 1,
  easeFactor: 0.05,
  parallaxStrength: 15,
  cloneCount: 4,
};

const lerp = (a, b, n) => a + (b - a) * n;

function parseSlides(el) {
  const json = el.getAttribute("data-sps-slides");
  if (json) {
    try {
      return JSON.parse(json);
    } catch {
      return [];
    }
  }
  const items = el.querySelectorAll("[data-sps-slide]");
  return Array.from(items).map((item) => ({
    img: item.getAttribute("data-img") ?? "",
    alt: item.getAttribute("data-alt") ?? "",
  }));
}

function buildSliderMarkup(slidesData) {
  return slidesData
    .map(
      (s) => `
    <div class="sps-slide">
      <div class="sps-slide-inner">
        <div data-p class="sps-parallax">
          <img src="${s.img}" alt="${s.alt || ""}" />
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

export function initSmooothyParallaxSlider(el) {
  if (el._spsCleanup) el._spsCleanup();

  const track = el.querySelector("[data-sps-track]");
  if (!track) return;

  const slidesData = parseSlides(el);
  const hasCustomMarkup = track.children.length > 0 && track.querySelectorAll("[data-p]").length > 0;

  if (!slidesData.length && !hasCustomMarkup) return;

  if (slidesData.length > 0) {
    track.innerHTML = buildSliderMarkup(slidesData);
  }

  const sensitivity =
    Number(el.getAttribute("data-sps-sensitivity")) || DEFAULT_CONFIG.sensitivity;
  const easeFactor =
    Number(el.getAttribute("data-sps-ease")) || DEFAULT_CONFIG.easeFactor;
  const parallaxStrength =
    Number(el.getAttribute("data-sps-parallax-strength")) ??
    DEFAULT_CONFIG.parallaxStrength;
  const cloneCount =
    Number(el.getAttribute("data-sps-clones")) || DEFAULT_CONFIG.cloneCount;
  const slides = [...track.querySelectorAll(".sps-slide")];
  const originalCount = slides.length;
  if (!originalCount) return;

  const getDimensions = () => {
    const first = track.querySelector(".sps-slide");
    if (!first) return { itemWidth: 0, fullSetWidth: 0 };
    const style = getComputedStyle(first);
    const itemWidth =
      first.offsetWidth + parseFloat(style.marginRight || 0);
    return {
      itemWidth,
      fullSetWidth: originalCount * itemWidth,
    };
  };

  for (let i = 0; i < cloneCount; i++) {
    slides.forEach((slide) => {
      track.appendChild(slide.cloneNode(true));
    });
  }

  const allSlides = [...track.querySelectorAll(".sps-slide")];
  const parallaxElements = [...track.querySelectorAll("[data-p]")];

  const setX = gsap.quickSetter(track, "x", "px");

  let target = 0;
  let current = 0;
  let dims = getDimensions();

  const updateParallax = () => {
    const containerRect = el.getBoundingClientRect();
    const viewportCenterX = containerRect.left + containerRect.width / 2;

    parallaxElements.forEach((parallaxEl, i) => {
      const slide = allSlides[i];
      if (!slide) return;
      const slideRect = slide.getBoundingClientRect();
      const slideCenterX = slideRect.left + slideRect.width / 2;
      const distanceFromCenter = slideCenterX - viewportCenterX;
      const normalized = Math.max(
        -1,
        Math.min(1, distanceFromCenter / (containerRect.width * 0.5))
      );
      const offset = normalized * parallaxStrength;
      const currentOffset = parseFloat(parallaxEl.dataset.parallaxLerp ?? "0");
      const lerpedOffset = lerp(currentOffset, offset, 0.08);
      parallaxEl.dataset.parallaxLerp = String(lerpedOffset);
      parallaxEl.style.transform = `translateX(${lerpedOffset}%)`;
    });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    target += e.deltaY * sensitivity;
  };

  let tickerFn;
  tickerFn = () => {
    dims = getDimensions();
    if (dims.fullSetWidth <= 0) return;

    current = lerp(current, target, easeFactor);

    let mod = current % dims.fullSetWidth;
    if (mod < 0) mod += dims.fullSetWidth;

    setX(-mod);
    updateParallax();
  };

  gsap.ticker.lagSmoothing(0);
  el.addEventListener("wheel", handleWheel, { passive: false });
  gsap.ticker.add(tickerFn);

  const resizeObserver = new ResizeObserver(() => {
    const rect = el.getBoundingClientRect();
    if (rect.width) updateParallax();
  });
  resizeObserver.observe(el);

  el._spsCleanup = () => {
    el.removeEventListener("wheel", handleWheel);
    gsap.ticker.remove(tickerFn);
    resizeObserver.disconnect();
    el._spsCleanup = null;
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="smooothy-parallax-slider"]')
      .forEach(initSmooothyParallaxSlider);
  };
  if (document.readyState === "complete") {
    init();
  } else {
    window.addEventListener("load", init, { once: true });
  }
}
