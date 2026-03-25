/**
 * Text Scramble — Texte qui se déchiffre caractère par caractère.
 * Inspiré de Motion Core, adapté pour wf-lib (vanilla JS).
 */

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function initTextScramble(el) {
  if (el._textScrambleCleanup) el._textScrambleCleanup();

  const targets = el.querySelectorAll("[data-ts-text]");
  if (!targets.length) return;

  function scrambleText(node, text, duration = 2000) {
    const original = text;
    let start = 0;
    const chars = CHARS.split("");

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(1, elapsed / duration);

      let output = "";
      for (let i = 0; i < original.length; i++) {
        const charProgress = (i + 1) / original.length;
        if (charProgress <= progress) {
          output += original[i];
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      node.textContent = output;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    start = Date.now();
    tick();
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const node = entry.target;
          const text = node.getAttribute("data-ts-text") ?? node.textContent ?? "";
          const duration = Number(node.getAttribute("data-ts-duration")) || 2000;
          scrambleText(node, text, duration);
          observer.unobserve(node);
        }
      });
    },
    { threshold: 0.2 }
  );

  targets.forEach((t) => observer.observe(t));

  el._textScrambleCleanup = () => {
    observer.disconnect();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document.querySelectorAll('[data-component="text-scramble"]').forEach(initTextScramble);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}
