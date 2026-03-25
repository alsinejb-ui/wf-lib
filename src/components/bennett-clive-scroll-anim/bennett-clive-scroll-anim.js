import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MOBILE_BP = 900;
const GAP_EXPAND = { startOffset: 550, endOffset: 450, from: [1, 0.5], to: [15, 10] };
const GAP_CONTRACT = { startOffset: 400, endOffset: 300, from: [15, 10], to: [1, 0.5] };
const STICKY_TOP_START = 50;
const STICKY_TOP_END = 92;
const FONT_SIZE_DESKTOP = 1.25;
const FONT_SIZE_MOBILE = 2.5;
const FONT_SIZE_END = 9;
const FOOTER_BOTTOM_INSET = 100;

export function initBennettCliveScrollAnim(el) {
  if (el._bcScrollAnimTriggers) {
    el._bcScrollAnimTriggers.forEach((st) => st.kill());
  }
  const triggers = [];

  const stickyBar = el.querySelector("[data-bc-sticky]");
  const footerTrigger = el.querySelector("[data-bc-trigger-footer]");
  const rows = el.querySelectorAll("[data-bc-row]");

  if (!stickyBar || !footerTrigger || !rows.length) {
    return;
  }

  const getStickyBarCenter = () => {
    const rect = stickyBar.getBoundingClientRect();
    return rect.top + window.scrollY + rect.height / 2;
  };

  const getFooterHeight = () => footerTrigger.offsetHeight;
  const isMobile = () => window.innerWidth < MOBILE_BP;

  function createGapTriggers(row, { startOffset, endOffset, from, to }) {
    return ScrollTrigger.create({
      trigger: row,
      start: () => `top+=${getStickyBarCenter() - startOffset} center`,
      end: () => `top+=${getStickyBarCenter() - endOffset} center`,
      scrub: true,
      onUpdate: (self) => {
        const gapFrom = isMobile() ? from[1] : from[0];
        const gapTo = isMobile() ? to[1] : to[0];
        row.style.gap = `${gapFrom + (gapTo - gapFrom) * self.progress}em`;
      },
    });
  }

  rows.forEach((row) => {
    triggers.push(createGapTriggers(row, GAP_EXPAND));
    triggers.push(createGapTriggers(row, GAP_CONTRACT));
  });

  triggers.push(
    ScrollTrigger.create({
      trigger: footerTrigger,
      start: "top bottom",
      end: () => `top+=${getFooterHeight() - window.innerHeight} center`,
      scrub: true,
      onUpdate: (self) => {
        const newTop = STICKY_TOP_START + (STICKY_TOP_END - STICKY_TOP_START) * self.progress;
        stickyBar.style.top = `${newTop}%`;
      },
    }),
  );

  triggers.push(
    ScrollTrigger.create({
      trigger: footerTrigger,
      start: () =>
        `top+=${getFooterHeight() - (window.innerHeight + FOOTER_BOTTOM_INSET)} bottom`,
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const fontSizeStart = isMobile() ? FONT_SIZE_MOBILE : FONT_SIZE_DESKTOP;
        const newFontSize =
          fontSizeStart + (FONT_SIZE_END - fontSizeStart) * self.progress;
        stickyBar.querySelectorAll("p").forEach((p) => {
          p.style.fontSize = `${newFontSize}vw`;
        });
      },
    }),
  );

  el._bcScrollAnimTriggers = triggers;
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="bennett-clive-scroll-anim"]')
      .forEach((el) => initBennettCliveScrollAnim(el));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}

// Backward compatibility
export const initBennettCliveScrollAnimation = initBennettCliveScrollAnim;
