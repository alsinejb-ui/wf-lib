function c(t) {
  t._preloaderCleanup && t._preloaderCleanup();
  const n = t.querySelector("[data-pl-bar]"), e = t.querySelector("[data-pl-text]");
  if (!n) return;
  const i = Number(t.getAttribute("data-pl-duration")) || 2e3, d = () => {
    t.dispatchEvent(new CustomEvent("preloader-complete")), n.style.width = "100%", e && (e.textContent = t.getAttribute("data-pl-done") || "100%"), setTimeout(() => {
      t.style.opacity = "0", t.style.pointerEvents = "none", setTimeout(() => {
        t.style.display = "none";
      }, 300);
    }, 200);
  }, s = performance.now(), o = (u) => {
    const a = Math.min(1, (u - s) / i), r = 1 - Math.pow(1 - a, 3);
    n.style.width = `${r * 100}%`, e && (e.textContent = `${Math.round(r * 100)}%`), a < 1 ? requestAnimationFrame(o) : d();
  };
  requestAnimationFrame(o), t._preloaderCleanup = () => {
  };
}
if (typeof window < "u") {
  const t = () => {
    document.querySelectorAll('[data-component="preloader"]').forEach(c);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t, { once: !0 }) : t();
}
export {
  c as initPreloader
};
