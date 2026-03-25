import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { escapeHtml } from "../../core/dom.js";

gsap.registerPlugin(ScrollTrigger);

function splitWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words
    .map(
      (w) =>
        `<span class="ova-word-mask"><span class="ova-word">${escapeHtml(w)}</span></span>`,
    )
    .join(" ");
  return el.querySelectorAll(".ova-word");
}

function parseSlides(el) {
  const json = el.getAttribute("data-ova-slides");
  if (json) {
    try {
      return JSON.parse(json);
    } catch {
      return [];
    }
  }
  const items = el.querySelectorAll("[data-ova-slide]");
  return Array.from(items).map((item) => ({
    image: item.getAttribute("data-image") ?? "",
    title: item.getAttribute("data-title") ?? item.textContent?.trim() ?? "",
  }));
}

export function initOvaScrollSlider(el) {
  if (el._ovaScrollSliderCleanup) {
    el._ovaScrollSliderCleanup();
  }

  const slider = el.querySelector("[data-ova-slider]");
  const imagesHost = el.querySelector("[data-ova-images]");
  const titleHost = el.querySelector("[data-ova-title]");
  const indicesHost = el.querySelector("[data-ova-indices]");
  const progressBar = el.querySelector("[data-ova-progress]");

  const slides = parseSlides(el);
  if (!slider || !imagesHost || !titleHost || !indicesHost || !progressBar || !slides.length) {
    return;
  }

  const useLenis = el.getAttribute("data-ova-lenis") === "true";
  const scrub = Number(el.getAttribute("data-ova-scrub")) || 1;

  let lenis = null;
  let gsapTickerHandler = null;
  let activeSlide = -1;
  let scrollTrigger = null;

  const pinDistance = window.innerHeight * slides.length;

  function createIndices() {
    indicesHost.innerHTML = "";
    slides.forEach((_, index) => {
      const indexNum = (index + 1).toString().padStart(2, "0");
      const indicatorElement = document.createElement("p");
      indicatorElement.dataset.index = String(index);
      indicatorElement.innerHTML = `<span class="ova-marker"></span><span class="ova-index">${escapeHtml(indexNum)}</span>`;
      indicesHost.appendChild(indicatorElement);

      if (index === 0) {
        gsap.set(indicatorElement.querySelector(".ova-index"), { opacity: 1 });
        gsap.set(indicatorElement.querySelector(".ova-marker"), { scaleX: 1 });
      } else {
        gsap.set(indicatorElement.querySelector(".ova-index"), { opacity: 0.35 });
        gsap.set(indicatorElement.querySelector(".ova-marker"), { scaleX: 0 });
      }
    });
  }

  function animateIndicators(index) {
    const indicators = indicesHost.querySelectorAll("p");
    indicators.forEach((indicator, i) => {
      const markerEl = indicator.querySelector(".ova-marker");
      const indexEl = indicator.querySelector(".ova-index");
      const isActive = i === index;
      gsap.to(indexEl, {
        opacity: isActive ? 1 : 0.35,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(markerEl, {
        scaleX: isActive ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }

  function animateNewTitle(index) {
    const title = slides[index]?.title ?? "";
    const h1 = titleHost.querySelector("h1") ?? document.createElement("h1");
    h1.textContent = title;
    if (!titleHost.contains(h1)) titleHost.appendChild(h1);

    const words = splitWords(h1);
    gsap.set(words, { yPercent: 100, opacity: 0 });
    gsap.to(words, {
      yPercent: 0,
      opacity: 1,
      duration: 0.75,
      stagger: 0.1,
      ease: "power3.out",
    });
  }

  function animateNewSlide(index) {
    const slide = slides[index];
    if (!slide?.image) return;

    const img = document.createElement("img");
    img.src = slide.image;
    img.alt = slide.title || `Slide ${index + 1}`;

    gsap.set(img, { opacity: 0, scale: 1.1 });
    imagesHost.appendChild(img);

    gsap.to(img, { opacity: 1, duration: 0.5, ease: "power2.out" });
    gsap.to(img, { scale: 1, duration: 1, ease: "power2.out" });

    const allImages = imagesHost.querySelectorAll("img");
    if (allImages.length > 3) {
      for (let i = 0; i < allImages.length - 3; i++) {
        allImages[i].remove();
      }
    }

    animateNewTitle(index);
    animateIndicators(index);
  }

  createIndices();

  scrollTrigger = ScrollTrigger.create({
    trigger: slider,
    start: "top top",
    end: `+=${pinDistance}px`,
    scrub,
    pin: true,
    pinSpacing: true,
    onUpdate: (self) => {
      gsap.set(progressBar, { scaleY: self.progress });

      const currentSlide = Math.floor(self.progress * slides.length);
      const clamped = Math.min(currentSlide, slides.length - 1);

      if (activeSlide !== clamped && clamped >= 0) {
        activeSlide = clamped;
        animateNewSlide(activeSlide);
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

  activeSlide = 0;
  animateNewSlide(0);

  el._ovaScrollSliderCleanup = () => {
    scrollTrigger?.kill();
    if (gsapTickerHandler) gsap.ticker.remove(gsapTickerHandler);
    lenis?.destroy();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="ova-scroll-slider"]')
      .forEach((el) => initOvaScrollSlider(el));
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
