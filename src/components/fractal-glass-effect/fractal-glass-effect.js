import * as THREE from "three";
import { fragmentShader, vertexShader } from "./shaders.js";

const DEFAULT_CONFIG = {
  lerpFactor: 0.035,
  parallaxStrength: 0.1,
  distortionMultiplier: 10,
  glassStrength: 2.0,
  glassSmoothness: 0.0001,
  stripesFrequency: 35,
  edgePadding: 0.1,
};

export function initFractalGlassEffect(el) {
  if (el._fractalGlassEffectCleanup) {
    el._fractalGlassEffectCleanup();
  }

  const container = el.querySelector("[data-fge-hero]");
  const imageElement = el.querySelector("[data-fge-texture]");
  if (!container || !imageElement) return;

  const config = { ...DEFAULT_CONFIG };

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });

  const initialWidth = container.clientWidth || window.innerWidth;
  const initialHeight = container.clientHeight || window.innerHeight;
  renderer.setSize(initialWidth, initialHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const mouse = { x: 0.5, y: 0.5 };
  const targetMouse = { x: 0.5, y: 0.5 };
  const lerp = (start, end, factor) => start + (end - start) * factor;

  const textureSize = { x: 1, y: 1 };
  const uniforms = {
    uTexture: { value: null },
    uResolution: { value: new THREE.Vector2(initialWidth, initialHeight) },
    uTextureSize: { value: new THREE.Vector2(textureSize.x, textureSize.y) },
    uMouse: { value: new THREE.Vector2(mouse.x, mouse.y) },
    uParallaxStrength: { value: config.parallaxStrength },
    uDistortionMultiplier: { value: config.distortionMultiplier },
    uGlassStrength: { value: config.glassStrength },
    uStripesFrequency: { value: config.stripesFrequency },
    uGlassSmoothness: { value: config.glassSmoothness },
    uEdgePadding: { value: config.edgePadding },
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
  });

  const geometry = new THREE.PlaneGeometry(2, 2);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  let rafId = null;
  let disposed = false;
  let texture = null;

  const loadTextureFromImage = () => {
    if (!imageElement.complete) return;
    texture?.dispose();
    texture = new THREE.Texture(imageElement);
    texture.needsUpdate = true;

    textureSize.x = imageElement.naturalWidth || imageElement.width || 1;
    textureSize.y = imageElement.naturalHeight || imageElement.height || 1;

    uniforms.uTexture.value = texture;
    uniforms.uTextureSize.value.set(textureSize.x, textureSize.y);
  };

  if (imageElement.complete) {
    loadTextureFromImage();
  } else {
    imageElement.addEventListener("load", loadTextureFromImage, { once: true });
  }

  const onMouseMove = (event) => {
    targetMouse.x = event.clientX / window.innerWidth;
    targetMouse.y = 1 - event.clientY / window.innerHeight;
  };

  const onResize = () => {
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    uniforms.uResolution.value.set(width, height);
  };

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("resize", onResize);

  const animate = () => {
    if (disposed) return;
    rafId = window.requestAnimationFrame(animate);

    mouse.x = lerp(mouse.x, targetMouse.x, config.lerpFactor);
    mouse.y = lerp(mouse.y, targetMouse.y, config.lerpFactor);
    uniforms.uMouse.value.set(mouse.x, mouse.y);

    renderer.render(scene, camera);
  };

  animate();

  el._fractalGlassEffectCleanup = () => {
    disposed = true;
    if (rafId) window.cancelAnimationFrame(rafId);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", onResize);

    scene.remove(mesh);
    geometry.dispose();
    material.dispose();
    texture?.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="fractal-glass-effect"]')
      .forEach((el) => initFractalGlassEffect(el));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
