import { useState, useRef, useEffect } from "react";
import "../../styles/admin-sidebar.css";
import { useRootConfig } from "../../context/RootConfigContext.jsx";

/* -------------------------------------------------------
   COLOR INPUT COMPONENT
------------------------------------------------------- */
function ColorInput({ label, value, onChange }) {
  const [showHex, setShowHex] = useState(false);

  return (
    <div className="admin-input color-swatch">
      <label>{label}</label>

      <div
        className="color-swatch-box"
        onClick={() => setShowHex((prev) => !prev)}
      >
        <div
          className="color-swatch-fill"
          style={{ backgroundColor: value }}
        />
      </div>

      {showHex && (
        <input
          type="text"
          className="hex-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ display: "none" }}
      />
    </div>
  );
}

/* -------------------------------------------------------
   COLLAPSIBLE SECTION COMPONENT
------------------------------------------------------- */
function Section({ title, isOpen, onToggle, children }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      const scrollHeight = bodyRef.current?.scrollHeight || 0;
      setHeight(scrollHeight + "px");
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="admin-section">
      <h3 className="admin-section-header" onClick={onToggle}>
        {title}
        <span className="admin-section-toggle">{isOpen ? "▼" : "▶"}</span>
      </h3>

      <div
        className="admin-section-body animating"
        ref={bodyRef}
        style={{
          maxHeight: height,
          opacity: isOpen ? 1 : 0,
          overflow: "hidden"
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   MAIN SIDEBAR COMPONENT
------------------------------------------------------- */
export default function AdminSidebar() {
  const {
    variables,
    updateVariable,
    forceGramiLive,
    setForceGramiLive,
    forceVibesLive,
    setForceVibesLive
  } = useRootConfig();

  const labels = {
    "--slot-min-size": "Slot Size",
    "--slot-gap": "Slot Gap",
    "--row-gap": "Row Gap",
    "--schedule-max-width": "Max Schedule Width",

    "--popup-max-width": "Popup Max Width",

    "--parallax-depth": "Parallax Depth",
    "--parallax-drift": "Parallax Drift",

    "--flame-opacity": "Flame Opacity",
    "--ember-density": "Ember Density",
    "--spark-intensity": "Spark Intensity",
    "--shimmer-strength": "Shimmer Strength",
    "--tube-distortion": "Tube Distortion",

    "--fx-flicker-opacity": "Flicker Opacity",
    "--fx-flicker-scale": "Flicker Scale",
    "--fx-shimmer": "Shimmer",
    "--fx-tube": "Tube Effect",

    "--spark-angle": "Spark Angle",
    "--spark-speed": "Spark Speed",

    "--bic-flame-origin-x": "BIC Origin X",
    "--bic-flame-origin-y": "BIC Origin Y",
    "--bic-flame-origin-radius": "BIC Radius",

    "--zippo-flame-origin-x": "ZIPPO Origin X",
    "--zippo-flame-origin-y": "ZIPPO Origin Y",
    "--zippo-flame-origin-radius": "ZIPPO Radius",

    "--live-glow-intensity": "Glow Intensity",
    "--live-glow-size": "Glow Size",
    "--live-glow-blur": "Glow Blur",
    "--live-glow-pulse-speed": "Glow Pulse Speed",
    "--live-glow-color-inner": "Inner Glow Color",
    "--live-glow-color-outer": "Outer Glow Color",

    "--panel-bg": "Panel Background",
    "--panel-border": "Panel Border",
    "--accent": "Accent Color",
    "--accent-glow": "Accent Glow",
    "--text-light": "Light Text",
    "--text-dim": "Dim Text",
    "--input-bg": "Input Background",
    "--input-border": "Input Border",
    "--input-focus": "Input Focus",
    "--admin-sidebar-width": "Sidebar Width",
  };

  const sectionNames = [
    "Schedule Layout",
    "Popup",
    "Parallax",
    "Flame FX",
    "BIC Flame Origin",
    "ZIPPO Flame Origin",
    "Live Glow",
    "UI Theme",
  ];

  const [openSections, setOpenSections] = useState(
    Object.fromEntries(sectionNames.map((name) => [name, false]))
  );

  const expandAll = () =>
    setOpenSections(Object.fromEntries(sectionNames.map((n) => [n, true])));

  const collapseAll = () =>
    setOpenSections(Object.fromEntries(sectionNames.map((n) => [n, false])));

  const toggleSection = (title) =>
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));

  const handleChange = (key, value) => updateVariable(key, value);

  const slider = (key, min, max, step = 1) => (
    <div className="admin-input control-slider">
      <label>{labels[key]}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={parseFloat(variables[key]) || 0}
        onChange={(e) => handleChange(key, e.target.value)}
      />
    </div>
  );

  const textInput = (key) => (
    <div className="admin-input">
      <label>{labels[key]}</label>
      <input
        type="text"
        value={variables[key]}
        onChange={(e) => handleChange(key, e.target.value)}
      />
    </div>
  );

  const numberInput = (key) => (
    <div className="admin-input">
      <label>{labels[key]}</label>
      <input
        type="number"
        value={variables[key]}
        onChange={(e) => handleChange(key, e.target.value)}
      />
    </div>
  );

  const colorInputWrapper = (key) => (
    <ColorInput
      label={labels[key]}
      value={variables[key]}
      onChange={(val) => handleChange(key, val)}
    />
  );

  return (
    <div className="admin-sidebar">

      {/* Expand / Collapse All */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button className="admin-button" onClick={expandAll}>Expand All</button>
        <button className="admin-button" onClick={collapseAll}>Collapse All</button>
      </div>

      {/* Force Live Toggles */}
      <div className="admin-input" style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="checkbox"
            checked={forceGramiLive}
            onChange={(e) => setForceGramiLive(e.target.checked)}
          />
          Force Grami Live (BIC #1)
        </label>
      </div>

      <div className="admin-input" style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="checkbox"
            checked={forceVibesLive}
            onChange={(e) => setForceVibesLive(e.target.checked)}
          />
          Force Vibes Live (ZIPPO #1)
        </label>
      </div>

      {/* -------------------- SECTIONS -------------------- */}

      <Section
        title="Schedule Layout"
        isOpen={openSections["Schedule Layout"]}
        onToggle={() => toggleSection("Schedule Layout")}
      >
        {slider("--slot-min-size", 50, 300)}
        {slider("--slot-gap", 0, 60)}
        {slider("--row-gap", 0, 80)}
        {textInput("--schedule-max-width")}
      </Section>

      <Section
        title="Popup"
        isOpen={openSections["Popup"]}
        onToggle={() => toggleSection("Popup")}
      >
        {textInput("--popup-max-width")}
      </Section>

      <Section
        title="Parallax"
        isOpen={openSections["Parallax"]}
        onToggle={() => toggleSection("Parallax")}
      >
        {slider("--parallax-depth", 0, 200)}
        {slider("--parallax-drift", 0, 2, 0.01)}
      </Section>

      <Section
        title="Flame FX"
        isOpen={openSections["Flame FX"]}
        onToggle={() => toggleSection("Flame FX")}
      >
        {slider("--flame-opacity", 0, 1, 0.01)}
        {slider("--ember-density", 0, 5, 0.1)}
        {slider("--spark-intensity", 0, 5, 0.1)}
        {slider("--shimmer-strength", 0, 5, 0.1)}
        {slider("--tube-distortion", 0, 5, 0.1)}

        {slider("--fx-flicker-opacity", 0, 2, 0.01)}
        {slider("--fx-flicker-scale", 0.5, 2, 0.01)}
        {slider("--fx-shimmer", 0, 5, 0.1)}
        {slider("--fx-tube", 0, 5, 0.1)}

        {slider("--spark-angle", 0, 360)}
        {slider("--spark-speed", 0, 20)}
      </Section>

      <Section
        title="BIC Flame Origin"
        isOpen={openSections["BIC Flame Origin"]}
        onToggle={() => toggleSection("BIC Flame Origin")}
      >
        {slider("--bic-flame-origin-x", 0, 100)}
        {slider("--bic-flame-origin-y", 0, 100)}
        {slider("--bic-flame-origin-radius", 0, 200)}
      </Section>

      <Section
        title="ZIPPO Flame Origin"
        isOpen={openSections["ZIPPO Flame Origin"]}
        onToggle={() => toggleSection("ZIPPO Flame Origin")}
      >
        {slider("--zippo-flame-origin-x", 0, 100)}
        {slider("--zippo-flame-origin-y", 0, 100)}
        {slider("--zippo-flame-origin-radius", 0, 200)}
      </Section>

      <Section
        title="Live Glow"
        isOpen={openSections["Live Glow"]}
        onToggle={() => toggleSection("Live Glow")}
      >
        {slider("--live-glow-intensity", 0, 2, 0.01)}
        {slider("--live-glow-size", 0, 40)}
        {slider("--live-glow-blur", 0, 40)}
        {textInput("--live-glow-pulse-speed")}
        {colorInputWrapper("--live-glow-color-inner")}
        {colorInputWrapper("--live-glow-color-outer")}
      </Section>

      <Section
        title="UI Theme"
        isOpen={openSections["UI Theme"]}
        onToggle={() => toggleSection("UI Theme")}
      >
        <div className="ui-theme-grid">
          {colorInputWrapper("--panel-bg")}
          {colorInputWrapper("--panel-border")}
          {colorInputWrapper("--accent")}
          {colorInputWrapper("--accent-glow")}
          {colorInputWrapper("--text-light")}
          {colorInputWrapper("--text-dim")}
          {colorInputWrapper("--input-bg")}
          {colorInputWrapper("--input-border")}
          {colorInputWrapper("--input-focus")}
        </div>

        {slider("--admin-sidebar-width", 200, 500)}
      </Section>

    </div>
  );
}
