import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import imagesLoaded from "imagesloaded";

gsap.registerPlugin(Flip, ScrollTrigger);

/** Preset 2 : garde les gaps jusqu’à cette part de timeline, puis ferme vers 0 (plein écran). */
const PRESET2_GAP_TWEEN_START = 0.78;
const PRESET2_GAP_TWEEN_DURATION = 0.22;
/** Si row/column gap à 0 au mesurage, ne pas figer 0 en inline. */
const PRESET2_GAP_FALLBACK_PX = 16;

function measurePreset2InitialGapsPx(galleryEl) {
  const read = () => {
    const cs = getComputedStyle(galleryEl);
    return {
      row: parseFloat(cs.rowGap),
      col: parseFloat(cs.columnGap),
    };
  };
  let { row, col } = read();
  if (
    !Number.isFinite(row) ||
    row <= 0 ||
    !Number.isFinite(col) ||
    col <= 0
  ) {
    void galleryEl.offsetHeight;
    ({ row, col } = read());
  }
  row = Number.isFinite(row) && row > 0 ? row : PRESET2_GAP_FALLBACK_PX;
  col = Number.isFinite(col) && col > 0 ? col : PRESET2_GAP_FALLBACK_PX;
  return { row, col };
}

/** Presets alignés sur la démo Codrops « On-Scroll Image Layout Animations » */
const GALLERY_PRESETS = {
  "1": { flip: { absoluteOnLeave: true, scale: false } },
  "2": {},
  "3": {
    flip: { absolute: true, scale: false },
    scrollTrigger: { start: "center center", end: "+=900%" },
    stagger: 0.05,
  },
  "4": {},
  "5": {},
  "6": {},
  "7": {},
  "8": { flip: { scale: false } },
  "9": {},
};

function preloadGalleryImages(root) {
  const els = root.querySelectorAll(".gallery__item, .gallery__item-inner");
  return new Promise((resolve) => {
    if (!els.length) {
      resolve();
      return;
    }
    imagesLoaded(els, { background: true }, () => resolve());
  });
}

function parseGalleryOptions(galleryEl) {
  const rawJson = galleryEl.getAttribute("data-csla-options");
  if (rawJson) {
    try {
      return JSON.parse(rawJson);
    } catch (err) {
      console.warn("[scroll-based-layout-animations] data-csla-options JSON invalide", err);
    }
  }
  const preset = galleryEl.getAttribute("data-csla-preset");
  if (preset && Object.prototype.hasOwnProperty.call(GALLERY_PRESETS, preset)) {
    return JSON.parse(JSON.stringify(GALLERY_PRESETS[preset]));
  }
  return {};
}

function triggerFlipOnScroll(galleryEl, options) {
  let settings = {
    flip: {
      absoluteOnLeave: false,
      absolute: false,
      scale: true,
      simple: true,
    },
    scrollTrigger: {
      start: "center center",
      end: "+=300%",
    },
    stagger: 0,
  };

  settings = Object.assign({}, settings, options);

  const galleryCaption = galleryEl.querySelector(".caption");
  const galleryItems = galleryEl.querySelectorAll(".gallery__item");
  const galleryItemsInner = [...galleryItems]
    .map((item) => (item.children.length > 0 ? [...item.children] : []))
    .flat();

  const isPreset2 = galleryEl.getAttribute("data-csla-preset") === "2";
  let preset2GapsPx = null;
  if (isPreset2) {
    if (options.preset2RowGap != null) {
      galleryEl.style.setProperty(
        "--csla-p2-row-gap",
        String(options.preset2RowGap),
      );
    }
    if (options.preset2ColumnGap != null) {
      galleryEl.style.setProperty(
        "--csla-p2-column-gap",
        String(options.preset2ColumnGap),
      );
    }
    void galleryEl.offsetHeight;
    preset2GapsPx = measurePreset2InitialGapsPx(galleryEl);
    galleryEl.style.setProperty("--csla-p2-row-gap", `${preset2GapsPx.row}px`);
    galleryEl.style.setProperty(
      "--csla-p2-column-gap",
      `${preset2GapsPx.col}px`,
    );
  }

  galleryEl.classList.add("gallery--switch");
  const flipstate = Flip.getState([galleryItems, galleryCaption], {
    props: "filter, opacity",
  });

  galleryEl.classList.remove("gallery--switch");

  const tl = Flip.to(flipstate, {
    ease: "none",
    absoluteOnLeave: settings.flip.absoluteOnLeave,
    absolute: settings.flip.absolute,
    scale: settings.flip.scale,
    simple: settings.flip.simple,
    scrollTrigger: {
      trigger: galleryEl,
      start: settings.scrollTrigger.start,
      end: settings.scrollTrigger.end,
      pin: galleryEl.parentNode,
      scrub: true,
    },
    stagger: settings.stagger,
  });

  if (preset2GapsPx !== null) {
    tl.to(
      galleryEl,
      {
        "--csla-p2-row-gap": 0,
        "--csla-p2-column-gap": 0,
        duration: PRESET2_GAP_TWEEN_DURATION,
        ease: "power2.in",
      },
      PRESET2_GAP_TWEEN_START,
    );
  }

  if (galleryItemsInner.length) {
    tl.fromTo(
      galleryItemsInner,
      { scale: 2 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: galleryEl,
          start: settings.scrollTrigger.start,
          end: settings.scrollTrigger.end,
          scrub: true,
        },
      },
      0,
    );
  }
}

export function initScrollBasedLayoutAnimations(el) {
  if (el._scrollBasedLayoutAnimationsCleanup) {
    el._scrollBasedLayoutAnimationsCleanup();
  }

  let aborted = false;
  let ctx = null;
  let lenis = null;
  let gsapTickerHandler = null;

  const cleanup = () => {
    aborted = true;
    ctx?.revert();
    ctx = null;
    if (gsapTickerHandler) {
      gsap.ticker.remove(gsapTickerHandler);
      gsapTickerHandler = null;
    }
    lenis?.destroy();
    lenis = null;
    el.classList.remove("csla-js", "csla-loading");
    ScrollTrigger.refresh();
  };

  el._scrollBasedLayoutAnimationsCleanup = cleanup;

  el.classList.add("csla-js", "csla-loading");

  preloadGalleryImages(el).then(() => {
    if (aborted) return;
    el.classList.remove("csla-loading");

    ctx = gsap.context(() => {
      const useLenis = el.getAttribute("data-csla-lenis") === "true";
      if (useLenis) {
        lenis = new Lenis({
          lerp: 0.1,
          smoothWheel: true,
        });
        lenis.on("scroll", () => ScrollTrigger.update());
        gsapTickerHandler = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(gsapTickerHandler);
        gsap.ticker.lagSmoothing(0);
      }

      el.querySelectorAll(".gallery").forEach((galleryEl) => {
        if (!galleryEl.querySelector(".gallery__item")) return;
        try {
          triggerFlipOnScroll(galleryEl, parseGalleryOptions(galleryEl));
        } catch (err) {
          console.error("[scroll-based-layout-animations] Flip / ScrollTrigger", err);
        }
      });
    }, el);

    ScrollTrigger.refresh();
  });

  return cleanup;
}

if (typeof window !== "undefined") {
  const boot = () => {
    document
      .querySelectorAll('[data-component="scroll-based-layout-animations"]')
      .forEach((node) => initScrollBasedLayoutAnimations(node));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
}
