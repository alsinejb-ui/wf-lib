# wf-lib — Guide des composants

Ce fichier documente chaque composant : markup HTML requis, attributs disponibles, et intégration dans Webflow ou hors Webflow.

> Mis à jour à chaque nouveau composant ajouté dans `src/components/`.

---

## Sommaire

- [svg-image-hover](#svg-image-hover)
- [three-slider](#three-slider)
- [bennett-clive-scroll-anim](#bennett-clive-scroll-anim)
- [three-parallax-footer](#three-parallax-footer)
- [ova-scroll-slider](#ova-scroll-slider)
- [sageeast-3d-scroll](#sageeast-3d-scroll)
- [stories](#stories)
- [reveal](#reveal)
- [ascii-renderer](#ascii-renderer)
- [motion-core-components](#motion-core-components)

---

## motion-core-components

Ensemble de composants inspirés de [Motion Core](https://motion-core.dev/), adaptés en vanilla JS pour wf-lib.

**Emplacement** : `src/components/motion-core-components/`

| Composant | Rôle |
|-----------|------|
| ascii-renderer | Image → ASCII, distorsion hover |
| dithered-image | Dithering Bayer/Atkinson |
| pixelated-image | Pixelisation |
| glass-pane | Verre/réfraction (Three.js) |
| image-trail | Traînée d'images au curseur |
| magnetic | Boutons magnétiques |
| text-scramble | Texte déchiffré au scroll |
| text-loop | Carousel de mots |
| marquee | Bandeau défilant |
| preloader | Barre de chargement |

Voir `src/components/motion-core-components/README.md` pour le détail de chaque composant.

---

## svg-image-hover

Effet de hover sur des cards avec animation SVG stroke-dashoffset et apparition des mots du titre.

**Démo locale** : `src/components/svg-image-hover/demo.html`

### Markup HTML

```html
<section data-component="svg-image-hover">

  <div data-svg-hover-card tabindex="0">

    <!-- Image de fond -->
    <div class="card-img">
      <img src="chemin/vers/image.jpg" alt="Description" />
    </div>

    <!-- SVG stroke animé (couleur principale) -->
    <div class="svg-stroke svg-stroke-1">
      <svg viewBox="0 0 2453 2273" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M..." stroke="#FE5E41" stroke-width="200" stroke-linecap="round" />
      </svg>
    </div>

    <!-- SVG stroke animé (couleur secondaire, optionnel) -->
    <div class="svg-stroke svg-stroke-2">
      <svg viewBox="0 0 2250 2535" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M..." stroke="#6E44FF" stroke-width="200" stroke-linecap="round" />
      </svg>
    </div>

    <!-- Titre animé -->
    <div class="card-title">
      <h3 data-svg-hover-title>Nom de la carte</h3>
    </div>

  </div>

  <!-- Répéter autant de cards que nécessaire -->

</section>
```

### Attributs

| Attribut | Cible | Rôle |
|---|---|---|
| `data-component="svg-image-hover"` | Conteneur racine | Active le composant sur cet élément |
| `data-svg-hover-card` | Chaque card | Cible sur laquelle s'attachent les événements hover/focus |
| `data-svg-hover-title` | Élément texte dans la card | Titre dont les mots seront animés en entrée |
| `tabindex="0"` | `data-svg-hover-card` | Rend la card focusable au clavier (accessibilité) |

### Classes CSS à respecter

| Classe | Rôle |
|---|---|
| `.svg-stroke` | Wrapper SVG positionné en absolu, centré et mis à l'échelle |
| `.svg-stroke-1` | Premier SVG (stroke coloré par card) |
| `.svg-stroke-2` | Second SVG (stroke de base / secondaire, optionnel) |
| `.card-img` | Wrapper de l'image de fond |
| `.card-title` | Wrapper du titre, positionné en absolu bas-gauche |

> Les couleurs de stroke ne sont pas gérées par le composant. Les définir via CSS ou `style` inline sur les `path`.

### Variables CSS disponibles

```css
--svg-hover-copy: #000; /* Couleur du texte du titre (défaut: #000) */
```

### Comportement

- Au `mouseenter` / `focus` : les SVG paths se dessinent (`strokeDashoffset` → 0) et les mots du titre montent
- Au `mouseleave` / `blur` : animation inverse
- Le split des mots est fait en JS vanilla (pas de dépendance GSAP Club / SplitText)

---

### Utilisation hors Webflow (standalone)

**En développement local (Vite) :**

```bash
npm run dev
# Ouvrir http://localhost:5173/src/components/svg-image-hover/demo.html
```

**Dans un projet existant (import ES module) :**

```js
import { initSvgImageHover } from "./svg-image-hover.js";

// Sur un élément précis
const el = document.querySelector('[data-component="svg-image-hover"]');
initSvgImageHover(el);

// Ou sur plusieurs éléments
document
  .querySelectorAll('[data-component="svg-image-hover"]')
  .forEach((el) => initSvgImageHover(el));
```

```html
<link rel="stylesheet" href="./svg-image-hover.css" />
```

> Si utilisé via le script seul (`<script type="module" src="svg-image-hover.js">`), l'auto-init se déclenche automatiquement sur tous les `[data-component="svg-image-hover"]` de la page.

---

### Utilisation dans Webflow

#### Option A — Bundle global (tous les composants)

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

Le script lance `initComponents()` automatiquement — tous les éléments `[data-component]` sont détectés et initialisés.

#### Option B — Composant individuel _(disponible après `npm run build:components`)_

```html
<!-- Dans <head> -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/svg-image-hover/svg-image-hover.css"
/>
```

```html
<!-- Avant </body> -->
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/svg-image-hover/svg-image-hover.js"
></script>
```

#### Configurer le markup dans Webflow Designer

1. Créer une **Section** ou **Div Block** → Custom Attribute : `data-component` = `svg-image-hover`
2. À l'intérieur, créer un **Div Block** pour chaque card → Custom Attribute : `data-svg-hover-card` = _(valeur vide)_, `tabindex` = `0`
3. Dans chaque card :
   - Un **Div Block** `.card-img` avec une **Image**
   - Des **Div Block** avec classes `svg-stroke` / `svg-stroke-1` / `svg-stroke-2` contenant le **même markup SVG** que la démo (traits animés = `path` dans le DOM). En pratique : structure **native** (collage Xscp depuis un template) ou reconstruction à la main — **pas d’Embed HTML** si vous voulez tout en blocs + **CSS wf-lib** uniquement.
   - Un **Div Block** `.card-title` contenant un **Heading** → Custom Attribute : `data-svg-hover-title` = _(valeur vide)_

---

## bennett-clive-scroll-anim

Animation scroll typographique avec barre sticky centrale, expansion/contration des gaps par rangée, puis montée et scale du texte sur le footer.

**Démo locale** : `src/components/bennett-clive-scroll-anim/demo.html`

### Markup HTML

```html
<div data-component="bennett-clive-scroll-anim">
  <div data-bc-sticky>
    <div data-bc-item><p>Barrett</p></div>
    <div data-bc-item><p>&</p></div>
    <div data-bc-item><p>Hale</p></div>
  </div>

  <section data-bc-hero>
    <img src="./public/hero.jpg" alt="" />
  </section>

  <section data-bc-clients>
    <div data-bc-row>
      <div data-bc-logo><p>Logo 1</p></div>
      <div data-bc-logo><p>Logo 2</p></div>
    </div>
  </section>

  <section data-bc-trigger-footer>
    <img src="./public/footer.jpg" alt="" />
  </section>
</div>
```

### Attributs

| Attribut | Cible | Rôle |
|---|---|---|
| `data-component="bennett-clive-scroll-anim"` | Conteneur racine | Active le composant |
| `data-bc-sticky` | Barre sticky | Texte central blend mode |
| `data-bc-item` | Items sticky | Colonnes gauche / centre / droite |
| `data-bc-clients` | Section clients | Zone de rangées animées |
| `data-bc-row` | Rangée | Gap animé avec ScrollTrigger |
| `data-bc-logo` | Item logo | Texte de chaque logo |
| `data-bc-trigger-footer` | Section footer trigger | Déclenche montée + scale finale |

### Utilisation hors Webflow

```js
import { initBennettCliveScrollAnim } from "./bennett-clive-scroll-anim.js";

const el = document.querySelector('[data-component="bennett-clive-scroll-anim"]');
initBennettCliveScrollAnim(el);
```

```html
<link rel="stylesheet" href="./bennett-clive-scroll-anim.css" />
```

### Utilisation Webflow (CDN composant individuel)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/bennett-clive-scroll-anim/bennett-clive-scroll-anim.css" />
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/bennett-clive-scroll-anim/bennett-clive-scroll-anim.js"></script>
```

---

## three-parallax-footer

Footer avec parallax vertical + scène Three.js interactive (rotation au mouvement souris), piloté par `ScrollTrigger`.

**Démo locale** : `src/components/three-parallax-footer/demo.html`

### Markup HTML

```html
<div
  data-component="three-parallax-footer"
  data-tpf-lenis="false"
  data-tpf-model-url=""
  data-tpf-model-opacity="0.5"
  data-tpf-parallax-y="-35"
>
  <footer data-tpf-trigger>
    <div data-tpf-footer-container>
      <div data-tpf-canvas></div>
      <div data-tpf-content>...</div>
    </div>
  </footer>
</div>
```

### Attributs

| Attribut | Cible | Rôle |
|---|---|---|
| `data-component="three-parallax-footer"` | Conteneur racine | Active le composant |
| `data-tpf-trigger` | Footer (ou section cible) | Zone de progression du parallax |
| `data-tpf-footer-container` | Conteneur principal footer | Élément translaté en Y |
| `data-tpf-canvas` | Conteneur canvas | Reçoit le renderer Three.js |
| `data-tpf-model-url` | Racine composant | URL du modèle `.glb` (optionnel) |
| `data-tpf-model-opacity` | Racine composant | Opacité du canvas (défaut `0.5`) |
| `data-tpf-parallax-y` | Racine composant | Translation initiale en `%` (défaut `-35`) |
| `data-tpf-lenis` | Racine composant | Active Lenis local (`true`/`false`, défaut `false`) |

> Si `data-tpf-model-url` est vide ou invalide, un modèle Three.js de fallback est affiché automatiquement.

### Utilisation hors Webflow

```js
import { initThreeParallaxFooter } from "./three-parallax-footer.js";

const el = document.querySelector('[data-component="three-parallax-footer"]');
initThreeParallaxFooter(el);
```

```html
<link rel="stylesheet" href="./three-parallax-footer.css" />
```

### Utilisation Webflow (CDN composant individuel)

```html
<!-- Dans <head> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/three-parallax-footer/three-parallax-footer.css" />
```

```html
<!-- Avant </body> -->
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/three-parallax-footer/three-parallax-footer.js"></script>
```

#### Configurer le markup dans Webflow Designer

1. **Div Block** racine → Custom Attributes :
   - `data-component` = `three-parallax-footer`
   - `data-tpf-model-url` = URL du `.glb` hébergé (Webflow Assets ou CDN externe)
   - _(optionnel)_ `data-tpf-model-opacity` = `0.5`
   - _(optionnel)_ `data-tpf-parallax-y` = `-35`
   - _(optionnel)_ `data-tpf-lenis` = `true` si le site n'a pas déjà Lenis global
2. **Section** (ou Div Block) footer → Custom Attribute : `data-tpf-trigger` = _(valeur vide)_
3. **Div Block** conteneur footer (enfant de trigger) → `data-tpf-footer-container` = _(valeur vide)_
4. **Div Block** canvas (enfant de footer-container) → `data-tpf-canvas` = _(valeur vide)_
5. **Div Block** contenu (enfant de footer-container) → `data-tpf-content` = _(valeur vide)_
6. À l'intérieur de `data-tpf-content`, structurer librement les lignes et colonnes avec `data-tpf-row`, `data-tpf-col`, `data-tpf-sub-col`.

> Le modèle `.glb` doit être hébergé sur un domaine accessible (Webflow Assets, jsDelivr, S3, etc.). Si l'URL est vide ou le chargement échoue, un modèle 3D de fallback (torus knot) est affiché automatiquement.

---

## ova-scroll-slider

Slider piloté par le scroll : section épinglée, images et titres qui changent au fur et à mesure, indicateurs et barre de progression.

**Démo locale** : `src/components/ova-scroll-slider/demo.html`

### Markup HTML

```html
<div
  data-component="ova-scroll-slider"
  data-ova-lenis="true"
  data-ova-scrub="1"
  data-ova-slides='[{"image": "url1.jpg", "title": "Titre 1"}, {"image": "url2.jpg", "title": "Titre 2"}]'
>
  <section data-ova-intro><h1>Intro</h1></section>
  <section data-ova-slider>
    <div data-ova-images></div>
    <div data-ova-title><h1></h1></div>
    <div data-ova-indicator>
      <div data-ova-indices></div>
      <div data-ova-progress-track>
        <div data-ova-progress></div>
      </div>
    </div>
  </section>
  <section data-ova-outro><h1>Outro</h1></section>
</div>
```

**Option alternative** — slides via éléments enfants :

```html
<div data-component="ova-scroll-slider">
  <div data-ova-slide data-image="url1.jpg" data-title="Titre 1"></div>
  <div data-ova-slide data-image="url2.jpg" data-title="Titre 2"></div>
  ...
</div>
```

### Attributs

| Attribut | Cible | Rôle |
|---|---|---|
| `data-component="ova-scroll-slider"` | Conteneur racine | Active le composant |
| `data-ova-slides` | Racine | JSON des slides `[{image, title}]` |
| `data-ova-slide` | Enfant | Slide individuel (`data-image`, `data-title`) |
| `data-ova-lenis` | Racine | Active Lenis (`true`/`false`, défaut `false`) |
| `data-ova-scrub` | Racine | Scrub ScrollTrigger (défaut `1`) |
| `data-ova-intro` | Section | Bloc intro |
| `data-ova-outro` | Section | Bloc outro |
| `data-ova-slider` | Section | Zone épinglée du slider |
| `data-ova-images` | Div | Conteneur des images |
| `data-ova-title` | Div | Conteneur du titre animé |
| `data-ova-indicator` | Div | Indicateurs + barre de progression |
| `data-ova-indices` | Div | Liste des numéros de slide |
| `data-ova-progress-track` | Div | Piste de la barre |
| `data-ova-progress` | Div | Barre de progression |

### Utilisation hors Webflow

```js
import { initOvaScrollSlider } from "./ova-scroll-slider.js";
const el = document.querySelector('[data-component="ova-scroll-slider"]');
initOvaScrollSlider(el);
```

```html
<link rel="stylesheet" href="./ova-scroll-slider.css" />
```

### Utilisation Webflow (CDN composant individuel)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/ova-scroll-slider/ova-scroll-slider.css" />
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/ova-scroll-slider/ova-scroll-slider.js"></script>
```

---

## sageeast-3d-scroll

Slider 3D piloté par le scroll : cartes disposées en profondeur (axe Z), opacité et fond flouté synchronisés au défilement.

**Démo locale** : `src/components/sageeast-3d-scroll/demo.html`

### Markup HTML

```html
<div
  data-component="sageeast-3d-scroll"
  data-sg-scrub="1"
  data-sg-slides='[
    {"image": "url1.jpg", "title": "Titre 1", "index": "( ES 2023 0935 )"},
    {"image": "url2.jpg", "title": "Titre 2", "index": "( ES 2023 0936 )"}
  ]'
>
  <div data-sg-container></div>
  <div data-sg-active></div>
  <div data-sg-slider></div>
</div>
```

**Option alternative** — slides via éléments enfants :

```html
<div data-component="sageeast-3d-scroll">
  <div data-sg-container></div>
  <div data-sg-active></div>
  <div data-sg-slider></div>
  <div data-sg-slide data-image="url1.jpg" data-title="Titre 1" data-index="( ES 2023 0935 )"></div>
  <div data-sg-slide data-image="url2.jpg" data-title="Titre 2" data-index="( ES 2023 0936 )"></div>
</div>
```

> Les conteneurs `data-sg-container`, `data-sg-active`, `data-sg-slider` doivent exister (vides). Le contenu est généré par le composant.

### Attributs

| Attribut | Cible | Rôle |
|---|---|---|
| `data-component="sageeast-3d-scroll"` | Conteneur racine | Active le composant |
| `data-sg-slides` | Racine | JSON des slides `[{image, title, index}]` |
| `data-sg-slide` | Enfant | Slide (`data-image`, `data-title`, `data-index`) |
| `data-sg-scrub` | Racine | Scrub ScrollTrigger (défaut `1`) |
| `data-sg-container` | Div | Zone de scroll (hauteur auto) |
| `data-sg-active` | Div | Fond flouté (images actives) |
| `data-sg-slider` | Div | Viewport 3D des cartes |

### Utilisation hors Webflow

```js
import { initSageeast3dScroll } from "./sageeast-3d-scroll.js";
const el = document.querySelector('[data-component="sageeast-3d-scroll"]');
initSageeast3dScroll(el);
```

```html
<link rel="stylesheet" href="./sageeast-3d-scroll.css" />
```

### Utilisation Webflow (CDN composant individuel)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/sageeast-3d-scroll/sageeast-3d-scroll.css" />
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/sageeast-3d-scroll/sageeast-3d-scroll.js"></script>
```

---

## stories

Carrousel type Instagram Stories : avancement auto, curseur Prev/Next selon la position de la souris, clic pour changer de story.

**Démo locale** : `src/components/stories/demo.html`

### Markup HTML

```html
<div
  data-component="stories"
  data-stories-duration="4000"
  data-stories-cursor="true"
  data-stories='[
    {"profileImg": "url.png", "profileName": "Nom", "title": ["Ligne 1", "Ligne 2"], "linkLabel": "Lire", "linkSrc": "https://...", "storyImg": "img.jpg"}
  ]'
>
  <div data-stories-container>
    <div data-stories-cursor><p></p></div>
    <div data-stories-img></div>
    <div data-stories-content>
      <div data-stories-indices></div>
      <div data-stories-profile>
        <div data-stories-profile-icon><img src="" alt="" /></div>
        <div data-stories-profile-name></div>
      </div>
      <div data-stories-title></div>
      <a data-stories-link href="#">Lire</a>
    </div>
  </div>
</div>
```

### Attributs

| Attribut | Cible | Rôle |
|---|---|---|
| `data-component="stories"` | Conteneur racine | Active le composant |
| `data-stories` | Racine | JSON des stories `[{profileImg, profileName, title[], linkLabel, linkSrc, storyImg}]` |
| `data-stories-duration` | Racine | Durée par story en ms (défaut `4000`) |
| `data-stories-cursor` | Racine | Affiche le curseur Prev/Next (`true`/`false`, défaut `true`) |
| `data-stories-container` | Div | Zone cliquable |
| `data-stories-cursor` | Div | Curseur personnalisé |
| `data-stories-img` | Div | Conteneur des images |
| `data-stories-indices` | Div | Barres de progression |
| `data-stories-profile-icon` | Div | Avatar (img) |
| `data-stories-profile-name` | Div | Nom du profil |
| `data-stories-title` | Div | Titre (lignes) |
| `data-stories-link` | Lien | CTA |

### Utilisation hors Webflow

```js
import { initStories } from "./stories.js";
const el = document.querySelector('[data-component="stories"]');
initStories(el);
```

```html
<link rel="stylesheet" href="./stories.css" />
```

### Utilisation Webflow (CDN composant individuel)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/stories/stories.css" />
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/stories/stories.js"></script>
```

---

## reveal

Animation d'apparition au scroll (fade + translateY) sur des éléments marqués `data-reveal-item`.

**Démo locale** : `src/components/reveal/demo.html`

### Markup HTML

```html
<section
  data-component="reveal"
  data-stagger="0.08"
  data-duration="0.6"
>
  <h2 data-reveal-item>Titre</h2>
  <p data-reveal-item>Paragraphe</p>
  <a data-reveal-item href="#">CTA</a>
</section>
```

### Options

| Attribut | Défaut | Description |
|---|---|---|
| `data-duration` | `0.6` | Durée de l'animation (secondes) |
| `data-stagger` | `0.08` | Décalage entre chaque élément (secondes) |
| `data-delay` | `0` | Délai avant le début |
| `data-y` | `18` | Distance de translation verticale (px) |
| `data-ease` | `power2.out` | Easing GSAP |

---

## three-slider

Slider 3D infini WebGL (Three.js) avec distorsion dynamique au scroll, drag et swipe.

**Démo locale** : `src/components/three-slider/demo.html`

### Markup HTML

```html
<section
  data-component="three-slider"
  data-min-height="1"
  data-max-height="1.5"
  data-aspect-ratio="1.5"
  data-gap="0.05"
  data-wheel-speed="0.01"
  data-distortion-strength="2.5"
>
  <div data-three-info>
    <p data-three-title></p>
    <p data-three-count></p>
  </div>
  <canvas data-three-canvas></canvas>

  <div data-three-slide data-title="Nom slide 1" data-image="https://.../img1.jpg"></div>
  <div data-three-slide data-title="Nom slide 2" data-image="https://.../img2.jpg"></div>
  <!-- Répéter autant de slides que nécessaire -->
</section>
```

**Option alternative** — passer les slides en JSON directement sur le conteneur :

```html
<section
  data-component="three-slider"
  data-three-slides='[{"name":"Slide 1","img":"https://.../img1.jpg"},{"name":"Slide 2","img":"https://.../img2.jpg"}]'
>
  ...
</section>
```

### Attributs

| Attribut | Cible | Rôle |
|---|---|---|
| `data-component="three-slider"` | Conteneur racine | Active le composant |
| `data-three-canvas` | `<canvas>` | Canvas WebGL rendu par Three.js |
| `data-three-info` | Wrapper infos | Positionné en absolu au centre vertical |
| `data-three-title` | Élément texte | Affiche le nom de la slide active |
| `data-three-count` | Élément texte | Affiche l'index de la slide active (zero-padded) |
| `data-three-slide` | Div slide | Source d'une slide (invisible, sert de config) |

### Options (sur le conteneur)

| Attribut | Défaut | Description |
|---|---|---|
| `data-min-height` | `1` | Hauteur min des slides (unités Three.js) |
| `data-max-height` | `1.5` | Hauteur max des slides |
| `data-aspect-ratio` | `1.5` | Ratio largeur/hauteur des images |
| `data-gap` | `0.05` | Espace entre les slides |
| `data-wheel-speed` | `0.01` | Vitesse de scroll à la molette |
| `data-distortion-strength` | `2.5` | Intensité de la distorsion WebGL |

### Comportement

- **Scroll molette** — défilement avec momentum et distorsion dynamique
- **Drag souris** — curseur `grab`/`grabbing`, momentum au relâcher
- **Swipe tactile** — support complet avec momentum
- **Resize** — renderer et caméra recalculés automatiquement
- **Loop infini** — les slides se répètent sans fin dans les deux sens

---

### Utilisation hors Webflow (standalone)

**En développement local (Vite) :**

```bash
npm run dev
# Ouvrir http://localhost:5173/src/components/three-slider/demo.html
```

**Dans un projet existant (import ES module) :**

```js
import { initThreeSlider } from "./three-slider.js";

const el = document.querySelector('[data-component="three-slider"]');
initThreeSlider(el);
```

```html
<link rel="stylesheet" href="./three-slider.css" />
```

> Si utilisé via `<script type="module" src="three-slider.js">`, l'auto-init se déclenche automatiquement.

---

### Utilisation dans Webflow

#### Option A — Bundle global

Dans **Project Settings > Custom Code** :

```html
<!-- Dans <head> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/wf-lib.css" />
```

```html
<!-- Avant </body> -->
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/wf-lib.js"></script>
```

#### Option B — Composant individuel

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/three-slider/three-slider.css" />
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/three-slider/three-slider.js"></script>
```

#### Configurer le markup dans Webflow Designer

1. **Section** → Custom Attribute : `data-component` = `three-slider` + les options data voulues
2. **Div Block** à l'intérieur → `data-three-info`
   - **Text Block** → `data-three-title`
   - **Text Block** → `data-three-count`
3. **Canvas Element** (ou Embed `<canvas>`) → `data-three-canvas`
4. Pour chaque slide, un **Div Block** invisible → `data-three-slide`, `data-title` = nom, `data-image` = URL image

> Les `data-three-slide` sont invisibles visuellement (le rendu est géré par Three.js). Les masquer via `display: none` ou `visibility: hidden` dans le Designer.

---

## ascii-renderer

Rendu rétro : convertit une image en caractères ASCII avec scanlines optionnelles. Inspiré de Motion Core, adapté pour wf-lib (vanilla JS, Canvas 2D).

**Démo locale** : `src/components/ascii-renderer/demo.html`

### Markup HTML

```html
<div
  data-component="ascii-renderer"
  data-ar-cell-size="6"
  data-ar-color="#0f0"
  data-ar-scanlines="true"
>
  <div data-ar-container>
    <img data-ar-image src="chemin/vers/image.jpg" alt="" />
  </div>
</div>
```

### Attributs

| Attribut | Cible | Rôle |
|---|---|---|
| `data-component="ascii-renderer"` | Conteneur racine | Active le composant |
| `data-ar-container` | Conteneur | Zone où le canvas est inséré (définit la taille) |
| `data-ar-image` | `<img>` | Image source à convertir en ASCII |
| `data-ar-cell-size` | Racine | Taille en px d'une cellule (défaut `8`) — plus petit = plus détaillé |
| `data-ar-color` | Racine | Couleur des caractères (défaut `#0f0`) |
| `data-ar-chars` | Racine | Chaîne de caractères par densité, du plus clair au plus foncé (défaut : espace, point, apostrophe, etc. jusqu'à `$`) |
| `data-ar-scanlines` | Racine | Active les scanlines (`true`/`false`, défaut `true`) |
| `data-ar-hover-size` | Racine | Taille de la zone de distorsion au hover en % (0–80, défaut `35`) |

### Variables CSS disponibles

```css
--ar-bg: #000;              /* Fond du conteneur */
--ar-color: #0f0;           /* Couleur des caractères (fallback si data-ar-color absent) */
--ar-scanlines-opacity: 0.08; /* Opacité des lignes de scan */
```

### Comportement

- L'image est masquée (`display: none`) ; le rendu ASCII s'affiche dans le canvas
- Au chargement de l'image et au resize du conteneur, le rendu est recalculé
- **Distorsion au hover** : les caractères proches du curseur sont repoussés (effet de vague), taille réglable via `data-ar-hover-size`
- Respect de `prefers-reduced-motion` : les mouvements sont désactivés si l'utilisateur le demande
- Pour les images cross-origin, ajouter `crossorigin="anonymous"` sur le `<img>` et s'assurer que le serveur envoie les en-têtes CORS

### Utilisation hors Webflow

```js
import { initAsciiRenderer } from "./ascii-renderer.js";

const el = document.querySelector('[data-component="ascii-renderer"]');
initAsciiRenderer(el);
```

```html
<link rel="stylesheet" href="./ascii-renderer.css" />
```

### Utilisation Webflow (CDN composant individuel)

```html
<!-- Dans <head> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/ascii-renderer/ascii-renderer.css" />
```

```html
<!-- Avant </body> -->
<script type="module" src="https://cdn.jsdelivr.net/gh/alsinejb-ui/wf-lib@v1.0.0/dist/ascii-renderer/ascii-renderer.js"></script>
```

#### Configurer le markup dans Webflow Designer

1. **Div Block** racine → Custom Attributes : `data-component` = `ascii-renderer`, `data-ar-cell-size` = `6`, `data-ar-color` = `#0f0`, etc.
2. **Div Block** conteneur (définit la taille) → `data-ar-container` = _(valeur vide)_
3. **Image** (enfant du conteneur) → `data-ar-image` = _(valeur vide)_
4. Pour une image hébergée sur un autre domaine : ajouter `crossorigin="anonymous"` dans les paramètres de l'embed ou via Custom Code.

---

_Dernière mise à jour : ascii-renderer v1_
