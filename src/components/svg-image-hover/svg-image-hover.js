import gsap from "gsap";

const STROKE_WIDTH_HOVER = 700;
const DEFAULT_STROKE_WIDTH_FALLBACK = 200;
const DURATION_STROKE_IN = 1.5;
const DURATION_STROKE_OUT = 1;
const DURATION_WORDS_IN = 0.75;
const DURATION_WORDS_OUT = 0.5;
const STAGGER_WORDS_IN = 0.075;
const STAGGER_WORDS_OUT_EACH = 0.05;
const WORDS_IN_POSITION = 0.35;

const INIT_FLAG = "data-wf-lib-svg-hover";

/** Ré-init sur le même `el` : teardown de l’instance précédente (SPA / hot reload). */
const destroyByRoot = new WeakMap();

/**
 * @typedef {Object} SvgImageHoverOptions
 * @property {number} [strokeWidthHover]
 * @property {number} [durationStrokeIn]
 * @property {number} [durationStrokeOut]
 * @property {number} [durationWordsIn]
 * @property {number} [durationWordsOut]
 */

// Vanilla word splitter — DOM pur (pas d’innerHTML) pour éviter XSS sur titres CMS
function splitWords(el) {
  const words = el.textContent.trim().split(/\s+/).filter(Boolean);
  el.replaceChildren();
  const wordElements = [];
  words.forEach((w, i) => {
    if (i > 0) el.appendChild(document.createTextNode(" "));
    const mask = document.createElement("span");
    mask.className = "wf-lib-word-mask";
    const inner = document.createElement("span");
    inner.className = "wf-lib-svg-hover-word";
    inner.textContent = w;
    mask.appendChild(inner);
    el.appendChild(mask);
    wordElements.push(inner);
  });
  return wordElements;
}

/** Cartes : descendants, ou la racine si elle porte déjà data-svg-hover-card (cas Webflow courant). */
function getSvgHoverCards(root) {
  if (!root || root.nodeType !== 1) return [];
  if (root.matches?.("[data-svg-hover-card]")) return [root];
  return [...root.querySelectorAll("[data-svg-hover-card]")];
}

/**
 * Traits animés : si présent, `[data-svg-hover-paths]` limite la recherche aux paths décoratifs
 * (évite d’attraper d’autres svg dans la card). Sinon `.svg-stroke path`, puis repli `svg path`.
 */
function getStrokePaths(card) {
  const scope = card.querySelector("[data-svg-hover-paths]");
  const root = scope ?? card;

  const scoped = root.querySelectorAll(".svg-stroke path");
  if (scoped.length > 0) return [...scoped];
  return [...root.querySelectorAll("svg path")];
}

/** Longueur de tracé fiable (Webflow / SVG souvent besoin d’un layout avant getTotalLength). */
function getPathDashLength(path) {
  if (typeof path.getBoundingClientRect === "function") {
    path.getBoundingClientRect();
  }
  const len = path.getTotalLength?.() ?? 0;
  return Number.isFinite(len) && len > 0 ? len : 0;
}

function readBaseStrokeWidth(path) {
  const raw =
    path.getAttribute("stroke-width") ??
    path.getAttribute("strokeWidth") ??
    String(DEFAULT_STROKE_WIDTH_FALLBACK);
  const n = parseFloat(String(raw), 10);
  return Number.isFinite(n) && n > 0 ? n : DEFAULT_STROKE_WIDTH_FALLBACK;
}

/**
 * @param {Element} el
 * @param {SvgImageHoverOptions} [options]
 * @returns {{ destroy: () => void }}
 */
