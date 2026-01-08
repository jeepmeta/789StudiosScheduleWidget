import "../../styles/slot.css";
import FlameOverlay from "./FlameOverlay.jsx";
import { useRootConfig } from "../../context/RootConfigContext.jsx";

function Slot({ slot, currentTime, onOpenPopup }) {
  const { forceGramiLive, forceVibesLive } = useRootConfig();

  // Override live state if admin toggles are active
  const isLive =
    slot.isLive ||
    (forceGramiLive && slot.label === "Grami") ||
    (forceVibesLive && slot.label === "Vibes");

  const isOpen =
    slot.isOpen ||
    (forceVibesLive && slot.label === "Vibes");

  const isZippo = slot.type === "zippo";

  // Decide which lighter image to use based on type + live state
  const lighterImage = isZippo
    ? (isOpen ? slot.imageOpen : slot.imageClosed)
    : slot.image;

  // Decide which flame video to use based on lighter type
  const flameVideo =
    slot.type === "zippo"
      ? "/images/flames/zippo-flame.webm"
      : "/images/flames/bic-flame.webm";

  return (
    <div
      className={`slot slot-${slot.type} ${isLive ? "slot-live" : ""}`}
      onClick={onOpenPopup}
    >
      <div className="slot-inner">
        {/* Flame overlay only when live */}
        {isLive && (
          <FlameOverlay
            flameVideo={flameVideo}
            flameType={slot.type} // "zippo" or "bic"
          />
        )}

        {/* Lighter image */}
        <img
          className="slot-lighter"
          src={lighterImage}
          alt={slot.label}
        />
      </div>
    </div>
  );
}

export default Slot;
