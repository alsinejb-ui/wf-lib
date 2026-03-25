# Motion Core Components

Composants inspirés de [Motion Core](https://motion-core.dev/), adaptés pour wf-lib en vanilla JS (HTML/CSS/JS/GSAP/Three.js).

## Composants disponibles

| Composant | Catégorie | Description |
|-----------|-----------|-------------|
| **ascii-renderer** | Canvas | Image convertie en caractères ASCII, distorsion hover |
| **dithered-image** | Canvas | Dithering Bayer/Atkinson sur image |
| **pixelated-image** | Canvas | Effet de pixelisation |
| **glass-pane** | Canvas | Effet verre/réfraction au survol (Three.js) |
| **image-trail** | Pointer | Traînée d'images qui suit le curseur |
| **magnetic** | Pointer | Boutons magnétiques qui suivent le curseur |
| **text-scramble** | Typography | Texte qui se déchiffre au scroll |
| **text-loop** | Typography | Carousel de mots en boucle |
| **marquee** | Showcase | Bandeau défilant infini (animation CSS fluide, durée, velocity, items multiples) |
| **preloader** | Transition | Barre de chargement animée |

## Démo

Chaque composant a une `demo.html` :

```
http://localhost:5173/src/components/motion-core-components/ascii-renderer/demo.html
http://localhost:5173/src/components/motion-core-components/dithered-image/demo.html
...
```

## Build

Les composants sont buildés avec le préfixe `motion-core-` :

```
dist/motion-core-ascii-renderer/
dist/motion-core-dithered-image/
...
```
