import React from 'react';

function Popup({ slot, onClose }) {
  const handleClick = () => {
    if (slot.linkUrl) {
      window.open(slot.linkUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="popup-backdrop" onClick={onClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          ×
        </button>
        <div className="popup-content" onClick={handleClick}>
          {slot.summaryImage && (
            <img
              src={slot.summaryImage}
              alt={slot.label}
              className="popup-summary-image"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;
