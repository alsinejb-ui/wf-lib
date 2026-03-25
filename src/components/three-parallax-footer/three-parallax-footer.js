import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_MODEL_URL = "";
const DEFAULT_MODEL_OPACITY = 0.5;
const DEFAULT_PARALLAX_Y = -35;
const ROTATION_X_BASE = 0.5;
const MODEL_Z_BASE = -1;

function disposeObject3D(object) {
  object.traverse((child) => {
    if (child.isMesh) {
      child.geometry?.dispose();
      if (Array.isArray(child.material)) {
        child.material.forEach((mat) => mat.dispose?.());
      } else {
        child.material?.dispose?.();
      }
    }
  });
}

function createFallbackModel() {
  const geometry = new THREE.TorusKnotGeometry(0.4, 0.12, 180, 24);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.3,
    roughness: 0.25,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = ROTATION_X_BASE;
  mesh.position.z = MODEL_Z_BASE;
  return mesh;
}

export function initThreeParallaxFooter(el) {
  if (el._threeParallaxFooterCleanup) {
    el._threeParallaxFooterCleanup();
  }

  const footerContainer = el.querySelector("[data-tpf-footer-container]");
  const canvasHost = el.querySelector("[data-tpf-canvas]");
  const trigger = el.querySelector("[data-tpf-trigger]") ?? el;

  if (!footerContainer || !canvasHost) {
    return;
  }

  const modelUrl = el.getAttribute("data-tpf-model-url") ?? DEFAULT_MODEL_URL;
  const useLenis = el.getAttribute("data-tpf-lenis") === "true";
  const modelOpacity = Number(
    el.getAttribute("data-tpf-model-opacity") ?? DEFAULT_MODEL_OPACITY,
  );
  const parallaxYOffset = Number(
    el.getAttribute("data-tpf-parallax-y") ?? DEFAULT_PARALLAX_Y,
  );

  const mouse = { x: 0, y: 0 };
  const onMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };
  window.addEventListener("mousemove", onMouseMove);

  const scene = new THREE.Scene();
  const width = canvasHost.clientWidth;
  const height = canvasHost.clientHeight || 1;
  const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
  camera.position.set(0, 0, 0.75);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  canvasHost.appendChild(renderer.domElement);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
  directionalLight.position.set(1, 1, 0);
  scene.add(directionalLight);

  let model = null;
  let modelBaseRotationX = ROTATION_X_BASE;
  let modelBaseZ = MODEL_Z_BASE;
  let rafId = null;
  let disposed = false;
  let lenis = null;
  let gsapTickerHandler = null;

  const useModel = (object3D) => {
    if (model) {
      scene.remove(model);
      disposeObject3D(model);
    }
    model = object3D;
    model.rotation.x = ROTATION_X_BASE;
    model.position.z = MODEL_Z_BASE;
    scene.add(model);
  };

  if (modelUrl) {
    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        const loaded = gltf.scene;
        const box = new THREE.Box3().setFromObject(loaded);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;

        loaded.position.sub(center);
        loaded.position.y = 0;
        loaded.position.z = MODEL_Z_BASE;
        loaded.rotation.x = ROTATION_X_BASE;
        loaded.scale.setScalar(1 / maxDim);
        useModel(loaded);
      },
      undefined,
      () => {
        useModel(createFallbackModel());
      },
    );
  } else {
    useModel(createFallbackModel());
  }

  const scrollTrigger = ScrollTrigger.create({
    trigger,
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      const yValue = parallaxYOffset * (1 - self.progress);
      gsap.set(footerContainer, { y: `${yValue}%` });
      modelBaseZ = MODEL_Z_BASE * (1 - self.progress);
      modelBaseRotationX = ROTATION_X_BASE * (1 - self.progress);
    },
  });

  if (useLenis) {
    lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsapTickerHandler = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(gsapTickerHandler);
    gsap.ticker.lagSmoothing(0);
  }

  const onResize = () => {
    const width = canvasHost.clientWidth;
    const height = canvasHost.clientHeight || 1;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };
  window.addEventListener("resize", onResize);

  const animate = () => {
    if (disposed) return;
    rafId = window.requestAnimationFrame(animate);

    if (model) {
      const targetRotationY = mouse.x * 0.3;
      const targetRotationX = -mouse.y * 0.2 + modelBaseRotationX;
      model.rotation.y += (targetRotationY - model.rotation.y) * 0.05;
      model.rotation.x += (targetRotationX - model.rotation.x) * 0.05;
      model.position.z += (modelBaseZ - model.position.z) * 0.05;
    }

    renderer.render(scene, camera);
  };
  animate();

  if (renderer.domElement) {
    renderer.domElement.style.opacity = String(modelOpacity);
  }

  el._threeParallaxFooterCleanup = () => {
    disposed = true;
    if (rafId) {
      window.cancelAnimationFrame(rafId);
    }
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", onResize);
    scrollTrigger.kill();

    if (gsapTickerHandler) {
      gsap.ticker.remove(gsapTickerHandler);
    }
    lenis?.destroy();

    if (model) {
      scene.remove(model);
      disposeObject3D(model);
    }
    renderer.dispose();
    renderer.domElement.remove();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="three-parallax-footer"]')
      .forEach((el) => initThreeParallaxFooter(el));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}
