import React from 'react';

function FlameOverlay({ type, flameVideo }) {
  return (
    <div className={`flame-overlay flame-${type}`}>
      <video
        className="flame-video"
        src={flameVideo}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}

export default FlameOverlay;
