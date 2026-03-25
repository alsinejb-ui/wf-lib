const v = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5]
].flat();
function w(n, u = 0.5) {
  const t = new Uint8ClampedArray(n.data), i = t.length, r = u * 255;
  for (let d = 0; d < i; d += 4) {
    const c = d / 4 % n.width, s = Math.floor(d / 4 / n.width), e = v[c % 4 + s % 4 * 4] / 16 * 255, h = 0.299 * t[d] + 0.587 * t[d + 1] + 0.114 * t[d + 2] + (e - 128) < r ? 0 : 255;
    t[d] = t[d + 1] = t[d + 2] = h;
  }
  return t;
}
function C(n, u = 0.5) {
  const t = n.width, i = n.height, r = new Float32Array(t * i);
  for (let e = 0; e < t * i; e++) {
    const o = e * 4;
    r[e] = 0.299 * n.data[o] + 0.587 * n.data[o + 1] + 0.114 * n.data[o + 2];
  }
  const d = u * 255, c = 1 / 8;
  for (let e = 0; e < i; e++)
    for (let o = 0; o < t; o++) {
      const a = e * t + o, h = r[a], f = h < d ? 0 : 255, l = h - f;
      r[a] = f, o + 1 < t && (r[a + 1] += l * c), o + 2 < t && (r[a + 2] += l * c), e + 1 < i && (r[a + t] += l * c), e + 1 < i && o - 1 >= 0 && (r[a + t - 1] += l * c), e + 1 < i && o + 1 < t && (r[a + t + 1] += l * c), e + 2 < i && (r[a + t * 2] += l * c);
    }
  const s = new Uint8ClampedArray(n.data.length);
  for (let e = 0; e < t * i; e++) {
    const o = Math.max(0, Math.min(255, Math.round(r[e])));
    s[e * 4] = s[e * 4 + 1] = s[e * 4 + 2] = o, s[e * 4 + 3] = n.data[e * 4 + 3];
  }
  return s;
}
const A = { bayer: w, atkinson: C };
function b(n) {
  n._ditheredImageCleanup && n._ditheredImageCleanup();
  const u = n.querySelector("[data-di-container]"), t = n.querySelector("[data-di-image]");
  if (!u || !t) return;
  const i = (n.getAttribute("data-di-algo") || "bayer").toLowerCase(), r = Number(n.getAttribute("data-di-level")) || 0.5, d = A[i] || w, c = document.createElement("canvas"), s = c.getContext("2d");
  u.appendChild(c);
  let e = null, o = !1, a = null;
  const h = () => {
    if (o || !t.complete || !t.naturalWidth) return;
    const g = u.clientWidth || 1, y = u.clientHeight || 1;
    if (!(g <= 0 || y <= 0)) {
      c.width = g, c.height = y, s.drawImage(t, 0, 0, g, y);
      try {
        const m = s.getImageData(0, 0, g, y), p = d(m, r);
        m.data.set(p), s.putImageData(m, 0, 0);
      } catch (m) {
        console.warn("[dithered-image] Canvas tainted (CORS).", m);
      }
      e = null;
    }
  }, f = () => {
    e || (e = requestAnimationFrame(() => {
      h();
    }));
  }, l = () => f();
  t.complete ? l() : t.addEventListener("load", l, { once: !0 }), a = new ResizeObserver(f), a.observe(u), n._ditheredImageCleanup = () => {
    o = !0, e && cancelAnimationFrame(e), a == null || a.disconnect(), t.removeEventListener("load", l), c.remove();
  };
}
if (typeof window < "u") {
  const n = () => {
    document.querySelectorAll('[data-component="dithered-image"]').forEach(b);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", n, { once: !0 }) : n();
}
export {
  b as initDitheredImage
};
