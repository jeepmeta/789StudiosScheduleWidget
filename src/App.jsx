import { useState, useEffect } from "react";
import "./styles/globals.css";
import "./styles/parallax.css";
import "./styles/schedule.css";
import "./styles/slot.css";
import "./styles/popup.css";
import AppRouter from "./router.jsx";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar.jsx";

function App() {
  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        setAdminOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {adminOpen && <AdminSidebar />}

      <button
        className="admin-toggle"
        onClick={() => setAdminOpen((prev) => !prev)}
      >
        {adminOpen ? "Close Admin" : "Admin"}
      </button>

      <AppRouter />
    </>
  );
}

export default App;
