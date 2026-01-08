import { useEffect, useRef } from "react";
import "../../styles/popup.css";

function Popup({ slot, onClose }) {
  const backdropRef = useRef(null);

  // ---------------------------------------------
  // URL SHORTENER (Option 2: domain + first path)
  // ---------------------------------------------
  const shortenUrl = (url) => {
    try {
      const u = new URL(url);
      const domain = u.hostname.replace("www.", "");
      const path = u.pathname.split("/").filter(Boolean)[0];
      return path ? `${domain}/${path}` : domain;
    } catch {
      return url;
    }
  };

  const handleClose = () => {
    const backdrop = backdropRef.current;
    if (!backdrop) return;
    backdrop.classList.add("closing");
    setTimeout(() => onClose(), 180);
  };

  // ESC key closes popup
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Swipe down to close
  useEffect(() => {
    let startY = 0;
    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      if (endY - startY > 80) handleClose();
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="popup-backdrop" ref={backdropRef} onClick={handleClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>

        {/* Close button */}
        <button className="popup-x" onClick={handleClose}>✕</button>

        {/* Summary image (click → X profile) */}
        {slot.summaryImage && (
          <div
            className="popup-image-wrapper"
            onClick={() => slot.xUrl && window.open(slot.xUrl, "_blank")}
            style={{ cursor: slot.xUrl ? "pointer" : "default" }}
          >
            <img
              src={slot.summaryImage}
              alt={slot.label}
              className="popup-image"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="popup-buttons">
          {slot.xUrl && (
            <button
              className="popup-btn"
              onClick={() => window.open(slot.xUrl, "_blank")}
            >
              {shortenUrl(slot.xUrl)}
            </button>
          )}

          {slot.siteUrl && (
            <button
              className="popup-btn"
              onClick={() => window.open(slot.siteUrl, "_blank")}
            >
              {shortenUrl(slot.siteUrl)}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default Popup;
