/**
 * Dithered Image — Applique des algorithmes de dithering (Bayer, Atkinson, etc.).
 * Inspiré de Motion Core, adapté pour wf-lib (vanilla JS).
 */

const BAYER_4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].flat();

function bayerDither(imageData, level = 0.5) {
  const data = new Uint8ClampedArray(imageData.data);
  const len = data.length;
  const threshold = level * 255;

  for (let i = 0; i < len; i += 4) {
    const x = (i / 4) % imageData.width;
    const y = Math.floor(i / 4 / imageData.width);
    const bayerVal = (BAYER_4[(x % 4) + (y % 4) * 4] / 16) * 255;
    const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    const v = gray + (bayerVal - 128);
    const out = v < threshold ? 0 : 255;
    data[i] = data[i + 1] = data[i + 2] = out;
  }
  return data;
}

function atkinsonDither(imageData, level = 0.5) {
  const w = imageData.width;
  const h = imageData.height;
  const data = new Float32Array(w * h);

  for (let i = 0; i < w * h; i++) {
    const j = i * 4;
    data[i] = 0.299 * imageData.data[j] + 0.587 * imageData.data[j + 1] + 0.114 * imageData.data[j + 2];
  }

  const threshold = level * 255;
  const err = 1 / 8;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      const oldVal = data[i];
      const newVal = oldVal < threshold ? 0 : 255;
      const error = oldVal - newVal;
      data[i] = newVal;

      if (x + 1 < w) data[i + 1] += error * err;
      if (x + 2 < w) data[i + 2] += error * err;
      if (y + 1 < h) data[i + w] += error * err;
      if (y + 1 < h && x - 1 >= 0) data[i + w - 1] += error * err;
      if (y + 1 < h && x + 1 < w) data[i + w + 1] += error * err;
      if (y + 2 < h) data[i + w * 2] += error * err;
    }
  }

  const out = new Uint8ClampedArray(imageData.data.length);
  for (let i = 0; i < w * h; i++) {
    const v = Math.max(0, Math.min(255, Math.round(data[i])));
    out[i * 4] = out[i * 4 + 1] = out[i * 4 + 2] = v;
    out[i * 4 + 3] = imageData.data[i * 4 + 3];
  }
  return out;
}

const ALGOS = { bayer: bayerDither, atkinson: atkinsonDither };

export function initDitheredImage(el) {
  if (el._ditheredImageCleanup) el._ditheredImageCleanup();

  const container = el.querySelector("[data-di-container]");
  const imageEl = el.querySelector("[data-di-image]");
  if (!container || !imageEl) return;

  const algo = (el.getAttribute("data-di-algo") || "bayer").toLowerCase();
  const level = Number(el.getAttribute("data-di-level")) || 0.5;
  const ditherFn = ALGOS[algo] || bayerDither;

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

    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(imageEl, 0, 0, w, h);
    try {
      const imageData = ctx.getImageData(0, 0, w, h);
      const out = ditherFn(imageData, level);
      imageData.data.set(out);
      ctx.putImageData(imageData, 0, 0);
    } catch (err) {
      console.warn("[dithered-image] Canvas tainted (CORS).", err);
    }
    rafId = null;
  };

  const scheduleRender = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      render();
    });
  };

  const onLoad = () => scheduleRender();
  if (imageEl.complete) onLoad();
  else imageEl.addEventListener("load", onLoad, { once: true });

  resizeObserver = new ResizeObserver(scheduleRender);
  resizeObserver.observe(container);

  el._ditheredImageCleanup = () => {
    disposed = true;
    if (rafId) cancelAnimationFrame(rafId);
    resizeObserver?.disconnect();
    imageEl.removeEventListener("load", onLoad);
    canvas.remove();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document.querySelectorAll('[data-component="dithered-image"]').forEach(initDitheredImage);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}
