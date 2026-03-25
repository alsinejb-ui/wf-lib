import { writeClipboardXscp, validateCopyPayload } from "webflow-clipboard";

/** Référence une carte (démo) — onglet Code uniquement ; Webflow = natif + wf-lib.css. */
const SNIPPETS = {
  htmlMarkup: `<!-- wf-lib svg-image-hover : remplacez l'URL image par un asset Webflow -->
<section data-component="svg-image-hover">
  <div data-svg-hover-card tabindex="0">
    <div class="card-img">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80" alt="Description" />
    </div>
    <div class="svg-stroke svg-stroke-1">
      <svg width="2453" height="2273" viewBox="0 0 2453 2273" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262" stroke="#FE5E41" stroke-width="200" stroke-linecap="round" />
      </svg>
    </div>
    <div class="svg-stroke svg-stroke-2">
      <svg width="2250" height="2535" viewBox="0 0 2250 2535" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012" stroke="#6E44FF" stroke-width="200" stroke-linecap="round" />
      </svg>
    </div>
    <div class="card-title">
      <h3 data-svg-hover-title>Nom de la carte</h3>
    </div>
  </div>
</section>`,

  headGlobal: `<!-- Dans <head> — Project Settings > Custom Code -->
<!-- crossorigin="anonymous" : chargement CORS (preview canvas *.canvas.webflow.com) -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@main/dist/wf-lib.css"
  crossorigin="anonymous"
/>`,

  bodyGlobal: `<!-- Avant </body> — script classique (recommandé Webflow, sans type="module") -->
<script
  defer
  src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@main/dist/wf-lib.global.js"
  crossorigin="anonymous"
></script>`,

  bodyGlobalModule: `<!-- Variante module ES — souvent bloquée dans le Designer / preview canvas -->
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@main/dist/wf-lib.js"
  crossorigin="anonymous"
></script>`,

  headIndividual: `<!-- Dans <head> — après build:components -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@main/dist/svg-image-hover/svg-image-hover.css"
  crossorigin="anonymous"
/>`,

  bodyIndividual: `<!-- Avant </body> -->
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@main/dist/svg-image-hover/svg-image-hover.js"
  crossorigin="anonymous"
></script>`,

  cssVar: `/* Optionnel — dans le Custom Code ou une classe parente */
--svg-hover-copy: #000;       /* texte du titre */
--svg-hover-stroke: #e67339;  /* 1er trait (currentColor du calque svg-stroke) */
--svg-hover-stroke-2: #e0e0e0; /* 2e calque si .svg-stroke-2 */`,

  jsStandalone: `import { initSvgImageHover } from "./svg-image-hover.js";

const el = document.querySelector('[data-component="svg-image-hover"]');
const { destroy } = initSvgImageHover(el, {
  // optionnel : strokeWidthHover, durationStrokeIn, …
});
// destroy() pour nettoyer (listeners + GSAP) avant retrait du DOM`,
};

const XSCP_URL = new URL("./webflow-structure.xscp.json", import.meta.url);

let loadedXscp = "";

const statusWebflow = document.getElementById("status-webflow");
const btnCopyWebflow = document.getElementById("btn-copy-webflow");
function setWebflowStatus(message, kind = "info") {
  statusWebflow.textContent = message;
  statusWebflow.dataset.kind = kind;
}

function updateWebflowButtonState() {
  btnCopyWebflow.disabled = !loadedXscp;
}

async function loadXscpFile() {
  try {
    const res = await fetch(XSCP_URL.href, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const v = validateCopyPayload(text);
    if (!v.valid) throw new Error(v.error);
    loadedXscp = text.trim();
    setWebflowStatus(
      "Structure prête. Cliquez sur « Copier pour Webflow », puis collez sur le canvas du Designer (Cmd+V / Ctrl+V).",
      "ok"
    );
  } catch (err) {
    loadedXscp = "";
    const msg =
      err instanceof Error ? err.message : String(err);
    setWebflowStatus(
      `Impossible de charger webflow-structure.xscp.json (${msg}). Vérifiez que le fichier est bien à côté de cette page.`,
      "err"
    );
  }
  updateWebflowButtonState();
}

btnCopyWebflow.addEventListener("click", () => {
  const raw = loadedXscp;
  if (!raw) {
    setWebflowStatus(
      "Le JSON Webflow n’est pas chargé. Rechargez la page ou vérifiez webflow-structure.xscp.json.",
      "err"
    );
    return;
  }
  const v = validateCopyPayload(raw);
  if (!v.valid) {
    setWebflowStatus(`JSON invalide : ${v.error}`, "err");
    return;
  }
  try {
    writeClipboardXscp(raw);
    setWebflowStatus(
      "Copié. Dans le Webflow Designer : Cmd+V (Mac) ou Ctrl+V (Windows) sur le canvas.",
      "ok"
    );
  } catch (err) {
    setWebflowStatus(err instanceof Error ? err.message : String(err), "err");
  }
});

for (const [id, text] of Object.entries({
  "snippet-html": SNIPPETS.htmlMarkup,
  "snippet-head-global": SNIPPETS.headGlobal,
  "snippet-body-global": SNIPPETS.bodyGlobal,
  "snippet-body-global-module": SNIPPETS.bodyGlobalModule,
  "snippet-head-individual": SNIPPETS.headIndividual,
  "snippet-body-individual": SNIPPETS.bodyIndividual,
  "snippet-css-var": SNIPPETS.cssVar,
  "snippet-js-standalone": SNIPPETS.jsStandalone,
})) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

document.querySelectorAll("[data-copy-target]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const id = btn.getAttribute("data-copy-target");
    const pre = document.getElementById(id);
    const t = pre?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(t);
      btn.textContent = "Copié";
      setTimeout(() => {
        btn.textContent = "Copier";
      }, 1600);
    } catch {
      btn.textContent = "Erreur";
      setTimeout(() => {
        btn.textContent = "Copier";
      }, 1600);
    }
  });
});

document.querySelectorAll("[data-tab]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.getAttribute("data-tab");
    document.querySelectorAll("[data-tab]").forEach((b) => {
      b.setAttribute("aria-pressed", b === btn ? "true" : "false");
    });
    document.querySelectorAll("[data-panel]").forEach((panel) => {
      const show = panel.getAttribute("data-panel") === tab;
      panel.toggleAttribute("hidden", !show);
    });
  });
});

loadXscpFile();
updateWebflowButtonState();
