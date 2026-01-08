import { useState } from "react";
import "../../styles/schedule.css";
import { useRootConfig } from "../../context/RootConfigContext.jsx";
import { useCurrentESTTime } from "../../hooks/useCurrentESTTime.js";
import Slot from "./Slot.jsx";
import Popup from "./Popup.jsx";

function ScheduleGrid() {
  const { scheduleSlots } = useRootConfig();
  const now = useCurrentESTTime();
  const currentTime = now.toTimeString().slice(0, 5);

  const [activeSlot, setActiveSlot] = useState(null);

  const toMinutes = (t) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  };

  const nowMin = toMinutes(currentTime);

  const isSlotLive = (slot) => {
    const start = toMinutes(slot.startTime);
    const end = toMinutes(slot.endTime);
    if (end < start) return nowMin >= start || nowMin < end;
    return nowMin >= start && nowMin < end;
  };

  const row1 = scheduleSlots.filter((s) => s.row === 1);
  const row2 = scheduleSlots.filter((s) => s.row === 2);
  const row3 = scheduleSlots.filter((s) => s.row === 3);

  const renderRow = (rowSlots) => (
    <div className="schedule-row">
      {rowSlots.map((slot) => {
        const live = isSlotLive(slot);
        const isOpen = slot.type === 'zippo' && live;

        return (
          <Slot
            key={slot.id}
            slot={{ ...slot, isLive: live, isOpen }}
            currentTime={currentTime}
            onOpenPopup={() => setActiveSlot(slot)}
          />
        );
      })}
    </div>
  );

  return (
    <>
      <div className="schedule-grid">
        {renderRow(row1)}
        {renderRow(row2)}
        {renderRow(row3)}
      </div>

      {activeSlot && (
        <Popup
          slot={activeSlot}
          onClose={() => setActiveSlot(null)}
        />
      )}
    </>
  );
}

export default ScheduleGrid;