export function initSvgImageHover(el, options = {}) {
  const strokeWidthHover = options.strokeWidthHover ?? STROKE_WIDTH_HOVER;
  const durationStrokeIn = options.durationStrokeIn ?? DURATION_STROKE_IN;
  const durationStrokeOut = options.durationStrokeOut ?? DURATION_STROKE_OUT;
  const durationWordsIn = options.durationWordsIn ?? DURATION_WORDS_IN;
  const durationWordsOut = options.durationWordsOut ?? DURATION_WORDS_OUT;

  const prevDestroy = destroyByRoot.get(el);
  if (prevDestroy) prevDestroy();

  const cards = getSvgHoverCards(el);
  const destroyFns = [];

  if (cards.length === 0) {
    return { destroy() {} };
  }

  cards.forEach((card) => {
    if (card.getAttribute(INIT_FLAG) === "1") return;

    const pathEls = getStrokePaths(card);
    const titleEl = card.querySelector("[data-svg-hover-title]");

    if (!titleEl) return;

    const words = splitWords(titleEl);
    gsap.set(words, { yPercent: 100 });

    /* Attributs SVG (stroke-dash*) : bien plus fiable que le CSS sur path dans Webflow */
    const strokeTargets = pathEls
      .map((path) => {
        path.style.strokeDasharray = "";
        path.style.strokeDashoffset = "";
        const length = getPathDashLength(path);
        if (length <= 0) return null;
        const baseStrokeWidth = readBaseStrokeWidth(path);
        gsap.set(path, {
          attr: {
            "stroke-dasharray": length,
            "stroke-dashoffset": length,
            "stroke-width": baseStrokeWidth,
          },
        });
        return { path, length, baseStrokeWidth };
      })
      .filter(Boolean);

    let tl;

    const onEnter = () => {
      if (tl) tl.kill();
      tl = gsap.timeline();

      strokeTargets.forEach(({ path, length }) => {
        gsap.set(path, {
          attr: {
            "stroke-dasharray": length,
            "stroke-dashoffset": length,
          },
        });
        tl.to(
          path,
          {
            attr: {
              "stroke-dashoffset": 0,
              "stroke-width": strokeWidthHover,
            },
            duration: durationStrokeIn,
            ease: "power2.out",
          },
          0,
        );
      });

      tl.to(
        words,
        {
          yPercent: 0,
          duration: durationWordsIn,
          ease: "power3.out",
          stagger: STAGGER_WORDS_IN,
        },
        WORDS_IN_POSITION,
      );
    };

    const onLeave = () => {
      if (tl) tl.kill();
      tl = gsap.timeline();

      strokeTargets.forEach(({ path, length, baseStrokeWidth }) => {
        tl.to(
          path,
          {
            attr: {
              "stroke-dashoffset": length,
              "stroke-width": baseStrokeWidth,
            },
            duration: durationStrokeOut,
            ease: "power2.out",
          },
          0,
        );
      });

      tl.to(
        words,
        {
          yPercent: 100,
          duration: durationWordsOut,
          ease: "power3.out",
          stagger: { each: STAGGER_WORDS_OUT_EACH, from: "end" },
        },
        0,
      );
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    card.addEventListener("focus", onEnter);
    card.addEventListener("blur", onLeave);
    card.setAttribute(INIT_FLAG, "1");

    const pathsOnly = strokeTargets.map((t) => t.path);
    destroyFns.push(() => {
      if (tl) tl.kill();
      gsap.killTweensOf([...words, ...pathsOnly]);
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
      card.removeEventListener("focus", onEnter);
      card.removeEventListener("blur", onLeave);
      card.removeAttribute(INIT_FLAG);
    });
  });

  const destroy = () => {
    for (let i = destroyFns.length - 1; i >= 0; i--) destroyFns[i]();
    destroyFns.length = 0;
    destroyByRoot.delete(el);
  };

  destroyByRoot.set(el, destroy);

  return { destroy };
}

// Auto-init when used standalone (demo.html)
if (typeof window !== "undefined") {
  const init = () =>
    document
      .querySelectorAll('[data-component="svg-image-hover"]')
      .forEach((el) => initSvgImageHover(el));

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
