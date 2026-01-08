import { Routes, Route, Navigate } from "react-router-dom";
import AdminView from "./pages/AdminView.jsx";
import ScheduleView from "./pages/ScheduleView.jsx";

const enableAdmin = import.meta.env.VITE_ENABLE_ADMIN === "true";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ScheduleView />} />
      {enableAdmin && <Route path="/admin" element={<AdminView />} />}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
