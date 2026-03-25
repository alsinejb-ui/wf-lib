import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const smoothStep = (p) => p * p * (3 - 2 * p);

export function initEduardbodakScrollAnimation(el) {
  if (el._eduardbodakScrollAnimationCleanup) {
    el._eduardbodakScrollAnimationCleanup();
  }

  const hero = el.querySelector("[data-ebsa-hero]");
  const services = el.querySelector("[data-ebsa-services]");
  const heroCards = el.querySelector("[data-ebsa-hero-cards]");
  const servicesHeader = el.querySelector("[data-ebsa-services-header]");
  const cardsLayer = el.querySelector("[data-ebsa-cards-layer]");
  if (!hero || !services || !heroCards || !servicesHeader || !cardsLayer) return;

  const useLenis = el.getAttribute("data-ebsa-lenis") === "true";
  const triggers = [];
  let lenis = null;
  let gsapTickerHandler = null;

  if (useLenis) {
    lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsapTickerHandler = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(gsapTickerHandler);
    gsap.ticker.lagSmoothing(0);
  }

  if (window.innerWidth > 1000) {
    const heroCardIds = ["#hero-card-1", "#hero-card-2", "#hero-card-3"];
    const desktopCardIds = ["#card-1", "#card-2", "#card-3"];

    triggers.push(
      ScrollTrigger.create({
        trigger: hero,
        start: "top top",
        end: "75% top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const heroCardsOpacity = gsap.utils.interpolate(1, 0.5, smoothStep(progress));
          gsap.set(heroCards, { opacity: heroCardsOpacity });

          heroCardIds.forEach((cardId, index) => {
            const card = el.querySelector(cardId);
            if (!card) return;
            const delay = index * 0.9;
            const cardProgress = gsap.utils.clamp(
              0,
              1,
              (progress - delay * 0.1) / (1 - delay * 0.1),
            );

            const y = gsap.utils.interpolate("0%", "350%", smoothStep(cardProgress));
            const scale = gsap.utils.interpolate(1, 0.75, smoothStep(cardProgress));

            let x = "0%";
            let rotation = 0;
            if (index === 0) {
              x = gsap.utils.interpolate("0%", "90%", smoothStep(cardProgress));
              rotation = gsap.utils.interpolate(0, -15, smoothStep(cardProgress));
            } else if (index === 2) {
              x = gsap.utils.interpolate("0%", "-90%", smoothStep(cardProgress));
              rotation = gsap.utils.interpolate(0, 15, smoothStep(cardProgress));
            }

            gsap.set(card, { y, x, rotation, scale });
          });
        },
      }),
    );

    triggers.push(
      ScrollTrigger.create({
        trigger: services,
        start: "top top",
        end: `+=${window.innerHeight * 4}px`,
        pin: services,
        pinSpacing: true,
      }),
    );

    triggers.push(
      ScrollTrigger.create({
        trigger: services,
        start: "top top",
        end: `+=${window.innerHeight * 4}px`,
        onLeave: () => {
          const rect = services.getBoundingClientRect();
          const top = window.pageYOffset + rect.top;
          gsap.set(cardsLayer, {
            position: "absolute",
            top,
            left: 0,
            width: "100vw",
            height: "100vh",
          });
        },
        onEnterBack: () => {
          gsap.set(cardsLayer, {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          });
        },
      }),
    );

    triggers.push(
      ScrollTrigger.create({
        trigger: services,
        start: "top bottom",
        end: `+=${window.innerHeight * 4}`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9);
          const headerY = gsap.utils.interpolate("400%", "0%", smoothStep(headerProgress));
          gsap.set(servicesHeader, { y: headerY });

          desktopCardIds.forEach((cardId, index) => {
            const card = el.querySelector(cardId);
            if (!card) return;
            const innerCard = card.querySelector(".flip-card-inner");
            const delay = index * 0.5;
            const cardProgress = gsap.utils.clamp(
              0,
              1,
              (progress - delay * 0.1) / (0.9 - delay * 0.1),
            );

            let y;
            if (cardProgress < 0.4) {
              y = gsap.utils.interpolate("-100%", "50%", smoothStep(cardProgress / 0.4));
            } else if (cardProgress < 0.6) {
              y = gsap.utils.interpolate(
                "50%",
                "0%",
                smoothStep((cardProgress - 0.4) / 0.2),
              );
            } else {
              y = "0%";
            }

            let scale;
            if (cardProgress < 0.4) {
              scale = gsap.utils.interpolate(0.25, 0.75, smoothStep(cardProgress / 0.4));
            } else if (cardProgress < 0.6) {
              scale = gsap.utils.interpolate(
                0.75,
                1,
                smoothStep((cardProgress - 0.4) / 0.2),
              );
            } else {
              scale = 1;
            }

            const opacity =
              cardProgress < 0.2 ? smoothStep(cardProgress / 0.2) : 1;

            let x;
            let rotate;
            let rotationY;
            if (cardProgress < 0.6) {
              x = index === 0 ? "100%" : index === 1 ? "0%" : "-100%";
              rotate = index === 0 ? -5 : index === 1 ? 0 : 5;
              rotationY = 0;
            } else if (cardProgress < 1) {
              const normalized = smoothStep((cardProgress - 0.6) / 0.4);
              x = gsap.utils.interpolate(
                index === 0 ? "100%" : index === 1 ? "0%" : "-100%",
                "0%",
                normalized,
              );
              rotate = gsap.utils.interpolate(
                index === 0 ? -5 : index === 1 ? 0 : 5,
                0,
                normalized,
              );
              rotationY = normalized * 180;
            } else {
              x = "0%";
              rotate = 0;
              rotationY = 180;
            }

            gsap.set(card, { opacity, y, x, rotate, scale });
            if (innerCard) gsap.set(innerCard, { rotationY });
          });
        },
      }),
    );
  }

  el._eduardbodakScrollAnimationCleanup = () => {
    triggers.forEach((trigger) => trigger.kill());
    if (gsapTickerHandler) gsap.ticker.remove(gsapTickerHandler);
    lenis?.destroy();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="eduardbodak-scroll-animation"]')
      .forEach((el) => initEduardbodakScrollAnimation(el));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
