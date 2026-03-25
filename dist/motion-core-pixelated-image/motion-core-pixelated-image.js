function v(e) {
  e._pixelatedImageCleanup && e._pixelatedImageCleanup();
  const n = e.querySelector("[data-pi-container]"), t = e.querySelector("[data-pi-image]");
  if (!n || !t) return;
  const c = Math.max(1, Number(e.getAttribute("data-pi-size")) || 8), a = document.createElement("canvas"), f = a.getContext("2d");
  n.appendChild(a);
  let o = null, p = !1, i = null;
  const h = () => {
    if (p || !t.complete || !t.naturalWidth) return;
    const m = n.clientWidth || 1, u = n.clientHeight || 1;
    if (m <= 0 || u <= 0) return;
    const d = Math.ceil(m / c), r = Math.ceil(u / c), x = d * c, w = r * c, l = document.createElement("canvas");
    l.width = d, l.height = r, l.getContext("2d").drawImage(t, 0, 0, d, r), a.width = m, a.height = u, f.imageSmoothingEnabled = !1, f.drawImage(l, 0, 0, d, r, 0, 0, x, w), o = null;
  }, g = () => {
    o || (o = requestAnimationFrame(h));
  }, s = () => g();
  t.complete ? s() : t.addEventListener("load", s, { once: !0 }), i = new ResizeObserver(g), i.observe(n), e._pixelatedImageCleanup = () => {
    p = !0, o && cancelAnimationFrame(o), i == null || i.disconnect(), t.removeEventListener("load", s), a.remove();
  };
}
if (typeof window < "u") {
  const e = () => {
    document.querySelectorAll('[data-component="pixelated-image"]').forEach(v);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
export {
  v as initPixelatedImage
};
