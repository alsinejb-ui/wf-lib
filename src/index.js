import "./components/reveal/reveal.css";
import "./components/svg-image-hover/svg-image-hover.css";
import "./components/three-slider/three-slider.css";
import "./components/bennett-clive-scroll-anim/bennett-clive-scroll-anim.css";
import "./components/three-parallax-footer/three-parallax-footer.css";
import "./components/ova-scroll-slider/ova-scroll-slider.css";
import "./components/sageeast-3d-scroll/sageeast-3d-scroll.css";
import "./components/stories/stories.css";
import "./components/telescope-img-scroll/telescope-img-scroll.css";
import "./components/telescope-scroll/telescope-scroll.css";
import "./components/elementis-scroll/elementis-scroll.css";
import "./components/fractal-glass-effect/fractal-glass-effect.css";
import "./components/inkwell-image-gallery/inkwell-image-gallery.css";
import "./components/inversa-scroll-animation/inversa-scroll-animation.css";
import "./components/prototypestudio-scroll-animation/prototypestudio-scroll-animation.css";
import "./components/poly-app-photo-dump/poly-app-photo-dump.css";
import "./components/eduardbodak-scroll-animation/eduardbodak-scroll-animation.css";
import "./components/cosmos-parallax-effect-mousemove/cosmos-parallax-effect-mousemove.css";
import "./components/247artists-trail/247artists-trail.css";
import "./components/camille-mormal-slider/camille-mormal-slider.css";
import "./components/scroll-based-layout-animations/scroll-based-layout-animations.css";
import "./components/scroll-based-layout-2/scroll-based-layout-2.css";

import { initReveal } from "./components/reveal/reveal.js";
import { initSvgImageHover } from "./components/svg-image-hover/svg-image-hover.js";
import { initThreeSlider } from "./components/three-slider/three-slider.js";
import { initBennettCliveScrollAnim } from "./components/bennett-clive-scroll-anim/bennett-clive-scroll-anim.js";
import { initThreeParallaxFooter } from "./components/three-parallax-footer/three-parallax-footer.js";
import { initOvaScrollSlider } from "./components/ova-scroll-slider/ova-scroll-slider.js";
import { initSageeast3dScroll } from "./components/sageeast-3d-scroll/sageeast-3d-scroll.js";
import { initStories } from "./components/stories/stories.js";
import { initTelescopeImgScroll } from "./components/telescope-img-scroll/telescope-img-scroll.js";
import { initTelescopeScroll } from "./components/telescope-scroll/telescope-scroll.js";
import { initElementisScroll } from "./components/elementis-scroll/elementis-scroll.js";
import { initFractalGlassEffect } from "./components/fractal-glass-effect/fractal-glass-effect.js";
import { initInkwellImageGallery } from "./components/inkwell-image-gallery/inkwell-image-gallery.js";
import { initInversaScrollAnimation } from "./components/inversa-scroll-animation/inversa-scroll-animation.js";
import { initPrototypestudioScrollAnimation } from "./components/prototypestudio-scroll-animation/prototypestudio-scroll-animation.js";
import { initPolyAppPhotoDump } from "./components/poly-app-photo-dump/poly-app-photo-dump.js";
import { initEduardbodakScrollAnimation } from "./components/eduardbodak-scroll-animation/eduardbodak-scroll-animation.js";
import { initCosmosParallaxEffectMousemove } from "./components/cosmos-parallax-effect-mousemove/cosmos-parallax-effect-mousemove.js";
import { init247artistsTrail } from "./components/247artists-trail/247artists-trail.js";
import { initCamilleMormalSlider } from "./components/camille-mormal-slider/camille-mormal-slider.js";
import { initScrollBasedLayoutAnimations } from "./components/scroll-based-layout-animations/scroll-based-layout-animations.js";
import { initScrollBasedLayout2 } from "./components/scroll-based-layout-2/scroll-based-layout-2.js";

const registry = {
  reveal: initReveal,
  "svg-image-hover": initSvgImageHover,
  "three-slider": initThreeSlider,
  "bennett-clive-scroll-anim": initBennettCliveScrollAnim,
  "three-parallax-footer": initThreeParallaxFooter,
  "ova-scroll-slider": initOvaScrollSlider,
  "sageeast-3d-scroll": initSageeast3dScroll,
  stories: initStories,
  "telescope-img-scroll": initTelescopeImgScroll,
  "telescope-scroll": initTelescopeScroll,
  "elementis-scroll": initElementisScroll,
  "fractal-glass-effect": initFractalGlassEffect,
  "inkwell-image-gallery": initInkwellImageGallery,
  "inversa-scroll-animation": initInversaScrollAnimation,
  "prototypestudio-scroll-animation": initPrototypestudioScrollAnimation,
  "poly-app-photo-dump": initPolyAppPhotoDump,
  "eduardbodak-scroll-animation": initEduardbodakScrollAnimation,
  "cosmos-parallax-effect-mousemove": initCosmosParallaxEffectMousemove,
  "247artists-trail": init247artistsTrail,
  "camille-mormal-slider": initCamilleMormalSlider,
  "scroll-based-layout-animations": initScrollBasedLayoutAnimations,
  "grid-animated": initScrollBasedLayout2,
};

export {
  isWebflowAllowedOrigin,
  isWebflowCanvasPreview,
  isWebflowHostedDomain,
} from "./webflow-canvas.js";

export function initComponents(root = document) {
  for (const el of root.querySelectorAll("[data-component]")) {
    const name = el.getAttribute("data-component");
    const init = registry[name];
    init?.(el);
  }
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initComponents(), {
      once: true,
    });
  } else {
    initComponents();
  }
}
