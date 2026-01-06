import React from 'react';
import { useConfig } from '../../hooks/useConfig.js';
import { useCurrentESTTime } from '../../hooks/useCurrentESTTime.js';
import Slot from './Slot.jsx';

function ScheduleGrid() {
  const { scheduleSlots } = useConfig();
  const now = useCurrentESTTime();

  // Placeholder: later we’ll calculate live slot based on EST and 6am–6am logic.
  const currentTime = now.toTimeString().slice(0, 5);

  return (
    <div className="schedule-grid">
      {scheduleSlots.map((slot) => (
        <Slot
          key={slot.id}
          slot={slot}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
}

export default ScheduleGrid;
