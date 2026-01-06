import React, { useState } from 'react';
import FlameOverlay from './FlameOverlay.js';
import Popup from './Popup.jsx';

function Slot({ slot, currentTime }) {
  const [showPopup, setShowPopup] = useState(false);

  // Placeholder: later, determine live based on start/end vs currentTime.
  const isLive = false;

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const isZippo = slot.type === 'zippo';

  return (
    <div className={`slot slot-${slot.type} ${isLive ? 'slot-live' : ''}`} onClick={handleClick}>
      <div className="slot-inner">
        {isLive && (
          <FlameOverlay
            type={slot.type}
            flameVideo={slot.flameVideo}
          />
        )}

        <img
          className="slot-lighter"
          src={slot.lighterImage}
          alt={slot.label}
        />
      </div>

      {showPopup && (
        <Popup
          slot={slot}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

export default Slot;
