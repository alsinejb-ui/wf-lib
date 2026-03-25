import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { escapeHtml } from "../../core/dom.js";

gsap.registerPlugin(ScrollTrigger);

const IMAGE_POOL = [
  "../elementis-scroll/public/img1.jpg",
  "../elementis-scroll/public/img2.jpg",
  "../elementis-scroll/public/img3.jpg",
  "../elementis-scroll/public/img4.jpg",
  "../elementis-scroll/public/img5.jpg",
  "../fractal-glass-effect/public/hero.jpg",
  "../fractal-glass-effect/public/hero2.jpg",
  "../fractal-glass-effect/public/hero3.jpg",
  "../fractal-glass-effect/public/hero4.jpg",
];

const DEFAULT_HEADINGS = [
  "Order is temporary while you're passing through",
  "Memories shuffle like cards in an endless deck",
  "Each moment scatters as another takes its place",
  "The fragments float before settling once more",
];

const DEFAULT_CONFIG = {
  cardCount: 15,
  cardWidth: 250,
  cardHeight: 300,
  animationDuration: 0.75,
  animationOverlap: 0.5,
  headingFadeDuration: 0.5,
  pinMultiplier: 6,
};

function parseHeadings(el) {
  const raw = el.getAttribute("data-poly-headings");
  if (!raw) return DEFAULT_HEADINGS;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length) return parsed;
  } catch (err) {
    console.warn("[poly-app-photo-dump] Invalid headings JSON:", err);
  }
  return DEFAULT_HEADINGS;
}

function parseImageSets(el, sectionCount, cardCount) {
  const raw = el.getAttribute("data-poly-image-sets");
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) {
        return parsed.map((set) => {
          if (!Array.isArray(set)) return [];
          return set.slice(0, cardCount);
        });
      }
    } catch (err) {
      console.warn("[poly-app-photo-dump] Invalid image sets JSON:", err);
    }
  }

  return Array.from({ length: sectionCount }, (_, sectionIndex) =>
    Array.from(
      { length: cardCount },
      (_, cardIndex) => IMAGE_POOL[(sectionIndex * cardCount + cardIndex) % IMAGE_POOL.length],
    ),
  );
}

