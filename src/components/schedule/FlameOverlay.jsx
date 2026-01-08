import { useEffect, useRef } from "react";
import "../../styles/flame.css";
import FlameFX from "./FlameFX.js";

function FlameOverlay({ flameType, flameVideo, isIgniting }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const root = overlayRef.current;
    if (!root) return;

    FlameFX.start({ root, flameType, isIgniting });
    return () => FlameFX.stop(root);
  }, [flameType, isIgniting]);

  return (
    <div className={`flame-overlay flame-${flameType}`} ref={overlayRef}>
      
      {/* 🔥 Main flame video */}
      <video
        className="flame-video"
        src={flameVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔥 FX layers */}
      <div className="flame-core"></div>
      <div className="flame-glow"></div>
      <div className="flame-shimmer"></div>
      <div className="fx-embers"></div>
      <div className="fx-sparks"></div>
    </div>
  );
}

export default FlameOverlay;
