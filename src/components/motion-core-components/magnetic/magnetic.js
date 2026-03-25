/**
 * Magnetic — Bouton/element magnétique qui suit le curseur.
 * Inspiré de Motion Core, adapté pour wf-lib (vanilla JS).
 */

const LERP = 0.2;
const DEFAULT_STRENGTH = 0.3;

export function initMagnetic(el) {
  if (el._magneticCleanup) el._magneticCleanup();

  const items = el.querySelectorAll("[data-magnetic-item]");
  if (!items.length) return;

  const strength = Math.max(0, Math.min(1, Number(el.getAttribute("data-magnetic-strength")) || DEFAULT_STRENGTH));

  const onMouseMove = (e) => {
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      const dist = Math.hypot(dx, dy);
      const pull = Math.min(1, dist) * strength;
      const tx = dx * pull * 20;
      const ty = dy * pull * 20;
      const current = item._magneticPos || { x: 0, y: 0 };
      item._magneticPos = {
        x: current.x + (tx - current.x) * LERP,
        y: current.y + (ty - current.y) * LERP,
      };
      item.style.transform = `translate(${item._magneticPos.x}px, ${item._magneticPos.y}px)`;
    });
  };

  const onMouseLeave = () => {
    items.forEach((item) => {
      item._magneticPos = { x: 0, y: 0 };
      item.style.transform = "translate(0, 0)";
    });
  };

  el.addEventListener("mousemove", onMouseMove);
  el.addEventListener("mouseleave", onMouseLeave);

  el._magneticCleanup = () => {
    el.removeEventListener("mousemove", onMouseMove);
    el.removeEventListener("mouseleave", onMouseLeave);
    items.forEach((i) => {
      i.style.transform = "";
      delete i._magneticPos;
    });
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document.querySelectorAll('[data-component="magnetic"]').forEach(initMagnetic);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}
