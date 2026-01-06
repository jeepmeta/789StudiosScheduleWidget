import React, { useEffect, useState } from 'react';
import { useConfig } from '../../hooks/useConfig.js';

function ParallaxBackground() {
  const { parallaxLayers, globalParallax } = useConfig();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="parallax-root">
      {parallaxLayers.map((layer) => {
        // Placeholder math; we’ll refine later with depth + global controls
        const depth = layer.baseDepth + globalParallax.sceneDepth * 0.05;
        const yOffset = scrollY * depth * globalParallax.scrollIntensity;

        const style = {
          transform: `translate3d(0, ${yOffset}px, 0) scale(${layer.baseScale})`,
          opacity: layer.baseOpacity,
        };

        return (
          <div
            key={layer.id}
            className="parallax-layer"
            style={style}
          >
            <img src={layer.src} alt={`Parallax layer ${layer.id}`} />
          </div>
        );
      })}
    </div>
  );
}

export default ParallaxBackground;
