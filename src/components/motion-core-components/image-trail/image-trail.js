/**
 * Image Trail — Traînée d'images qui suit le curseur.
 * Inspiré de Motion Core, adapté pour wf-lib (vanilla JS).
 */

const LERP = 0.15;
const MAX_TRAIL = 8;
const DEFAULT_SIZE = 80;

export function initImageTrail(el) {
  if (el._imageTrailCleanup) el._imageTrailCleanup();

  const container = el.querySelector("[data-it-container]");
  const imageEl = el.querySelector("[data-it-image]");
  if (!container || !imageEl) return;

  const trailCount = Math.max(2, Math.min(20, Number(el.getAttribute("data-it-count")) || MAX_TRAIL));
  const imgSize = Math.max(20, Math.min(200, Number(el.getAttribute("data-it-size")) || DEFAULT_SIZE));

  const trail = [];
  const mouse = { x: 0, y: 0 };
  const targetMouse = { x: 0, y: 0 };

  for (let i = 0; i < trailCount; i++) {
    const img = imageEl.cloneNode(true);
    img.style.cssText = `
      position: fixed;
      pointer-events: none;
      width: ${imgSize}px;
      height: ${imgSize}px;
      object-fit: cover;
      border-radius: 8px;
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
      z-index: 9999;
      transition: none;
    `;
    trail.push({ el: img, x: 0, y: 0, life: 0 });
    document.body.appendChild(img);
  }

  let head = 0;
  let rafId = null;
  let disposed = false;

  const onMouseMove = (e) => {
    targetMouse.x = e.clientX;
    targetMouse.y = e.clientY;
  };

  const animate = () => {
    if (disposed) return;
    rafId = requestAnimationFrame(animate);

    mouse.x += (targetMouse.x - mouse.x) * LERP;
    mouse.y += (targetMouse.y - mouse.y) * LERP;

    const t = trail[head];
    t.x = mouse.x;
    t.y = mouse.y;
    t.life = 1;
    t.el.style.left = t.x + "px";
    t.el.style.top = t.y + "px";
    t.el.style.opacity = "0.7";
    t.el.style.transform = "translate(-50%, -50%) scale(1)";
    head = (head + 1) % MAX_TRAIL;

    trail.forEach((item, i) => {
      if (item.life > 0) {
        item.life -= 0.02;
        const scale = 0.6 + item.life * 0.4;
        item.el.style.opacity = String(item.life * 0.7);
        item.el.style.transform = `translate(-50%, -50%) scale(${scale})`;
        if (item.life <= 0) item.el.style.opacity = "0";
      }
    });
  };

  container.addEventListener("mousemove", onMouseMove);
  animate();

  el._imageTrailCleanup = () => {
    disposed = true;
    if (rafId) cancelAnimationFrame(rafId);
    container.removeEventListener("mousemove", onMouseMove);
    trail.forEach((t) => t.el.remove());
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document.querySelectorAll('[data-component="image-trail"]').forEach(initImageTrail);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}
