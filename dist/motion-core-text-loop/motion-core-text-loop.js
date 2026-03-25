function s(t) {
  t._textLoopCleanup && t._textLoopCleanup();
  const i = t.querySelector("[data-tl-container]"), e = t.querySelectorAll("[data-tl-item]");
  if (!i || !e.length) return;
  const d = Number(t.getAttribute("data-tl-duration")) || 3e3, l = Number(t.getAttribute("data-tl-gap")) || 1e3;
  let n = 0;
  const o = (a) => {
    e.forEach((r, c) => {
      r.style.opacity = c === a ? "1" : "0", r.style.pointerEvents = c === a ? "auto" : "none";
    });
  };
  o(0);
  const u = setInterval(() => {
    n = (n + 1) % e.length, o(n);
  }, d + l);
  t._textLoopCleanup = () => {
    clearInterval(u);
  };
}
if (typeof window < "u") {
  const t = () => {
    document.querySelectorAll('[data-component="text-loop"]').forEach(s);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t, { once: !0 }) : t();
}
export {
  s as initTextLoop
};
