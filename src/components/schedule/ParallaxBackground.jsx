import { useState, useEffect } from "react";
import { useRootConfig } from "../../context/RootConfigContext.jsx";
import "../../styles/parallax.css";

function ParallaxBackground() {
  const { parallaxLayers, globalParallax } = useRootConfig();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="parallax-container">
      {parallaxLayers.map((layer) => {
        const depth = layer.baseDepth + globalParallax.sceneDepth * 0.05;
        const yOffset = scrollY * depth * globalParallax.scrollIntensity;

        return (
          <div
            key={layer.id}
            className="parallax-layer"
            style={{
              '--yOffset': `${yOffset}px`,
              '--scale': layer.baseScale,
              '--opacity': layer.baseOpacity,
              backgroundImage: `url(${layer.src})`,
            }}
          />
        );
      })}
    </div>
  );
}

export default ParallaxBackground;
