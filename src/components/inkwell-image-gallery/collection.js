const imagePool = [
  "../elementis-scroll/public/img1.jpg",
  "../elementis-scroll/public/img2.jpg",
  "../elementis-scroll/public/img3.jpg",
  "../elementis-scroll/public/img4.jpg",
  "../elementis-scroll/public/img5.jpg",
  "../fractal-glass-effect/public/hero.jpg",
  "../fractal-glass-effect/public/hero2.jpg",
  "../fractal-glass-effect/public/hero3.jpg",
  "../fractal-glass-effect/public/hero4.jpg",
];

const titles = [
  "Shadow Profile",
  "Crimson Silhouette",
  "Wavelength",
  "Noir Figure",
  "Midnight Gaze",
  "Cobalt Contrast",
  "Half-Light",
  "Scarlet Frame",
  "Pale Vision",
  "Spectral Form",
  "Monochrome Motion",
  "Platinum Edge",
  "Electric Shade",
  "Veiled Light",
  "Luminous Dark",
  "Haze Portrait",
  "Glowing Contour",
  "Dark Elegance",
  "Ruby Accent",
  "Clear Gaze",
];

const collection = titles.map((title, index) => ({
  title,
  img: imagePool[index % imagePool.length],
}));

export default collection;
