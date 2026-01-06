// Visual tuning for lighters, flames, and parallax layers.

export const lighterSettings = {
  // default offsets applied to all lighters (per-type overrides later)
  bic: {
    xOffset: 0,
    yOffset: 0,
    scale: 1,
    opacity: 1,
    saturation: 1,
  },
  zippo: {
    xOffset: 0,
    yOffset: 0,
    scale: 1,
    opacity: 1,
    saturation: 1,
  },
};

export const flameSettings = {
  bic: {
    xOffset: 0,
    yOffset: 0,
    scale: 1,
    opacity: 1,
  },
  zippo: {
    xOffset: 0,
    yOffset: 0,
    scale: 1,
    opacity: 1,
  },
};

export const parallaxLayers = [
  {
    id: 1,
    src: '/images/parallax/parallax1.png',
    baseDepth: 0.1,
    baseOpacity: 1,
    baseBrightness: 1,
    baseScale: 1,
  },
  {
    id: 2,
    src: '/images/parallax/parallax2.png',
    baseDepth: 0.2,
    baseOpacity: 1,
    baseBrightness: 1,
    baseScale: 1,
  },
  {
    id: 3,
    src: '/images/parallax/parallax3.png',
    baseDepth: 0.3,
    baseOpacity: 1,
    baseBrightness: 1,
    baseScale: 1,
  },
  {
    id: 4,
    src: '/images/parallax/parallax4.png',
    baseDepth: 0.4,
    baseOpacity: 1,
    baseBrightness: 1,
    baseScale: 1,
  },
  {
    id: 5,
    src: '/images/parallax/parallax5.png',
    baseDepth: 0.5,
    baseOpacity: 1,
    baseBrightness: 1,
    baseScale: 1,
  },
];

export const globalParallax = {
  sceneDepth: 0,        // “push the world back” slider
  scrollIntensity: 0.3, // vertical drift strength
};
