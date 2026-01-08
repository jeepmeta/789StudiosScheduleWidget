export const rootVariables = {
  /* -------------------------------------------------------
     SCHEDULE + GRID
  ------------------------------------------------------- */
  '--schedule-max-width': '1400px',
  '--slot-min-size': '180px',
  '--slot-gap': '20px',
  '--row-gap': '32px',

  '--slot-pad-vertical': 'calc(var(--slot-min-size) * 0.2)',
  '--slot-pad-horizontal': 'calc(var(--slot-min-size) * 0.1)',

  /* -------------------------------------------------------
     POPUP
  ------------------------------------------------------- */
  '--popup-max-width': 'calc(var(--schedule-max-width) * 0.8)',

  /* -------------------------------------------------------
     PARALLAX
  ------------------------------------------------------- */
  '--parallax-depth': '50',      // unitless
  '--parallax-drift': '0.5',     // unitless

  /* -------------------------------------------------------
     FLAME FX (global)
  ------------------------------------------------------- */
  '--flame-origin-x': '50%',
  '--flame-origin-y': '50%',
  '--flame-origin-radius': '40px',
  '--flame-opacity': '0.95',

  '--ember-density': '1',
  '--spark-intensity': '1',
  '--shimmer-strength': '1',
  '--tube-distortion': '1',

  '--fx-flicker-opacity': '1',
  '--fx-flicker-scale': '1',
  '--fx-shimmer': '0',
  '--fx-tube': '0',

  '--spark-angle': '0',
  '--spark-speed': '0',

  /* -------------------------------------------------------
     FLAME ORIGINS (per lighter type)
  ------------------------------------------------------- */
  '--bic-flame-origin-x': '50',        // unitless
  '--bic-flame-origin-y': '50',        // unitless
  '--bic-flame-origin-radius': '40',   // px added by context

  '--zippo-flame-origin-x': '50',      // unitless
  '--zippo-flame-origin-y': '50',      // unitless
  '--zippo-flame-origin-radius': '40', // px added by context

  /* -------------------------------------------------------
     LIVE GLOW
  ------------------------------------------------------- */
  '--live-glow-size': 'calc(var(--slot-min-size) * 0.06)',
  '--live-glow-intensity': '0.2',
  '--live-glow-color-inner': 'rgba(246, 255, 0, 0.6)',
  '--live-glow-color-outer': 'rgba(255, 94, 0, 0.4)',
  '--live-glow-blur': 'calc(var(--slot-min-size) * 0.03)',
  '--live-glow-pulse-speed': '3s',

  /* -------------------------------------------------------
     ADMIN SIDEBAR + UI
  ------------------------------------------------------- */
  '--admin-sidebar-width': '320px',

  '--panel-bg': '#1c1c1c',
  '--panel-border': '#333',

  '--radius': '8px',

  '--text-light': '#eee',
  '--text-dim': '#aaa',

  '--accent': '#ff9900',
  '--accent-glow': 'rgba(255, 157, 60, 0.4)',

  '--input-bg': '#2a2a2a',
  '--input-border': '#444',
  '--input-focus': '#ff9900',
};

