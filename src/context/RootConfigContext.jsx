import { createContext, useContext, useState, useEffect, useMemo } from "react";
import {
  rootVariables,
  scheduleSlots,
  parallaxLayers,
  globalParallax
} from "../config/rootVariables.js";

const RootConfigContext = createContext();

const variableUnits = {
  "--slot-min-size": "px",
  "--slot-gap": "px",
  "--row-gap": "px",
  "--schedule-max-width": "px",
  "--popup-max-width": "px",
  "--live-glow-size": "px",
  "--live-glow-blur": "px",
  "--bic-flame-origin-radius": "px",
  "--zippo-flame-origin-radius": "px",
};

export function RootConfigProvider({ children }) {
  const [variables, setVariables] = useState(() => {
    const saved = localStorage.getItem("rootVariables");
    return saved ? JSON.parse(saved) : rootVariables;
  });

  // 🔥 NEW: Force-live toggles
  const [forceGramiLive, setForceGramiLive] = useState(false);
  const [forceVibesLive, setForceVibesLive] = useState(false);

  useEffect(() => {
    Object.entries(variables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [variables]);

  const updateVariable = (key, value) => {
    const unit = variableUnits[key] || "";
    const finalValue = unit ? `${value}${unit}` : value;

    const updated = { ...variables, [key]: finalValue };
    setVariables(updated);
    localStorage.setItem("rootVariables", JSON.stringify(updated));
  };

  const resetVariables = () => {
    setVariables(rootVariables);
    localStorage.setItem("rootVariables", JSON.stringify(rootVariables));
  };

  const value = useMemo(
    () => ({
      variables,
      updateVariable,
      resetVariables,
      scheduleSlots,
      parallaxLayers,
      globalParallax,

      // 🔥 expose toggles globally
      forceGramiLive,
      setForceGramiLive,
      forceVibesLive,
      setForceVibesLive,
    }),
    [variables, forceGramiLive, forceVibesLive]
  );

  return (
    <RootConfigContext.Provider value={value}>
      {children}
    </RootConfigContext.Provider>
  );
}

export function useRootConfig() {
  return useContext(RootConfigContext);
}
