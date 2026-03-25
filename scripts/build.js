/**
 * Build individuel par composant.
 * Produit dist/<name>/<name>.js + dist/<name>/<name>.css pour chaque composant.
 * Usage : node scripts/build.js
 */

import { build } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(__dirname, "..");

const components = [
  { id: "reveal", sourceDir: "reveal" },
  { id: "svg-image-hover", sourceDir: "svg-image-hover" },
  { id: "three-slider", sourceDir: "three-slider" },
  {
    id: "bennett-clive-scroll-anim",
    sourceDir: "bennett-clive-scroll-anim",
  },
  {
    id: "three-parallax-footer",
    sourceDir: "three-parallax-footer",
  },
  {
    id: "ova-scroll-slider",
    sourceDir: "ova-scroll-slider",
  },
  {
    id: "sageeast-3d-scroll",
    sourceDir: "sageeast-3d-scroll",
  },
  {
    id: "stories",
    sourceDir: "stories",
  },
  {
    id: "ascii-renderer",
    sourceDir: "ascii-renderer",
  },
  // Motion Core Components (inspirés de motion-core.dev)
  {
    id: "motion-core-ascii-renderer",
    sourceDir: "motion-core-components/ascii-renderer",
  },
  {
    id: "motion-core-dithered-image",
    sourceDir: "motion-core-components/dithered-image",
  },
  {
    id: "motion-core-pixelated-image",
    sourceDir: "motion-core-components/pixelated-image",
  },
  {
    id: "motion-core-glass-pane",
    sourceDir: "motion-core-components/glass-pane",
  },
  {
    id: "motion-core-image-trail",
    sourceDir: "motion-core-components/image-trail",
  },
  {
    id: "motion-core-magnetic",
    sourceDir: "motion-core-components/magnetic",
  },
  {
    id: "motion-core-text-scramble",
    sourceDir: "motion-core-components/text-scramble",
  },
  {
    id: "motion-core-text-loop",
    sourceDir: "motion-core-components/text-loop",
  },
  {
    id: "motion-core-marquee",
    sourceDir: "motion-core-components/marquee",
  },
  {
    id: "motion-core-preloader",
    sourceDir: "motion-core-components/preloader",
  },
  {
    id: "cg-infinite-horizontal-slider",
    sourceDir: "cg-infinite-horizontal-slider",
  },
  {
    id: "smooothy-parallax-slider",
    sourceDir: "smooothy-parallax-slider",
  },
];

for (const component of components) {
  const { id, sourceDir } = component;
  const entryName = sourceDir.split("/").pop();
  console.log(`\nBuilding ${id}...`);

  await build({
    configFile: false,
    root,
    build: {
      outDir: resolve(root, `dist/${id}`),
      emptyOutDir: true,
      cssCodeSplit: false,
      lib: {
        entry: resolve(root, `src/components/${sourceDir}/${entryName}.js`),
        name: toPascalCase(id),
        formats: ["es"],
        fileName: () => `${id}.js`,
      },
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith(".css")) return `${id}.css`;
            return `assets/[name]-[hash][extname]`;
          },
        },
      },
    },
  });

  console.log(`  ✓ dist/${id}/${id}.js`);
  console.log(`  ✓ dist/${id}/${id}.css`);
}

console.log("\nBuild composants terminé.");

function toPascalCase(str) {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}
