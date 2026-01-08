import "../styles/schedule.css";
import ScheduleGrid from "../components/schedule/ScheduleGrid.jsx";
import ParallaxBackground from "../components/schedule/ParallaxBackground.jsx";

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
