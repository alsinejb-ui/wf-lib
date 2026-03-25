/**
 * Glass Pane — Effet verre / réfraction au survol.
 * Inspiré de Motion Core, adapté pour wf-lib (vanilla JS + Three.js).
 */

import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uStrength;

  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    vec2 delta = uMouse - 0.5;
    uv += delta * uStrength;
    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;
  }
`;

export function initGlassPane(el) {
  if (el._glassPaneCleanup) el._glassPaneCleanup();

  const container = el.querySelector("[data-gp-container]");
  const imageEl = el.querySelector("[data-gp-image]");
  if (!container || !imageEl) return;

  const strength = Number(el.getAttribute("data-gp-strength")) || 0.05;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  const w = container.clientWidth || 1;
  const h = container.clientHeight || 1;
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const texture = new THREE.Texture(imageEl);
  texture.needsUpdate = true;

  const mouse = { x: 0.5, y: 0.5 };
  const targetMouse = { x: 0.5, y: 0.5 };
  const lerp = (a, b, t) => a + (b - a) * t;

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTexture: { value: texture },
      uResolution: { value: new THREE.Vector2(w, h) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uStrength: { value: strength },
    },
    vertexShader,
    fragmentShader,
  });

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  scene.add(mesh);

  let rafId = null;
  let disposed = false;
  let resizeObserver = null;

  const animate = () => {
    if (disposed) return;
    rafId = requestAnimationFrame(animate);
    mouse.x = lerp(mouse.x, targetMouse.x, 0.08);
    mouse.y = lerp(mouse.y, targetMouse.y, 0.08);
    material.uniforms.uMouse.value.set(mouse.x, mouse.y);
    renderer.render(scene, camera);
  };

  const onMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    targetMouse.x = (e.clientX - rect.left) / rect.width;
    targetMouse.y = 1 - (e.clientY - rect.top) / rect.height;
  };

  const onMouseLeave = () => {
    targetMouse.x = 0.5;
    targetMouse.y = 0.5;
  };

  const onResize = () => {
    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;
    renderer.setSize(width, height);
    material.uniforms.uResolution.value.set(width, height);
  };

  const onLoad = () => {
    texture.image = imageEl;
    texture.needsUpdate = true;
    animate();
  };

  if (imageEl.complete) onLoad();
  else imageEl.addEventListener("load", onLoad, { once: true });

  container.addEventListener("mousemove", onMouseMove);
  container.addEventListener("mouseleave", onMouseLeave);
  window.addEventListener("resize", onResize);
  resizeObserver = new ResizeObserver(onResize);
  resizeObserver.observe(container);

  el._glassPaneCleanup = () => {
    disposed = true;
    if (rafId) cancelAnimationFrame(rafId);
    resizeObserver?.disconnect();
    container.removeEventListener("mousemove", onMouseMove);
    container.removeEventListener("mouseleave", onMouseLeave);
    window.removeEventListener("resize", onResize);
    renderer.dispose();
    material.dispose();
    texture.dispose();
    renderer.domElement.remove();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document.querySelectorAll('[data-component="glass-pane"]').forEach(initGlassPane);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}
