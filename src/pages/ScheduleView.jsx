import React from 'react';
import ScheduleGrid from '../components/schedule/ScheduleGrid.jsx';
import ParallaxBackground from '../components/schedule/ParallaxBackground.jsx';
import '../styles/schedule.css';

function ScheduleView() {
  return (
    <div className="app-root schedule-root">
      <ParallaxBackground />
      <div className="schedule-content">
        <ScheduleGrid />
      </div>
    </div>
  );
}

export default ScheduleView;
