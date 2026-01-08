import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { RootConfigProvider } from "./context/RootConfigContext.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <RootConfigProvider>
      <App />
    </RootConfigProvider>
  </HashRouter>
);
