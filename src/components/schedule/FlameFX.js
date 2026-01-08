// -----------------------------------------------------
//  FlameFX — Mythic Digital Flame Engine (Rewritten)
// -----------------------------------------------------

// Read origin settings from CSS variables
function getLighterSettings(flameType) {
  const styles = getComputedStyle(document.documentElement);

  if (flameType === "bic") {
    return {
      x: parseFloat(styles.getPropertyValue("--bic-flame-origin-x")) || 50,
      y: parseFloat(styles.getPropertyValue("--bic-flame-origin-y")) || 50,
      radius: parseFloat(styles.getPropertyValue("--bic-flame-origin-radius")) || 40,
    };
  }

  return {
    x: parseFloat(styles.getPropertyValue("--zippo-flame-origin-x")) || 50,
    y: parseFloat(styles.getPropertyValue("--zippo-flame-origin-y")) || 50,
    radius: parseFloat(styles.getPropertyValue("--zippo-flame-origin-radius")) || 40,
  };
}

const FlameFX = {
  active: new WeakMap(),

  start({ root, flameType, isIgniting }) {
    if (!root) return;

    const state = {
      root,
      flameType,
      raf: null,
      embers: [],
      sparks: [],
      lastEmberTime: 0,
      emberInterval: 120 + Math.random() * 80,
      lastSparkTime: 0,
    };

    this.active.set(root, state);

    if (isIgniting) {
      this.spawnSparks(state, 10 + Math.floor(Math.random() * 6));
    }

    const loop = () => {
      this.applyOriginPosition(state);
      this.applyFlicker(state);
      this.applyDistortion(state);
      this.updateEmbers(state);
      this.updateSparks(state);
      this.spawnEmbers(state);
      this.spawnRandomSparks(state);

      state.raf = requestAnimationFrame(loop);
    };

    loop();
  },

  stop(root) {
    const state = this.active.get(root);
    if (!state) return;

    cancelAnimationFrame(state.raf);
    state.embers.forEach(e => e.el.remove());
    state.sparks.forEach(s => s.el.remove());
    this.active.delete(root);
  },

  // -----------------------------------------------------
  // ORIGIN POSITION (moves FX layers)
  // -----------------------------------------------------
  applyOriginPosition(state) {
    const origin = getLighterSettings(state.flameType);
    const root = state.root;
    const rect = root.getBoundingClientRect();

    const px = (origin.x / 100) * rect.width;
    const py = (origin.y / 100) * rect.height;

    root.style.setProperty("--fx-origin-x", `${px}px`);
    root.style.setProperty("--fx-origin-y", `${py}px`);
  },

  // -----------------------------------------------------
  // FLICKER
  // -----------------------------------------------------
  applyFlicker(state) {
    const intensity = 0.02 + Math.random() * 0.04;
    const scale = 1 + (Math.random() * 0.04 - 0.02);

    state.root.style.setProperty("--fx-flicker-opacity", 0.85 + intensity);
    state.root.style.setProperty("--fx-flicker-scale", scale);
  },

  // -----------------------------------------------------
  // SHIMMER + TUBE
  // -----------------------------------------------------
  applyDistortion(state) {
    const shimmer = Math.random() * 0.8;
    const tube = Math.random() * 0.5;

    state.root.style.setProperty("--fx-shimmer", shimmer);
    state.root.style.setProperty("--fx-tube", tube);
  },

  // -----------------------------------------------------
  // EMBERS
  // -----------------------------------------------------
  spawnEmbers(state) {
    const now = performance.now();
    if (now - state.lastEmberTime < state.emberInterval) return;
    state.lastEmberTime = now;

    const ember = document.createElement("div");
    ember.className = "ember";

    const origin = this.randomOrigin(state.flameType);
    ember.style.left = origin.x;
    ember.style.top = origin.y;

    state.root.querySelector(".fx-embers").appendChild(ember);
    state.embers.push({ el: ember, vy: -0.3 - Math.random() * 0.4 });

    setTimeout(() => {
      ember.remove();
      state.embers = state.embers.filter(e => e.el !== ember);
    }, 2000);
  },

  updateEmbers(state) {
    state.embers.forEach(e => {
      const y = parseFloat(e.el.style.top);
      e.el.style.top = `${y + e.vy}%`;
      e.el.style.opacity = Math.max(0, parseFloat(e.el.style.opacity || 1) - 0.01);
    });
  },

  // -----------------------------------------------------
  // SPARKS
  // -----------------------------------------------------
  spawnRandomSparks(state) {
    const now = performance.now();
    if (now - state.lastSparkTime < 120 + Math.random() * 200) return;
    state.lastSparkTime = now;

    this.spawnSparks(state, 1 + Math.floor(Math.random() * 2));
  },

  spawnSparks(state, count) {
    const container = state.root.querySelector(".fx-sparks");

    for (let i = 0; i < count; i++) {
      const spark = document.createElement("div");
      spark.className = "spark";

      const origin = this.randomOrigin(state.flameType);
      spark.style.left = origin.x;
      spark.style.top = origin.y;

      const angle = (Math.random() * Math.PI) - Math.PI / 2;
      const speed = 0.4 + Math.random() * 0.6;

      state.sparks.push({ el: spark, angle, speed });
      container.appendChild(spark);

      setTimeout(() => {
        spark.remove();
        state.sparks = state.sparks.filter(s => s.el !== spark);
      }, 800);
    }
  },

  updateSparks(state) {
    state.sparks.forEach(s => {
      const x = parseFloat(s.el.style.left);
      const y = parseFloat(s.el.style.top);

      s.el.style.left = `${x + Math.cos(s.angle) * s.speed}%`;
      s.el.style.top = `${y + Math.sin(s.angle) * s.speed}%`;
      s.el.style.opacity = Math.max(0, parseFloat(s.el.style.opacity || 1) - 0.02);
    });
  },

  // -----------------------------------------------------
  // RANDOM ORIGIN (for embers + sparks)
  // -----------------------------------------------------
  randomOrigin(flameType) {
    const origin = getLighterSettings(flameType);

    const EMBER_OFFSET = 50; // px or % depending on your preferenc
    const ox = origin.x;
    const oy = origin.y;
    const radius = origin.radius;

    const r = Math.sqrt(Math.random()) * (radius * 0.1);
    const theta = Math.random() * Math.PI * 2;

    return {
      x: `${ox + r * Math.cos(theta)}%`,
      y: `${oy + r * Math.sin(theta) + EMBER_OFFSET}%`,
    };
  },
};

export default FlameFX;
