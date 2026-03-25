const K = " .'`^\":~-_.,;=+*?!#%&@$";
const Q = "#0f0";
function tt(t, e, r, A) {
  const n = (r * A + e) * 4, S = t.data[n], _ = t.data[n + 1], p = t.data[n + 2];
  return (t.data[n + 3] ?? 255) < 128 ? 1 : 1 - (0.299 * S + 0.587 * _ + 0.114 * p) / 255;
}
function $(t, e, r) {
  return t + (e - t) * r;
}
function et(t) {
  var z, q;
  t._asciiRendererCleanup && t._asciiRendererCleanup();
  const e = t.querySelector("[data-ar-container]"), r = t.querySelector("[data-ar-image]");
  if (!e || !r) return;
  const A = ((z = t.getAttribute("data-ar-chars")) == null ? void 0 : z.trim()) || K, n = Number(t.getAttribute("data-ar-cell-size")) || 8, S = ((q = t.getAttribute("data-ar-color")) == null ? void 0 : q.trim()) || Q, _ = t.getAttribute("data-ar-scanlines") !== "false", p = t.getAttribute("data-ar-hover-size"), F = p !== null && p !== "" ? Number(p) / 100 : 0.35, R = document.createElement("canvas"), d = R.getContext("2d");
  e.appendChild(R);
  const i = _ ? document.createElement("div") : null;
  i && (i.setAttribute("data-ar-scanlines-overlay", ""), i.setAttribute("aria-hidden", "true"), e.appendChild(i));
  let u = null, b = !1, L = null, a = null;
  const J = window.matchMedia("(prefers-reduced-motion: reduce)").matches, f = { x: 0.5, y: 0.5 }, h = { x: 0.5, y: 0.5 }, X = () => {
    if (!r.complete || !r.naturalWidth) return null;
    const c = e.clientWidth || 1, o = e.clientHeight || 1;
    if (c <= 0 || o <= 0) return null;
    const s = Math.floor(c / n) || 1, m = Math.floor(o / n) || 1, x = document.createElement("canvas");
    x.width = s, x.height = m;
    const y = x.getContext("2d");
    y.drawImage(r, 0, 0, s, m);
    try {
      const E = y.getImageData(0, 0, s, m), g = A.length, C = [];
      for (let v = 0; v < m; v++)
        for (let l = 0; l < s; l++) {
          const M = tt(E, l, v, s), w = Math.min(
            Math.floor(M * g),
            g - 1
          );
          C.push({ char: A[w], col: l, row: v });
        }
      return { grid: C, cols: s, rows: m };
    } catch (E) {
      return console.warn("[ascii-renderer] Canvas tainted (CORS).", E), null;
    }
  }, H = () => {
    if (b) return;
    const c = e.clientWidth || 1, o = e.clientHeight || 1;
    if (c <= 0 || o <= 0 || (a || (a = X()), !a)) return;
    const { grid: s, cols: m, rows: x } = a;
    f.x = $(f.x, h.x, 0.08), f.y = $(f.y, h.y, 0.08);
    const y = f.x * c, E = f.y * o, g = Math.min(c, o) * F;
    R.width = c, R.height = o, d.fillStyle = "#000", d.fillRect(0, 0, c, o);
    const C = Math.ceil(n * 1.1);
    d.font = `${C}px "JetBrains Mono", "Fira Code", "Courier New", monospace`, d.fillStyle = S, d.textBaseline = "top";
    for (const { char: v, col: l, row: M } of s) {
      let w = 0, N = 0;
      if (!J) {
        const B = l * n + n / 2, G = M * n + n / 2, V = Math.hypot(B - y, G - E);
        if (V < g && g > 0) {
          const P = 1 - V / g, W = P * P * 12, Z = Math.atan2(G - E, B - y);
          w = Math.cos(Z) * W, N = Math.sin(Z) * W;
        }
      }
      const j = l * n + w, k = M * n + N;
      d.fillText(v, j, k);
    }
  }, D = () => {
    b || (u = requestAnimationFrame(D), H());
  }, I = () => {
    a = null, !u && (u = requestAnimationFrame(() => {
      H(), u = null;
    }));
  }, T = () => {
    a = null, I(), D();
  }, O = (c) => {
    const o = e.getBoundingClientRect();
    h.x = (c.clientX - o.left) / o.width, h.y = (c.clientY - o.top) / o.height;
  }, U = () => {
    h.x = 0.5, h.y = 0.5;
  }, Y = () => {
    a = null;
  };
  r.complete ? T() : r.addEventListener("load", T, { once: !0 }), e.addEventListener("mousemove", O), e.addEventListener("mouseleave", U), L = new ResizeObserver(() => {
    Y(), I();
  }), L.observe(e), t._asciiRendererCleanup = () => {
    b = !0, u && cancelAnimationFrame(u), L == null || L.disconnect(), r.removeEventListener("load", T), e.removeEventListener("mousemove", O), e.removeEventListener("mouseleave", U), R.remove(), i == null || i.remove();
  };
}
if (typeof window < "u") {
  const t = () => {
    document.querySelectorAll('[data-component="ascii-renderer"]').forEach((e) => et(e));
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t, { once: !0 }) : t();
}
export {
  et as initAsciiRenderer
};