export function initPolyAppPhotoDump(el) {
  if (el._polyAppPhotoDumpCleanup) {
    el._polyAppPhotoDumpCleanup();
  }

  const spotlight = el.querySelector("[data-poly-spotlight]");
  const galleryHeading = el.querySelector("[data-poly-gallery-heading]");
  if (!spotlight || !galleryHeading) return;

  const useLenis = el.getAttribute("data-poly-lenis") === "true";
  const scrub = Number(el.getAttribute("data-poly-scrub")) || 1;
  const pinMultiplier = Number(el.getAttribute("data-poly-pin-multiplier")) || DEFAULT_CONFIG.pinMultiplier;

  const config = { ...DEFAULT_CONFIG, pinMultiplier };
  const headings = parseHeadings(el);
  const imageSets = parseImageSets(el, headings.length, config.cardCount);

  let viewport = {
    centerX: window.innerWidth / 2,
    centerY: window.innerHeight / 2,
    rangeMin: Math.min(window.innerWidth, window.innerHeight) * 0.35,
    rangeMax: Math.min(window.innerWidth, window.innerHeight) * 0.7,
  };

  let state = {
    activeCards: [],
    currentSection: 0,
    isAnimating: false,
  };

  let scrollTrigger = null;
  let lenis = null;
  let gsapTickerHandler = null;

  function updateViewport() {
    viewport.centerX = window.innerWidth / 2;
    viewport.centerY = window.innerHeight / 2;
    viewport.rangeMin = Math.min(window.innerWidth, window.innerHeight) * 0.35;
    viewport.rangeMax = Math.min(window.innerWidth, window.innerHeight) * 0.7;
  }

  function getEdgePosition(centerX, centerY) {
    const distances = {
      left: centerX,
      right: window.innerWidth - centerX,
      top: centerY,
      bottom: window.innerHeight - centerY,
    };

    const minDistance = Math.min(...Object.values(distances));
    const cardCenterOffsetX = config.cardWidth / 2;
    const cardCenterOffsetY = config.cardHeight / 2;
    const offsetVariation = () => (Math.random() - 0.5) * 400;

    if (minDistance === distances.left) {
      return {
        x: -300 - Math.random() * 200,
        y: centerY - cardCenterOffsetY + offsetVariation(),
      };
    }
    if (minDistance === distances.right) {
      return {
        x: window.innerWidth + 50 + Math.random() * 200,
        y: centerY - cardCenterOffsetY + offsetVariation(),
      };
    }
    if (minDistance === distances.top) {
      return {
        x: centerX - cardCenterOffsetX + offsetVariation(),
        y: -400 - Math.random() * 200,
      };
    }
    return {
      x: centerX - cardCenterOffsetX + offsetVariation(),
      y: window.innerHeight + 50 + Math.random() * 200,
    };
  }

  function createCards(sectionIndex) {
    const cards = [];
    const set = imageSets[sectionIndex] ?? [];

    for (let i = 0; i < config.cardCount; i++) {
      const card = document.createElement("div");
      card.className = "poly-card";

      const img = document.createElement("img");
      const src = set[i % set.length] ?? IMAGE_POOL[i % IMAGE_POOL.length];
      img.src = src;
      img.alt = "";
      card.appendChild(img);

      const angle = Math.random() * Math.PI * 2;
      const radius =
        viewport.rangeMin + Math.random() * (viewport.rangeMax - viewport.rangeMin);
      const centerX = viewport.centerX + Math.cos(angle) * radius;
      const centerY = viewport.centerY + Math.sin(angle) * radius;

      gsap.set(card, {
        left: centerX - config.cardWidth / 2,
        top: centerY - config.cardHeight / 2,
        rotation: Math.random() * 50 - 25,
      });

      spotlight.appendChild(card);
      cards.push({ element: card, centerX, centerY });
    }

    return cards;
  }

  function animateHeading(newText, onComplete) {
    gsap.to(galleryHeading, {
      opacity: 0,
      duration: config.headingFadeDuration,
      ease: "power2.inOut",
      onComplete: () => {
        galleryHeading.textContent = newText;
        gsap.to(galleryHeading, {
          opacity: 1,
          duration: config.headingFadeDuration,
          ease: "power2.inOut",
          onComplete,
        });
      },
    });
  }

  function animateCards(exitingCards, enteringCards, onComplete) {
    const tl = gsap.timeline({ onComplete });

    exitingCards.forEach(({ element, centerX, centerY }) => {
      const targetEdge = getEdgePosition(centerX, centerY);
      tl.to(
        element,
        {
          left: targetEdge.x,
          top: targetEdge.y,
          rotation: Math.random() * 180 - 90,
          duration: config.animationDuration,
          ease: "power2.in",
          onComplete: () => element.remove(),
        },
        0,
      );
    });

    enteringCards.forEach(({ element, centerX, centerY }) => {
      const targetEdge = getEdgePosition(centerX, centerY);
      gsap.set(element, {
        left: targetEdge.x,
        top: targetEdge.y,
        rotation: Math.random() * 180 - 90,
      });
      tl.to(
        element,
        {
          left: centerX - config.cardWidth / 2,
          top: centerY - config.cardHeight / 2,
          rotation: Math.random() * 50 - 25,
          duration: config.animationDuration,
          ease: "power2.out",
        },
        config.animationOverlap,
      );
    });
  }

  function getSectionIndex(progress) {
    const size = 1 / headings.length;
    return Math.min(Math.floor(progress / size), headings.length - 1);
  }

  function runTransition(targetSection) {
    if (state.isAnimating || targetSection === state.currentSection) return;
    state.isAnimating = true;
    const newCards = createCards(targetSection);

    let cardsDone = false;
    let headingDone = false;
    const done = () => {
      if (!cardsDone || !headingDone) return;
      state.activeCards = newCards;
      state.currentSection = targetSection;
      state.isAnimating = false;
    };

    animateCards(state.activeCards, newCards, () => {
      cardsDone = true;
      done();
    });

    animateHeading(headings[targetSection], () => {
      headingDone = true;
      done();
    });
  }

  function reinitialize() {
    state.activeCards.forEach(({ element }) => element.remove());
    updateViewport();
    state.activeCards = createCards(state.currentSection);
  }

  state.activeCards = createCards(0);
  galleryHeading.textContent = headings[0];
  gsap.set(galleryHeading, { opacity: 1 });

  scrollTrigger = ScrollTrigger.create({
    trigger: spotlight,
    start: "top top",
    end: `+=${window.innerHeight * config.pinMultiplier}`,
    pin: true,
    pinSpacing: true,
    scrub,
    onUpdate: ({ progress }) => {
      const targetSection = getSectionIndex(progress);
      runTransition(targetSection);
    },
  });

  const onResize = () => {
    reinitialize();
    ScrollTrigger.refresh();
  };
  window.addEventListener("resize", onResize);

  if (useLenis) {
    lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsapTickerHandler = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(gsapTickerHandler);
    gsap.ticker.lagSmoothing(0);
  }

  el._polyAppPhotoDumpCleanup = () => {
    scrollTrigger?.kill();
    window.removeEventListener("resize", onResize);
    state.activeCards.forEach(({ element }) => element.remove());
    gsap.killTweensOf(galleryHeading);
    if (gsapTickerHandler) gsap.ticker.remove(gsapTickerHandler);
    lenis?.destroy();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="poly-app-photo-dump"]')
      .forEach((el) => initPolyAppPhotoDump(el));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
