import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const smoothEase = (x) => x * x * (3 - 2 * x);

export function initInversaScrollAnimation(el) {
  if (el._inversaScrollAnimationCleanup) {
    el._inversaScrollAnimationCleanup();
  }

  const hero = el.querySelector("[data-inversa-hero]");
  const heroContent = el.querySelector("[data-inversa-content]");
  const heroImg = el.querySelector("[data-inversa-img]");
  const heroImgElement = el.querySelector("[data-inversa-img] img");
  const heroMask = el.querySelector("[data-inversa-mask]");
  const heroGridOverlay = el.querySelector("[data-inversa-grid]");
  const marker1 = el.querySelector("[data-inversa-marker='1']");
  const marker2 = el.querySelector("[data-inversa-marker='2']");
  const progressBar = el.querySelector("[data-inversa-progress]");
  if (
    !hero ||
    !heroContent ||
    !heroImg ||
    !heroImgElement ||
    !heroMask ||
    !heroGridOverlay ||
    !marker1 ||
    !marker2 ||
    !progressBar
  ) {
    return;
  }

  const useLenis = el.getAttribute("data-inversa-lenis") === "true";
  const scrub = Number(el.getAttribute("data-inversa-scrub")) || 1;
  const pinMultiplier = Number(el.getAttribute("data-inversa-pin-multiplier")) || 4;

  let scrollTrigger = null;
  let lenis = null;
  let gsapTickerHandler = null;

  const getMoveDistances = () => {
    const viewportHeight = window.innerHeight;
    const heroContentMoveDistance = Math.max(0, heroContent.offsetHeight - viewportHeight);
    const heroImgMoveDistance = Math.max(0, heroImg.offsetHeight - viewportHeight);
    return { heroContentMoveDistance, heroImgMoveDistance };
  };

  let distances = getMoveDistances();

  const createScrollAnimation = () => {
    scrollTrigger?.kill();
    distances = getMoveDistances();

    scrollTrigger = ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: `+=${window.innerHeight * pinMultiplier}px`,
      pin: true,
      pinSpacing: true,
      scrub,
      onUpdate: (self) => {
        progressBar.style.setProperty("--inversa-progress", String(self.progress));

        gsap.set(heroContent, {
          y: -self.progress * distances.heroContentMoveDistance,
          force3D: true,
        });

        let heroImgProgress;
        if (self.progress <= 0.45) {
          heroImgProgress = smoothEase(self.progress / 0.45) * 0.65;
        } else if (self.progress <= 0.75) {
          heroImgProgress = 0.65;
        } else {
          heroImgProgress = 0.65 + smoothEase((self.progress - 0.75) / 0.25) * 0.35;
        }

        gsap.set(heroImg, {
          y: heroImgProgress * distances.heroImgMoveDistance,
          force3D: true,
        });

        let heroMaskScale;
        let heroImgSaturation;
        let heroImgOverlayOpacity;

        if (self.progress <= 0.4) {
          heroMaskScale = 2.5;
          heroImgSaturation = 1;
          heroImgOverlayOpacity = 0.35;
        } else if (self.progress <= 0.5) {
          const phaseProgress = smoothEase((self.progress - 0.4) / 0.1);
          heroMaskScale = 2.5 - phaseProgress * 1.5;
          heroImgSaturation = 1 - phaseProgress;
          heroImgOverlayOpacity = 0.35 + phaseProgress * 0.35;
        } else if (self.progress <= 0.75) {
          heroMaskScale = 1;
          heroImgSaturation = 0;
          heroImgOverlayOpacity = 0.7;
        } else if (self.progress <= 0.85) {
          const phaseProgress = smoothEase((self.progress - 0.75) / 0.1);
          heroMaskScale = 1 + phaseProgress * 1.5;
          heroImgSaturation = phaseProgress;
          heroImgOverlayOpacity = 0.7 - phaseProgress * 0.35;
        } else {
          heroMaskScale = 2.5;
          heroImgSaturation = 1;
          heroImgOverlayOpacity = 0.35;
        }

        gsap.set(heroMask, { scale: heroMaskScale, force3D: true });
        gsap.set(heroImgElement, { filter: `saturate(${heroImgSaturation})` });
        heroImg.style.setProperty("--inversa-overlay-opacity", String(heroImgOverlayOpacity));

        let heroGridOpacity;
        if (self.progress <= 0.475) {
          heroGridOpacity = 0;
        } else if (self.progress <= 0.5) {
          heroGridOpacity = smoothEase((self.progress - 0.475) / 0.025);
        } else if (self.progress <= 0.75) {
          heroGridOpacity = 1;
        } else if (self.progress <= 0.775) {
          heroGridOpacity = 1 - smoothEase((self.progress - 0.75) / 0.025);
        } else {
          heroGridOpacity = 0;
        }
        gsap.set(heroGridOverlay, { opacity: heroGridOpacity });

        let marker1Opacity;
        if (self.progress <= 0.5) {
          marker1Opacity = 0;
        } else if (self.progress <= 0.525) {
          marker1Opacity = smoothEase((self.progress - 0.5) / 0.025);
        } else if (self.progress <= 0.7) {
          marker1Opacity = 1;
        } else if (self.progress <= 0.75) {
          marker1Opacity = 1 - smoothEase((self.progress - 0.7) / 0.05);
        } else {
          marker1Opacity = 0;
        }
        gsap.set(marker1, { opacity: marker1Opacity });

        let marker2Opacity;
        if (self.progress <= 0.55) {
          marker2Opacity = 0;
        } else if (self.progress <= 0.575) {
          marker2Opacity = smoothEase((self.progress - 0.55) / 0.025);
        } else if (self.progress <= 0.7) {
          marker2Opacity = 1;
        } else if (self.progress <= 0.75) {
          marker2Opacity = 1 - smoothEase((self.progress - 0.7) / 0.05);
        } else {
          marker2Opacity = 0;
        }
        gsap.set(marker2, { opacity: marker2Opacity });
      },
    });
  };

  const onResize = () => {
    createScrollAnimation();
    ScrollTrigger.refresh();
  };
  window.addEventListener("resize", onResize);

  createScrollAnimation();

  if (useLenis) {
    lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsapTickerHandler = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(gsapTickerHandler);
    gsap.ticker.lagSmoothing(0);
  }

  el._inversaScrollAnimationCleanup = () => {
    scrollTrigger?.kill();
    window.removeEventListener("resize", onResize);
    if (gsapTickerHandler) gsap.ticker.remove(gsapTickerHandler);
    lenis?.destroy();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="inversa-scroll-animation"]')
      .forEach((el) => initInversaScrollAnimation(el));
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
