import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { escapeHtml } from "../../core/dom.js";

gsap.registerPlugin(ScrollTrigger);

function splitWords(el, wordClass = "telescope-word") {
  const text = el.textContent?.trim() ?? "";
  const words = text.split(/\s+/).filter(Boolean);
  if (!words.length) return [];

  el.innerHTML = words
    .map((w) => `<span class="telescope-word-mask"><span class="${wordClass}">${escapeHtml(w)}</span></span>`)
    .join(" ");
  return el.querySelectorAll(`.${wordClass}`);
}

export function initTelescopeImgScroll(el) {
  if (el._telescopeCleanup) {
    el._telescopeCleanup();
  }

  const container = el.querySelector("[data-telescope-container]");
  const header = el.querySelector("[data-telescope-header]");
  const introItems = el.querySelectorAll("[data-telescope-intro-item]");
  const layers = el.querySelectorAll("[data-telescope-layer]");

  if (!container || !header) {
    return;
  }

  const useLenis = el.getAttribute("data-telescope-lenis") === "true";
  const scrollHeight = Number(el.getAttribute("data-telescope-scroll-height")) || 4;
  const scrub = Number(el.getAttribute("data-telescope-scrub")) || 1;

  let lenis = null;
  let gsapTickerHandler = null;

  const words = splitWords(header, "telescope-word");
  gsap.set(words, { opacity: 0 });

  layers.forEach((layer, i) => {
    gsap.set(layer, { scale: 0.9 - i * 0.2 });
  });
  gsap.set(container, { scale: 0 });

  const trigger = el.querySelector("[data-telescope-trigger]") ?? el;
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

      gsap.set(container, { scale: progress });

      layers.forEach((layer, i) => {
        const initialScale = 0.9 - i * 0.2;
        const layerProgress = Math.min(progress / 0.9, 1);
        const currentScale = initialScale + layerProgress * (1 - initialScale);
        gsap.set(layer, { scale: currentScale });
      });

      if (progress <= 0.9 && introItems.length >= 2) {
        const textProgress = progress / 0.9;
        const moveDistance = window.innerWidth * 0.5;
        gsap.set(introItems[0], { x: -textProgress * moveDistance });
        gsap.set(introItems[1], { x: textProgress * moveDistance });
      }

      if (progress >= 0.7 && progress <= 0.9 && words.length) {
        const headerProgress = (progress - 0.7) / 0.2;
        const totalWords = words.length;

        words.forEach((word, i) => {
          const wordStartDelay = i / totalWords;
          const wordEndDelay = (i + 1) / totalWords;

          let wordOpacity = 0;
          if (headerProgress >= wordEndDelay) {
            wordOpacity = 1;
          } else if (headerProgress >= wordStartDelay) {
            const wordProgress =
              (headerProgress - wordStartDelay) / (wordEndDelay - wordStartDelay);
            wordOpacity = wordProgress;
          }
          gsap.set(word, { opacity: wordOpacity });
        });
      } else if (progress < 0.7) {
        gsap.set(words, { opacity: 0 });
      } else if (progress > 0.9) {
        gsap.set(words, { opacity: 1 });
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

  el._telescopeCleanup = () => {
    st.kill();
    if (gsapTickerHandler) gsap.ticker.remove(gsapTickerHandler);
    lenis?.destroy();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="telescope-img-scroll"]')
      .forEach((el) => initTelescopeImgScroll(el));
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
