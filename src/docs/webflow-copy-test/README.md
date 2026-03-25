# Test « Copy to Webflow » (Xscp)

## Lancer

```bash
npm run dev
```

Ouvrir : [http://localhost:5173/src/docs/webflow-copy-test/index.html](http://localhost:5173/src/docs/webflow-copy-test/index.html)

## À vérifier

1. **Round-trip fiable** : dans le Designer, copier un élément → coller dans la zone de texte → **Copier pour le Designer** → dans le Designer, coller sur le canvas. C’est le flux de référence.
2. **Échantillon minimal** : vérifie seulement que la copie programme bien le JSON ; le collage dans Webflow peut échouer si le format interne est incomplet.

## Dépendance

[`webflow-clipboard`](https://github.com/bejamas/webflow-clipboard) (devDependency du projet).
