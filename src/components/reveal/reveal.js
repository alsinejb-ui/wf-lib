import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { readNumberDataset, readStringDataset } from "../../core/dom.js";

gsap.registerPlugin(ScrollTrigger);

export function initReveal(el) {
  const items = el.querySelectorAll("[data-reveal-item]");
  if (!items.length) return;

  const duration = readNumberDataset(el, "duration", 0.6);
  const stagger = readNumberDataset(el, "stagger", 0.08);
  const delay = readNumberDataset(el, "delay", 0);
  const y = readNumberDataset(el, "y", 18);
  const ease = readStringDataset(el, "ease", "power2.out");

  gsap.from(items, {
    opacity: 0,
    y,
    duration,
    stagger,
    delay,
    ease,
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
  });
}

// Auto-init pour usage standalone (demo.html)
if (typeof window !== "undefined") {
  const init = () =>
    document
      .querySelectorAll('[data-component="reveal"]')
      .forEach((el) => initReveal(el));

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
