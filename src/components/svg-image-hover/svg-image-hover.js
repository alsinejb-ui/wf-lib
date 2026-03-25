import gsap from "gsap";

// Vanilla word splitter — no GSAP SplitText Club dependency needed
function splitWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words
    .map(
      (w) =>
        `<span class="wf-lib-word-mask"><span class="wf-lib-svg-hover-word">${w}</span></span>`,
    )
    .join(" ");
  return el.querySelectorAll(".wf-lib-svg-hover-word");
}

/** Cartes : descendants, ou la racine si elle porte déjà data-svg-hover-card (cas Webflow courant). */
function getSvgHoverCards(root) {
  if (!root || root.nodeType !== 1) return [];
  if (root.matches?.("[data-svg-hover-card]")) return [root];
  return [...root.querySelectorAll("[data-svg-hover-card]")];
}

/** Traits animés : .svg-stroke path (démo) ou tout path dans un svg de la carte (Webflow). */
function getStrokePaths(card) {
  const scoped = card.querySelectorAll(".svg-stroke path");
  if (scoped.length > 0) return [...scoped];
  return [...card.querySelectorAll("svg path")];
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
    "200";
  const n = parseFloat(String(raw), 10);
  return Number.isFinite(n) && n > 0 ? n : 200;
}

export function initSvgImageHover(el) {
  const cards = getSvgHoverCards(el);

  cards.forEach((card) => {
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
            attr: { "stroke-dashoffset": 0, "stroke-width": 700 },
            duration: 1.5,
            ease: "power2.out",
          },
          0,
        );
      });

      tl.to(
        words,
        {
          yPercent: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.075,
        },
        0.35,
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
            duration: 1,
            ease: "power2.out",
          },
          0,
        );
      });

      tl.to(
        words,
        {
          yPercent: 100,
          duration: 0.5,
          ease: "power3.out",
          stagger: { each: 0.05, from: "end" },
        },
        0,
      );
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    // Keyboard accessibility
    card.addEventListener("focus", onEnter);
    card.addEventListener("blur", onLeave);
  });
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
