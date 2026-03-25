/**
 * ASCII Renderer — Convertit une image en caractères ASCII avec scanlines optionnelles.
 * Inspiré de Motion Core, adapté pour wf-lib (vanilla JS).
 * Distorsion au hover.
 */

const DEFAULT_CHARS = " .'`^\":~-_.,;=+*?!#%&@$";
const DEFAULT_CELL_SIZE = 8;
const DEFAULT_COLOR = "#0f0";
const HOVER_STRENGTH = 12;
const DEFAULT_HOVER_RADIUS = 0.35;
const LERP = 0.08;

function getBrightness(imageData, x, y, width) {
  const i = (y * width + x) * 4;
  const r = imageData.data[i];
  const g = imageData.data[i + 1];
  const b = imageData.data[i + 2];
  const a = imageData.data[i + 3] ?? 255;
  if (a < 128) return 1;
  return 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function initAsciiRenderer(el) {
  if (el._asciiRendererCleanup) {
    el._asciiRendererCleanup();
  }

  const container = el.querySelector("[data-ar-container]");
  const imageEl = el.querySelector("[data-ar-image]");

  if (!container || !imageEl) return;

  const chars =
    el.getAttribute("data-ar-chars")?.trim() || DEFAULT_CHARS;
  const cellSize = Number(el.getAttribute("data-ar-cell-size")) || DEFAULT_CELL_SIZE;
  const color = el.getAttribute("data-ar-color")?.trim() || DEFAULT_COLOR;
  const scanlines = el.getAttribute("data-ar-scanlines") !== "false";
  const hoverSizeAttr = el.getAttribute("data-ar-hover-size");
  const hoverRadius = hoverSizeAttr !== null && hoverSizeAttr !== ""
    ? Number(hoverSizeAttr) / 100
    : DEFAULT_HOVER_RADIUS;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  container.appendChild(canvas);

  const scanlinesEl = scanlines ? document.createElement("div") : null;
  if (scanlinesEl) {
    scanlinesEl.setAttribute("data-ar-scanlines-overlay", "");
    scanlinesEl.setAttribute("aria-hidden", "true");
    container.appendChild(scanlinesEl);
  }

  let rafId = null;
  let disposed = false;
  let resizeObserver = null;
  let cachedGrid = null;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mouse = { x: 0.5, y: 0.5 };
  const targetMouse = { x: 0.5, y: 0.5 };

  const buildGrid = () => {
    if (!imageEl.complete || !imageEl.naturalWidth) return null;
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    if (w <= 0 || h <= 0) return null;

    const cols = Math.floor(w / cellSize) || 1;
    const rows = Math.floor(h / cellSize) || 1;

    const offscreen = document.createElement("canvas");
    offscreen.width = cols;
    offscreen.height = rows;
    const offCtx = offscreen.getContext("2d");
    offCtx.drawImage(imageEl, 0, 0, cols, rows);
    try {
      const imageData = offCtx.getImageData(0, 0, cols, rows);
      const charCount = chars.length;
      const grid = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const brightness = getBrightness(imageData, col, row, cols);
          const idx = Math.min(
            Math.floor(brightness * charCount),
            charCount - 1
          );
          grid.push({ char: chars[idx], col, row });
        }
      }
      return { grid, cols, rows };
    } catch (err) {
      console.warn("[ascii-renderer] Canvas tainted (CORS).", err);
      return null;
    }
  };

  const render = () => {
    if (disposed) return;

    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    if (w <= 0 || h <= 0) return;

    if (!cachedGrid) {
      cachedGrid = buildGrid();
    }
    if (!cachedGrid) return;

    const { grid, cols, rows } = cachedGrid;

    mouse.x = lerp(mouse.x, targetMouse.x, LERP);
    mouse.y = lerp(mouse.y, targetMouse.y, LERP);

    const mx = mouse.x * w;
    const my = mouse.y * h;
    const radius = Math.min(w, h) * hoverRadius;

    canvas.width = w;
    canvas.height = h;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);

    const fontSize = Math.ceil(cellSize * 1.1);
    ctx.font = `${fontSize}px "JetBrains Mono", "Fira Code", "Courier New", monospace`;
    ctx.fillStyle = color;
    ctx.textBaseline = "top";

    for (const { char, col, row } of grid) {
      let dx = 0;
      let dy = 0;
      if (!prefersReducedMotion) {
        const px = col * cellSize + cellSize / 2;
        const py = row * cellSize + cellSize / 2;
        const dist = Math.hypot(px - mx, py - my);
        if (dist < radius && radius > 0) {
          const f = 1 - dist / radius;
          const push = f * f * HOVER_STRENGTH;
          const angle = Math.atan2(py - my, px - mx);
          dx = Math.cos(angle) * push;
          dy = Math.sin(angle) * push;
        }
      }
      const x = col * cellSize + dx;
      const y = row * cellSize + dy;
      ctx.fillText(char, x, y);
    }
  };

  const animate = () => {
    if (disposed) return;
    rafId = requestAnimationFrame(animate);
    render();
  };

  const scheduleRender = () => {
    cachedGrid = null;
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      render();
      rafId = null;
    });
  };

  const onImageLoad = () => {
    cachedGrid = null;
    scheduleRender();
    animate();
  };

  const onMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    targetMouse.x = (e.clientX - rect.left) / rect.width;
    targetMouse.y = (e.clientY - rect.top) / rect.height;
  };

  const onMouseLeave = () => {
    targetMouse.x = 0.5;
    targetMouse.y = 0.5;
  };

  const onResize = () => {
    cachedGrid = null;
  };

  if (imageEl.complete) {
    onImageLoad();
  } else {
    imageEl.addEventListener("load", onImageLoad, { once: true });
  }

  container.addEventListener("mousemove", onMouseMove);
  container.addEventListener("mouseleave", onMouseLeave);

  resizeObserver = new ResizeObserver(() => {
    onResize();
    scheduleRender();
  });
  resizeObserver.observe(container);

  el._asciiRendererCleanup = () => {
    disposed = true;
    if (rafId) cancelAnimationFrame(rafId);
    resizeObserver?.disconnect();
    imageEl.removeEventListener("load", onImageLoad);
    container.removeEventListener("mousemove", onMouseMove);
    container.removeEventListener("mouseleave", onMouseLeave);
    canvas.remove();
    scanlinesEl?.remove();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="ascii-renderer"]')
      .forEach((el) => initAsciiRenderer(el));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
