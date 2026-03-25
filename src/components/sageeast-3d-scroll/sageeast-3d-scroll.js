import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { escapeHtml } from "../../core/dom.js";

gsap.registerPlugin(ScrollTrigger);

const Z_STEP = 2500;
const Z_TRAVEL = 22500;
const OPACITY_Z_NEAR = 0;
const OPACITY_Z_MID = -2500;
const OPACITY_Z_FAR = -5000;
const ACTIVE_THRESHOLD = 100;

function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function parseSlides(el) {
  const json = el.getAttribute("data-sg-slides");
  if (json) {
    try {
      return JSON.parse(json);
    } catch {
      return [];
    }
  }
  const items = el.querySelectorAll("[data-sg-slide]");
  return Array.from(items).map((item) => ({
    image: item.getAttribute("data-image") ?? "",
    title: item.getAttribute("data-title") ?? "",
    index: item.getAttribute("data-index") ?? "",
  }));
}

export function initSageeast3dScroll(el) {
  if (el._sg3dScrollCleanup) {
    el._sg3dScrollCleanup();
  }

  const container = el.querySelector("[data-sg-container]");
  const slider = el.querySelector("[data-sg-slider]");
  const activeHost = el.querySelector("[data-sg-active]");

  const slides = parseSlides(el);
  if (!container || !slider || !activeHost || !slides.length) {
    return;
  }

  const scrub = Number(el.getAttribute("data-sg-scrub")) || 1;
  const containerHeight = slides.length * 200;
  container.style.height = `${containerHeight}vh`;

  activeHost.innerHTML = slides
    .map((s) => `<img src="${escapeHtml(s.image)}" alt="${escapeHtml(s.title)}" />`)
    .join("");

  slider.innerHTML = slides
    .map(
      (s, i) => `
      <div data-sg-slide class="sg-slide" style="
        left: ${i % 2 === 0 ? "70" : "30"}%;
        transform: translateX(-50%) translateY(-50%) translateZ(${-Z_STEP * (slides.length - 1 - i)}px);
        opacity: ${i === slides.length - 1 ? 1 : 0};
      ">
        <div class="sg-slide-copy">
          <p>${escapeHtml(s.title)}</p>
          ${s.index ? `<p class="sg-slide-index">${escapeHtml(s.index)}</p>` : ""}
        </div>
        <div class="sg-slide-img">
          <img src="${escapeHtml(s.image)}" alt="${escapeHtml(s.title)}" />
        </div>
      </div>
    `,
    )
    .join("");

  const slideEls = slider.querySelectorAll("[data-sg-slide]");
  const activeImages = activeHost.querySelectorAll("img");

  const triggers = [];

  slideEls.forEach((slide, index) => {
    const initialZ = -Z_STEP * (slides.length - 1 - index);

    triggers.push(
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub,
        onUpdate: (self) => {
          const progress = self.progress;
          const zIncrement = progress * Z_TRAVEL;
          const currentZ = initialZ + zIncrement;

          let opacity;
          if (currentZ >= OPACITY_Z_MID) {
            opacity = mapRange(currentZ, OPACITY_Z_MID, OPACITY_Z_NEAR, 0.5, 1);
          } else {
            opacity = mapRange(currentZ, OPACITY_Z_FAR, OPACITY_Z_MID, 0, 0.5);
          }
          slide.style.opacity = opacity;
          slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`;

          if (currentZ < ACTIVE_THRESHOLD) {
            gsap.to(activeImages[index], { opacity: 1, duration: 1.5, ease: "power3.out" });
          } else {
            gsap.to(activeImages[index], { opacity: 0, duration: 1.5, ease: "power3.out" });
          }
        },
      }),
    );
  });

  el._sg3dScrollCleanup = () => {
    triggers.forEach((t) => t.kill());
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="sageeast-3d-scroll"]')
      .forEach((el) => initSageeast3dScroll(el));
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