export const scheduleSlots = [
  {
    id: 1,
    row: 1,
    host: "Grami",
    label: "Grami",
    type: "bic",
    startTime: "06:00",
    endTime: "07:00",
    xUrl: "https://x.com/gramixmeta",
    siteUrl: "https://signature.dog/gramixmeta",
    image: "/images/bics/Grami.png",
    summaryImage: "/images/summaries/Grami.png",
  },
  {
    id: 2,
    row: 1,
    host: "Leah",
    label: "Leah",
    type: "bic",
    startTime: "06:00",
    endTime: "07:00",
    xUrl: "https://x.com/leahbluewater",
    siteUrl: "https://leahbluewater.com",
    image: "/images/bics/Leah.png",
    summaryImage: "/images/summaries/Leah.png",
  },
  {
    id: 3,
    row: 1,
    host: "Shibo",
    label: "Shibo",
    type: "bic",
    startTime: "10:00",
    endTime: "12:00",
    xUrl: "https://x.com/godsburnt",
    siteUrl: "https://doginaldogs.com",
    image: "/images/bics/Shibo.png",
    summaryImage: "/images/summaries/Shibo.png",
  },
  {
    id: 4,
    row: 1,
    host: "Paws",
    label: "Paws",
    type: "bic",
    startTime: "13:00",
    endTime: "15:00",
    xUrl: "https://x.com/pawsmeta",
    siteUrl: "https://pawsmeta.io",
    image: "/images/bics/Paws.png",
    summaryImage: "/images/summaries/Paws.png",
  },
  {
    id: 5,
    row: 1,
    host: "Shield",
    label: "Shield",
    type: "bic",
    startTime: "14:00",
    endTime: "15:00",
    xUrl: "https://x.com/shieldmetax",
    siteUrl: "https://shieldmeta.io",
    image: "/images/bics/Shield.png",
    summaryImage: "/images/summaries/Shield.png",
  },
  {
    id: 6,
    row: 1,
    host: "Anthem",
    label: "Anthem",
    type: "bic",
    startTime: "15:00",
    endTime: "16:00",
    xUrl: "https://x.com/anthemhayek",
    siteUrl: "https://linktr.ee/anthemhayek",
    image: "/images/bics/Anthem.png",
    summaryImage: "/images/summaries/Anthem.png",
  },
  {
    id: 7,
    row: 1,
    host: "Bark",
    label: "Bark",
    type: "bic",
    startTime: "17:00",
    endTime: "19:00",
    xUrl: "https://x.com/barkmeta",
    siteUrl: "https://doginaldogs.com",
    image: "/images/bics/Bark.png",
    summaryImage: "/images/summaries/Bark.png",
  },

  {
    id: 8,
    row: 2,
    host: "Vibes",
    label: "Vibes",
    type: "zippo",
    startTime: "19:00",
    endTime: "20:00",
    xUrl: "https://x.com/vibesmetax",
    siteUrl: "https://789studios.com",
    imageClosed: "/images/zippos/Vibes-closed.png",
    imageOpen: "/images/zippos/Vibes-open.png",
    summaryImage: "/images/summaries/Vibes.png",
  },
  {
    id: 9,
    row: 2,
    host: "Wooki",
    label: "Wooki",
    type: "zippo",
    startTime: "20:00",
    endTime: "21:00",
    xUrl: "https://x.com/wookimeta",
    siteUrl: "https://wookisworld.com",
    imageClosed: "/images/zippos/Wooki-closed.png",
    imageOpen: "/images/zippos/Wooki-open.png",
    summaryImage: "/images/summaries/Wooki.png",
  },
  {
    id: 10,
    row: 2,
    host: "Gator",
    label: "Gator",
    type: "zippo",
    startTime: "21:00",
    endTime: "22:00",
    xUrl: "https://x.com/gatormetax",
    siteUrl: "https://caffeineandcrypto.com",
    imageClosed: "/images/zippos/Gator-closed.png",
    imageOpen: "/images/zippos/Gator-open.png",
    summaryImage: "/images/summaries/Gator.png",
  },

  {
    id: 11,
    row: 3,
    host: "Sauce",
    label: "Sauce",
    type: "bic",
    startTime: "22:00",
    endTime: "23:00",
    xUrl: "https://x.com/crypto_sauce",
    siteUrl: "https://signature.dog/crypto_sauce",
    image: "/images/bics/Sauce.png",
    summaryImage: "/images/summaries/Sauce.png",
  },
  {
    id: 12,
    row: 3,
    host: "Dream",
    label: "Dream",
    type: "bic",
    startTime: "23:00",
    endTime: "00:30",
    xUrl: "https://x.com/dreammetax",
    siteUrl: "https://dreammetax.com",
    image: "/images/bics/Dream.png",
    summaryImage: "/images/summaries/Dream.png",
  },
  {
    id: 13,
    row: 3,
    host: "Grow",
    label: "Grow",
    type: "bic",
    startTime: "00:00",
    endTime: "01:00",
    xUrl: "https://x.com/growxmeta",
    siteUrl: "https://growshows.com",
    image: "/images/bics/Grow.png",
    summaryImage: "/images/summaries/Grow.png",
  },
  {
    id: 14,
    row: 3,
    host: "Neuro",
    label: "Neuro",
    type: "bic",
    startTime: "01:00",
    endTime: "02:00",
    xUrl: "https://x.com/neurometax",
    siteUrl: "https://chirp.me/neurometa",
    image: "/images/bics/Neuro.png",
    summaryImage: "/images/summaries/Neuro.png",
  },
  {
    id: 15,
    row: 3,
    host: "Artsy",
    label: "Artsy",
    type: "bic",
    startTime: "02:00",
    endTime: "03:00",
    xUrl: "https://x.com/artsymeta",
    siteUrl: "https://artsymeta.com",
    image: "/images/bics/Artsy.png",
    summaryImage: "/images/summaries/Artsy.png",
  },
  {
    id: 16,
    row: 3,
    host: "Truck",
    label: "Truck",
    type: "bic",
    startTime: "03:00",
    endTime: "04:00",
    xUrl: "https://x.com/truckmeta",
    siteUrl: "https://truckmetax.com",
    image: "/images/bics/Truck.png",
    summaryImage: "/images/summaries/Truck.png",
  },
];

export const parallaxLayers = [
  {
    id: 1,
    src: "/images/parallax/parallax1.png",
    baseDepth: 0.1,
    baseScale: 1,
    baseOpacity: 1,
  },
  {
    id: 2,
    src: "/images/parallax/parallax2.png",
    baseDepth: 0.2,
    baseScale: 1.1,
    baseOpacity: 0.9,
  },
  {
    id: 3,
    src: "/images/parallax/parallax3.png",
    baseDepth: 0.3,
    baseScale: 1.2,
    baseOpacity: 0.8,
  },
  {
    id: 4,
    src: "/images/parallax/parallax4.png",
    baseDepth: 0.3,
    baseScale: 1.2,
    baseOpacity: 0.8,
  },
  {
    id: 5,
    src: "/images/parallax/parallax5.png",
    baseDepth: 0.3,
    baseScale: 1.2,
    baseOpacity: 0.8,
  },
];

export const globalParallax = {
  sceneDepth: 1,
  scrollIntensity: 0.25,
};
