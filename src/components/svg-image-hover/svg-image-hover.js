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

export function initSvgImageHover(el) {
  const cards = getSvgHoverCards(el);

  cards.forEach((card) => {
    const paths = card.querySelectorAll(".svg-stroke path");
    const titleEl = card.querySelector("[data-svg-hover-title]");

    if (!titleEl) return;

    const words = splitWords(titleEl);
    gsap.set(words, { yPercent: 100 });

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    let tl;

    const onEnter = () => {
      if (tl) tl.kill();
      tl = gsap.timeline();

      paths.forEach((path) => {
        tl.to(
          path,
          {
            strokeDashoffset: 0,
            attr: { "stroke-width": 700 },
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

      paths.forEach((path) => {
        const length = path.getTotalLength();
        tl.to(
          path,
          {
            strokeDashoffset: length,
            attr: { "stroke-width": 200 },
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
