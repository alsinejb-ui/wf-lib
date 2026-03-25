function p(e) {
  e._marqueeCleanup && e._marqueeCleanup();
  const t = e.querySelector("[data-mq-track]"), o = e.querySelectorAll("[data-mq-item]"), i = e.querySelector("[data-mq-content]");
  if (!t) return;
  const d = Number(e.getAttribute("data-mq-duration")) || 20, u = Number(e.getAttribute("data-mq-velocity")) || 1, r = Number(e.getAttribute("data-mq-gap")) || 0, m = e.getAttribute("data-mq-reversed") === "true";
  let a;
  if (o.length > 0)
    a = document.createDocumentFragment(), o.forEach((n) => {
      const c = n.cloneNode(!0);
      c.setAttribute("aria-hidden", "true"), a.appendChild(c);
    });
  else if (i) {
    a = document.createDocumentFragment();
    const n = document.createElement("div");
    n.className = "mq-item", n.style.flexShrink = "0", n.style.paddingRight = `${r}px`, n.appendChild(i.cloneNode(!0)), a.appendChild(n);
  } else
    return;
  const l = a.cloneNode(!0);
  t.innerHTML = "", t.style.animation = "none", t.style.gap = r > 0 ? `${r}px` : "", t.appendChild(a), t.appendChild(l);
  const s = d / u;
  t.style.animation = `mq-scroll ${s}s linear infinite`, t.style.animationDirection = m ? "reverse" : "normal", e._marqueeCleanup = () => {
    t.style.animation = "none";
  };
}
if (typeof window < "u") {
  const e = () => {
    document.querySelectorAll('[data-component="marquee"]').forEach(p);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
export {
  p as initMarquee
};
