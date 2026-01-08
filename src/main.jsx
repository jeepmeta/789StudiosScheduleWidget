import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { RootConfigProvider } from "./context/RootConfigContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RootConfigProvider>
      <App />
    </RootConfigProvider>
  </BrowserRouter>
);
