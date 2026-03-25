import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { escapeHtml } from "../../core/dom.js";

gsap.registerPlugin(ScrollTrigger);

const CONFIG = {
  gap: 0.08,
  speed: 0.3,
  arcRadius: 500,
};

function parseItems(el) {
  const json = el.getAttribute("data-telescope-scroll-items");
  if (json) {
    try {
      const parsed = JSON.parse(json);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  const items = el.querySelectorAll("[data-telescope-scroll-item]");
  return Array.from(items).map((item) => ({
    name: item.getAttribute("data-name") ?? "",
    img: item.getAttribute("data-img") ?? "",
  }));
}

export function initTelescopeScroll(el) {
  if (el._telescopeScrollCleanup) {
    el._telescopeScrollCleanup();
  }

  const items = parseItems(el);
  if (!items.length) return;

  const introLeft = el.querySelector("[data-telescope-scroll-intro-left]");
  const introRight = el.querySelector("[data-telescope-scroll-intro-right]");
  const bgImg = el.querySelector("[data-telescope-scroll-bg]");
  const titlesHost = el.querySelector("[data-telescope-scroll-titles]");
  const imagesHost = el.querySelector("[data-telescope-scroll-images]");
  const header = el.querySelector("[data-telescope-scroll-header]");
  const titlesContainer = el.querySelector("[data-telescope-scroll-titles-container]");

  if (!bgImg || !titlesHost || !imagesHost || !titlesContainer) {
    return;
  }

  const useLenis = el.getAttribute("data-telescope-scroll-lenis") === "true";
  const scrollHeight = Number(el.getAttribute("data-telescope-scroll-height")) || 10;
  const scrub = Number(el.getAttribute("data-telescope-scroll-scrub")) || 1;

  let lenis = null;
  let gsapTickerHandler = null;

  const introElements = [introLeft, introRight].filter(Boolean);

  titlesHost.innerHTML = "";
  imagesHost.innerHTML = "";
  const bgImgEl = bgImg.querySelector("img");
  if (bgImgEl && items[0]?.img) {
    bgImgEl.src = items[0].img;
    bgImgEl.alt = escapeHtml(items[0].name);
  }

  const imageElements = [];
  items.forEach((item, index) => {
    const titleEl = document.createElement("h1");
    titleEl.textContent = item.name;
    if (index === 0) titleEl.style.opacity = "1";
    titlesHost.appendChild(titleEl);

    const imgWrapper = document.createElement("div");
    imgWrapper.className = "telescope-scroll-img";
    const imgEl = document.createElement("img");
    imgEl.src = item.img;
    imgEl.alt = escapeHtml(item.name);
    imgWrapper.appendChild(imgEl);
    imagesHost.appendChild(imgWrapper);
    imageElements.push(imgWrapper);
  });

  const titleElements = titlesHost.querySelectorAll("h1");
  let currentActiveIndex = 0;

  const containerWidth = window.innerWidth * 0.3;
  const containerHeight = window.innerHeight;
  const arcStartX = containerWidth - 220;
  const arcStartY = -200;
  const arcEndY = containerHeight + 200;
  const arcControlPointX = arcStartX + CONFIG.arcRadius;
  const arcControlPointY = containerHeight / 2;

  function getBezierPosition(t) {
    const x =
      (1 - t) * (1 - t) * arcStartX +
      2 * (1 - t) * t * arcControlPointX +
      t * t * arcStartX;
    const y =
      (1 - t) * (1 - t) * arcStartY +
      2 * (1 - t) * t * arcControlPointY +
      t * t * arcEndY;
    return { x, y };
  }

  function getImgProgressState(index, overallProgress) {
    const startTime = index * CONFIG.gap;
    const endTime = startTime + CONFIG.speed;

    if (overallProgress < startTime) return -1;
    if (overallProgress > endTime) return 2;

    return (overallProgress - startTime) / CONFIG.speed;
  }

  imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));

  const trigger = el.querySelector("[data-telescope-scroll-trigger]") ?? el;
  const endDistance = window.innerHeight * scrollHeight;

  const st = ScrollTrigger.create({
    trigger,
    start: "top top",
    end: `+=${endDistance}px`,
    pin: true,
    pinSpacing: true,
    scrub,
    onUpdate: (self) => {
      const progress = self.progress;

      if (progress <= 0.2) {
        const animationProgress = progress / 0.2;
        const moveDistance = window.innerWidth * 0.6;

        introElements.forEach((el, i) => {
          if (el) {
            gsap.set(el, {
              x: i === 0 ? -animationProgress * moveDistance : animationProgress * moveDistance,
              opacity: 1,
            });
          }
        });

        gsap.set(bgImg, { scale: animationProgress });
        gsap.set(bgImg.querySelector("img"), { scale: 1.5 - animationProgress * 0.5 });

        imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));
        if (header) header.style.opacity = "0";
        gsap.set(titlesContainer, {
          "--telescope-before-opacity": "0",
          "--telescope-after-opacity": "0",
        });
      } else if (progress > 0.2 && progress <= 0.25) {
        gsap.set(bgImg, { scale: 1 });
        gsap.set(bgImg.querySelector("img"), { scale: 1 });

        introElements.forEach((el) => el && gsap.set(el, { opacity: 0 }));
        imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));
        if (header) header.style.opacity = "1";
        gsap.set(titlesContainer, {
          "--telescope-before-opacity": "1",
          "--telescope-after-opacity": "1",
        });
      } else if (progress > 0.25 && progress <= 0.95) {
        gsap.set(bgImg, { scale: 1 });
        gsap.set(bgImg.querySelector("img"), { scale: 1 });
        introElements.forEach((el) => el && gsap.set(el, { opacity: 0 }));
        if (header) header.style.opacity = "1";
        gsap.set(titlesContainer, {
          "--telescope-before-opacity": "1",
          "--telescope-after-opacity": "1",
        });

        const switchProgress = (progress - 0.25) / 0.7;
        const viewportHeight = window.innerHeight;
        const titlesHeight = titlesHost.scrollHeight;
        const startPosition = viewportHeight;
        const targetPosition = -titlesHeight;
        const totalDistance = startPosition - targetPosition;
        const currentY = startPosition - switchProgress * totalDistance;

        gsap.set(titlesHost, { y: currentY });

        imageElements.forEach((img, index) => {
          const imageProgress = getImgProgressState(index, switchProgress);

          if (imageProgress < 0 || imageProgress > 1) {
            gsap.set(img, { opacity: 0 });
          } else {
            const pos = getBezierPosition(imageProgress);
            gsap.set(img, {
              x: pos.x - 100,
              y: pos.y - 75,
              opacity: 1,
            });
          }
        });

        const viewportMiddle = viewportHeight / 2;
        let closestIndex = 0;
        let closestDistance = Infinity;

        titleElements.forEach((title, index) => {
          const rect = title.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const distance = Math.abs(center - viewportMiddle);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        if (closestIndex !== currentActiveIndex) {
          if (titleElements[currentActiveIndex]) {
            titleElements[currentActiveIndex].style.opacity = "0.25";
          }
          titleElements[closestIndex].style.opacity = "1";
          const bgImgInner = bgImg.querySelector("img");
          if (bgImgInner && items[closestIndex]?.img) {
            bgImgInner.src = items[closestIndex].img;
          }
          currentActiveIndex = closestIndex;
        }
      } else if (progress > 0.95) {
        if (header) header.style.opacity = "0";
        gsap.set(titlesContainer, {
          "--telescope-before-opacity": "0",
          "--telescope-after-opacity": "0",
        });
      }
    },
  });

  if (useLenis) {
    lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsapTickerHandler = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(gsapTickerHandler);
    gsap.ticker.lagSmoothing(0);
  }

  el._telescopeScrollCleanup = () => {
    st.kill();
    if (gsapTickerHandler) gsap.ticker.remove(gsapTickerHandler);
    lenis?.destroy();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="telescope-scroll"]')
      .forEach((el) => initTelescopeScroll(el));
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
