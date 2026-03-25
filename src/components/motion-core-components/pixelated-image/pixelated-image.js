/**
 * Pixelated Image — Effet de pixelisation sur une image.
 * Inspiré de Motion Core, adapté pour wf-lib (vanilla JS).
 */

export function initPixelatedImage(el) {
  if (el._pixelatedImageCleanup) el._pixelatedImageCleanup();

  const container = el.querySelector("[data-pi-container]");
  const imageEl = el.querySelector("[data-pi-image]");
  if (!container || !imageEl) return;

  const pixelSize = Math.max(1, Number(el.getAttribute("data-pi-size")) || 8);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  container.appendChild(canvas);

  let rafId = null;
  let disposed = false;
  let resizeObserver = null;

  const render = () => {
    if (disposed || !imageEl.complete || !imageEl.naturalWidth) return;
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    if (w <= 0 || h <= 0) return;

    const cols = Math.ceil(w / pixelSize);
    const rows = Math.ceil(h / pixelSize);
    const sw = cols * pixelSize;
    const sh = rows * pixelSize;

    const off = document.createElement("canvas");
    off.width = cols;
    off.height = rows;
    const offCtx = off.getContext("2d");
    offCtx.drawImage(imageEl, 0, 0, cols, rows);

    canvas.width = w;
    canvas.height = h;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(off, 0, 0, cols, rows, 0, 0, sw, sh);
    rafId = null;
  };

  const scheduleRender = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(render);
  };

  const onLoad = () => scheduleRender();
  if (imageEl.complete) onLoad();
  else imageEl.addEventListener("load", onLoad, { once: true });

  resizeObserver = new ResizeObserver(scheduleRender);
  resizeObserver.observe(container);

  el._pixelatedImageCleanup = () => {
    disposed = true;
    if (rafId) cancelAnimationFrame(rafId);
    resizeObserver?.disconnect();
    imageEl.removeEventListener("load", onLoad);
    canvas.remove();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document.querySelectorAll('[data-component="pixelated-image"]').forEach(initPixelatedImage);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}
