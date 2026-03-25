import gsap from "gsap";
import { items as defaultItems } from "./items.js";
import { escapeHtml } from "../../core/dom.js";

const ITEM_POSITIONS = [
  { top: "-5%", left: "5%" },
  { top: "40%", left: "-5%" },
  { top: "25%", left: "20%" },
  { top: "60%", left: "40%" },
  { top: "70%", left: "10%" },
  { top: "-10%", left: "65%" },
  { top: "10%", left: "85%" },
  { top: "40%", left: "60%" },
  { top: "80%", left: "70%" },
  { top: "50%", left: "95%" },
];

function parseItems(el) {
  const raw = el.getAttribute("data-cosmos-items");
  if (!raw) return defaultItems;
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed : defaultItems;
  } catch (err) {
    console.warn("[cosmos-parallax-effect-mousemove] Invalid items JSON", err);
    return defaultItems;
  }
}

export function initCosmosParallaxEffectMousemove(el) {
  if (el._cosmosParallaxCleanup) {
    el._cosmosParallaxCleanup();
  }

  const gallery = el.querySelector("[data-cosmos-gallery]");
  if (!gallery) return;

  const items = parseItems(el);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gallery.innerHTML = "";

  items.forEach((itemData, index) => {
    const item = document.createElement("div");
    item.classList.add("cosmos-item");

    const position = ITEM_POSITIONS[index % ITEM_POSITIONS.length];
    item.style.top = position.top;
    item.style.left = position.left;

    const img = document.createElement("img");
    img.src = itemData.img;
    img.alt = "";
    item.appendChild(img);

    const link = document.createElement("div");
    link.classList.add("cosmos-link");
    const href = itemData.link || "#";
    link.innerHTML = `<a href="${escapeHtml(href)}">${escapeHtml(itemData.icon || "✶")}</a>`;
    item.appendChild(link);

    gallery.appendChild(item);
  });

  const itemEls = Array.from(gallery.querySelectorAll(".cosmos-item"));

  const onMouseMove = (event) => {
    if (reducedMotion) return;
    itemEls.forEach((item, index) => {
      const animationFactor = Number(items[index]?.parallaxSpeed ?? 0.05);
      const deltaX = (event.clientX - window.innerWidth / 2) * animationFactor;
      const deltaY = (event.clientY - window.innerHeight / 2) * animationFactor;

      gsap.to(item, {
        x: deltaX,
        y: deltaY,
        duration: 0.75,
        ease: "power2.out",
        overwrite: true,
      });
    });
  };

  document.addEventListener("mousemove", onMouseMove);

  el._cosmosParallaxCleanup = () => {
    document.removeEventListener("mousemove", onMouseMove);
    itemEls.forEach((item) => gsap.killTweensOf(item));
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="cosmos-parallax-effect-mousemove"]')
      .forEach((el) => initCosmosParallaxEffectMousemove(el));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
