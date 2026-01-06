import React from 'react';
import ScheduleGrid from '../schedule/ScheduleGrid.js';
import ParallaxBackground from '../schedule/ParallaxBackground.js';

function Preview() {
  return (
    <div className="admin-preview">
      <ParallaxBackground />
      <div className="admin-preview-inner">
        <ScheduleGrid />
      </div>
    </div>
  );
}

export default Preview;
