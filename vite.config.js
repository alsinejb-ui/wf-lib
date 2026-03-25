import { resolve } from "node:path";
import { defineConfig } from "vite";

// Dev multi-page : Vite sert tous les fichiers HTML accessibles depuis la racine.
// Accéder aux démos via :
//   http://localhost:5173/src/components/reveal/demo.html
//   http://localhost:5173/src/components/svg-image-hover/demo.html
//   http://localhost:5173/src/components/three-slider/demo.html
//   http://localhost:5173/src/components/bennett-clive-scroll-anim/demo.html (data-component="bennett-clive-scroll-anim")
//   http://localhost:5173/src/components/three-parallax-footer/demo.html (data-component="three-parallax-footer")
//   http://localhost:5173/src/components/ova-scroll-slider/demo.html (data-component="ova-scroll-slider")
//   http://localhost:5173/src/components/sageeast-3d-scroll/demo.html (data-component="sageeast-3d-scroll")
//   http://localhost:5173/src/components/stories/demo.html
//   http://localhost:5173/src/components/telescope-img-scroll/demo.html (data-component="telescope-img-scroll")
//   http://localhost:5173/src/components/telescope-scroll/demo.html (data-component="telescope-scroll")
//   http://localhost:5173/src/components/elementis-scroll/demo.html (data-component="elementis-scroll") (data-component="stories")
//   http://localhost:5173/src/docs/webflow-copy-test/index.html — test presse-papiers Xscp / Copy to Webflow
//   http://localhost:5173/src/components/svg-image-hover/doc.html — page doc (test)

export default defineConfig({
  build: {
    // Bundle global : dist/wf-lib.js + dist/wf-lib.css
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "WFLib",
      formats: ["es"],
      fileName: () => "wf-lib.js",
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) return "wf-lib.css";
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
