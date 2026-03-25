import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { escapeHtml } from "../../core/dom.js";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_SLIDES = [
  { title: "Human Form Study", image: "../elementis-scroll/public/img1.jpg" },
  { title: "Interior Light", image: "../elementis-scroll/public/img2.jpg" },
  { title: "Project 21", image: "../elementis-scroll/public/img3.jpg" },
  { title: "Shadow Portraits", image: "../elementis-scroll/public/img4.jpg" },
  { title: "Everyday Objects", image: "../elementis-scroll/public/img5.jpg" },
  { title: "Unit 07 Care", image: "../fractal-glass-effect/public/hero.jpg" },
  { title: "Motion Practice", image: "../fractal-glass-effect/public/hero2.jpg" },
  { title: "Noonlight Series", image: "../fractal-glass-effect/public/hero3.jpg" },
  { title: "Material Stillness", image: "../fractal-glass-effect/public/hero4.jpg" },
  { title: "Quiet Walk", image: "../elementis-scroll/public/img1.jpg" },
];

function parseSlides(el) {
  const json = el.getAttribute("data-psa-slides");
  if (json) {
    try {
      const parsed = JSON.parse(json);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    } catch (err) {
      console.warn("[prototypestudio-scroll-animation] Invalid slides JSON", err);
    }
  }
  return DEFAULT_SLIDES;
}

export function initPrototypestudioScrollAnimation(el) {
  if (el._prototypestudioScrollAnimationCleanup) {
    el._prototypestudioScrollAnimationCleanup();
  }

  const spotlight = el.querySelector("[data-psa-spotlight]");
  const projectIndex = el.querySelector("[data-psa-index]");
  const projectImagesContainer = el.querySelector("[data-psa-images]");
  const projectNamesContainer = el.querySelector("[data-psa-names]");
  if (!spotlight || !projectIndex || !projectImagesContainer || !projectNamesContainer) {
    return;
  }

  const slides = parseSlides(el);
  if (!slides.length) return;

  const useLenis = el.getAttribute("data-psa-lenis") === "true";
  const scrub = Number(el.getAttribute("data-psa-scrub")) || 1;
  const pinMultiplier = Number(el.getAttribute("data-psa-pin-multiplier")) || 5;

  projectImagesContainer.innerHTML = slides
    .map(
      (slide) =>
        `<div class="psa-project-img"><img src="${escapeHtml(slide.image)}" alt="${escapeHtml(
          slide.title ?? "",
        )}" /></div>`,
    )
    .join("");

  projectNamesContainer.innerHTML = slides
    .map((slide) => `<p>${escapeHtml(slide.title ?? "")}</p>`)
    .join("");

  const projectImgs = Array.from(
    projectImagesContainer.querySelectorAll(".psa-project-img"),
  );
  const projectNames = Array.from(projectNamesContainer.querySelectorAll("p"));
  const totalProjectCount = projectNames.length;
  if (!totalProjectCount) return;

  let lenis = null;
  let gsapTickerHandler = null;
  let scrollTrigger = null;
  let metrics = null;

  function computeMetrics() {
    const sectionHeight = spotlight.offsetHeight;
    const sectionPadding = parseFloat(getComputedStyle(spotlight).paddingTop) || 0;
    const indexHeight = projectIndex.offsetHeight;
    const namesHeight = projectNamesContainer.offsetHeight;
    const imagesHeight = projectImagesContainer.offsetHeight;

    return {
      moveDistanceIndex: sectionHeight - sectionPadding * 2 - indexHeight,
      moveDistanceNames: sectionHeight - sectionPadding * 2 - namesHeight,
      moveDistanceImages: window.innerHeight - imagesHeight,
      imgActivationThreshold: window.innerHeight / 2,
    };
  }

  function buildScrollTrigger() {
    metrics = computeMetrics();
    scrollTrigger?.kill();
    scrollTrigger = ScrollTrigger.create({
      trigger: spotlight,
      start: "top top",
      end: `+=${window.innerHeight * pinMultiplier}px`,
      pin: true,
      pinSpacing: true,
      scrub,
      onUpdate: (self) => {
        const progress = self.progress;
        const currentIndex = Math.min(
          Math.floor(progress * totalProjectCount) + 1,
          totalProjectCount,
        );

        projectIndex.textContent = `${String(currentIndex).padStart(2, "0")}/${String(
          totalProjectCount,
        ).padStart(2, "0")}`;

        gsap.set(projectIndex, { y: progress * metrics.moveDistanceIndex });
        gsap.set(projectImagesContainer, { y: progress * metrics.moveDistanceImages });

        projectImgs.forEach((img) => {
          const rect = img.getBoundingClientRect();
          const active =
            rect.top <= metrics.imgActivationThreshold &&
            rect.bottom >= metrics.imgActivationThreshold;
          gsap.set(img, { opacity: active ? 1 : 0.5 });
        });

        projectNames.forEach((nameEl, index) => {
          const startProgress = index / totalProjectCount;
          const endProgress = (index + 1) / totalProjectCount;
          const projectProgress = Math.max(
            0,
            Math.min(1, (progress - startProgress) / (endProgress - startProgress)),
          );

          gsap.set(nameEl, { y: -projectProgress * metrics.moveDistanceNames });
          gsap.set(nameEl, { color: projectProgress > 0 && projectProgress < 1 ? "#fff" : "#4a4a4a" });
        });
      },
    });
  }

  const onResize = () => {
    buildScrollTrigger();
    ScrollTrigger.refresh();
  };

  buildScrollTrigger();
  window.addEventListener("resize", onResize);

  if (useLenis) {
    lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsapTickerHandler = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(gsapTickerHandler);
    gsap.ticker.lagSmoothing(0);
  }

  el._prototypestudioScrollAnimationCleanup = () => {
    scrollTrigger?.kill();
    window.removeEventListener("resize", onResize);
    if (gsapTickerHandler) gsap.ticker.remove(gsapTickerHandler);
    lenis?.destroy();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="prototypestudio-scroll-animation"]')
      .forEach((el) => initPrototypestudioScrollAnimation(el));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
