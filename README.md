# wf-lib

Librairie de composants vanilla (HTML/CSS/JS/GSAP) pour Webflow, sans Code Components React.

## Structure du projet

```
src/
  components/
    reveal/
      reveal.js         ← composant
      reveal.css        ← styles scopés
      demo.html         ← page de démo standalone
      public/           ← assets du composant
    svg-image-hover/
      svg-image-hover.js
      svg-image-hover.css
      demo.html
      public/
    three-slider/
      three-slider.js
      three-slider.css
      demo.html
      public/
    bennett-clive-scroll-anim/
      bennett-clive-scroll-anim.js
      bennett-clive-scroll-anim.css
      demo.html
      public/
    three-parallax-footer/
      three-parallax-footer.js
      three-parallax-footer.css
      demo.html
      public/
    ova-scroll-slider/
      ova-scroll-slider.js
      ova-scroll-slider.css
      demo.html
      public/
    sageeast-3d-scroll/
      sageeast-3d-scroll.js
      sageeast-3d-scroll.css
      demo.html
      public/
    stories/
      stories.js
      stories.css
      demo.html
      public/
  core/
    dom.js              ← utilitaires lecture dataset
    text.js             ← utilitaires manipulation texte
  index.js              ← point d'entrée global (registry)
scripts/
  build.js              ← build individuel par composant
dist/
  wf-lib.js             ← bundle global
  wf-lib.css
  reveal/
    reveal.js           ← build individuel
    reveal.css
  svg-image-hover/
    svg-image-hover.js
    svg-image-hover.css
  three-slider/
    three-slider.js
    three-slider.css
  bennett-clive-scroll-anim/
    bennett-clive-scroll-anim.js
    bennett-clive-scroll-anim.css
  three-parallax-footer/
    three-parallax-footer.js
    three-parallax-footer.css
  ova-scroll-slider/
    ova-scroll-slider.js
    ova-scroll-slider.css
  sageeast-3d-scroll/
    sageeast-3d-scroll.js
    sageeast-3d-scroll.css
  stories/
    stories.js
    stories.css
```

> Documentation complète des composants (markup, attributs, intégration Webflow) : **[COMPONENTS.md](./COMPONENTS.md)**

---

## Développement local

```bash
npm install
npm run dev
```

Accéder aux démos :

| Composant | URL |
|---|---|
| reveal | `http://localhost:5173/src/components/reveal/demo.html` |
| svg-image-hover | `http://localhost:5173/src/components/svg-image-hover/demo.html` |
| three-slider | `http://localhost:5173/src/components/three-slider/demo.html` |
| bennett-clive-scroll-anim | `http://localhost:5173/src/components/bennett-clive-scroll-anim/demo.html` |
| three-parallax-footer | `http://localhost:5173/src/components/three-parallax-footer/demo.html` |
| ova-scroll-slider | `http://localhost:5173/src/components/ova-scroll-slider/demo.html` |
| sageeast-3d-scroll | `http://localhost:5173/src/components/sageeast-3d-scroll/demo.html` |
| stories | `http://localhost:5173/src/components/stories/demo.html` |

---

## Build

### Bundle global (tous composants)

```bash
npm run build
```

Génère `dist/wf-lib.js` + `dist/wf-lib.css`.

### Builds individuels par composant

```bash
npm run build:components
```

Génère `dist/reveal/`, `dist/svg-image-hover/`, `dist/three-slider/`, `dist/bennett-clive-scroll-anim/`, `dist/three-parallax-footer/`, `dist/ova-scroll-slider/`, `dist/sageeast-3d-scroll/`, `dist/stories/`.

### Les deux

```bash
npm run build:all
```

---

## Intégration Webflow

### Option A — Bundle global

Dans **Project Settings > Custom Code** :

```html
<!-- Dans <head> -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/wf-lib.css"
/>
```

```html
<!-- Avant </body> -->
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/wf-lib.js"
></script>
```

Le script lance automatiquement `initComponents()` : tous les `[data-component]` de la page sont détectés et initialisés.

### Option B — Composant individuel (CDN)

```html
<!-- reveal uniquement -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/reveal/reveal.css" />
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/reveal/reveal.js"></script>

<!-- svg-image-hover uniquement -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/svg-image-hover/svg-image-hover.css" />
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/svg-image-hover/svg-image-hover.js"></script>

<!-- three-slider uniquement -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/three-slider/three-slider.css" />
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/three-slider/three-slider.js"></script>

<!-- bennett-clive-scroll-anim uniquement -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/bennett-clive-scroll-anim/bennett-clive-scroll-anim.css" />
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/bennett-clive-scroll-anim/bennett-clive-scroll-anim.js"></script>

<!-- three-parallax-footer uniquement -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/three-parallax-footer/three-parallax-footer.css" />
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/three-parallax-footer/three-parallax-footer.js"></script>

<!-- ova-scroll-slider uniquement -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/ova-scroll-slider/ova-scroll-slider.css" />
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/ova-scroll-slider/ova-scroll-slider.js"></script>

<!-- sageeast-3d-scroll uniquement -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/sageeast-3d-scroll/sageeast-3d-scroll.css" />
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/sageeast-3d-scroll/sageeast-3d-scroll.js"></script>

<!-- stories uniquement -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/stories/stories.css" />
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/stories/stories.js"></script>
```

---

## Publication GitHub + jsDelivr

1. Push le repo sur GitHub.
2. Créer un tag versionné : `git tag v1.0.0 && git push --tags`.
3. Les URLs CDN sont automatiquement disponibles sur jsDelivr.

---

## Mettre à jour la librairie

1. Modifier `src/components/<composant>/`.
2. Rebuild : `npm run build:all`.
3. Commit + push.
4. Nouveau tag (ex: `v1.0.1`).
5. Mettre à jour la version dans les URLs Webflow.
