/**
 * Text Loop — Texte qui défile en boucle (carousel de mots).
 * Inspiré de Motion Core, adapté pour wf-lib (vanilla JS).
 */

export function initTextLoop(el) {
  if (el._textLoopCleanup) el._textLoopCleanup();

  const container = el.querySelector("[data-tl-container]");
  const items = el.querySelectorAll("[data-tl-item]");
  if (!container || !items.length) return;

  const duration = Number(el.getAttribute("data-tl-duration")) || 3000;
  const gap = Number(el.getAttribute("data-tl-gap")) || 1000;
  let index = 0;

  const show = (i) => {
    items.forEach((item, j) => {
      item.style.opacity = j === i ? "1" : "0";
      item.style.pointerEvents = j === i ? "auto" : "none";
    });
  };

  show(0);

  const next = () => {
    index = (index + 1) % items.length;
    show(index);
  };

  const interval = setInterval(next, duration + gap);

  el._textLoopCleanup = () => {
    clearInterval(interval);
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document.querySelectorAll('[data-component="text-loop"]').forEach(initTextLoop);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}
