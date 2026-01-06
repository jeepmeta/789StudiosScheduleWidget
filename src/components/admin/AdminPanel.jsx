import React, { useState } from 'react';
import { useConfig } from '../../hooks/useConfig.js';
import SliderControl from './AdminControls/SliderControl.jsx';
// We’ll add more controls later (Toggle, Text, Select).

function AdminPanel() {
  const {
    parallaxLayers,
    setParallaxLayers,
    globalParallax,
    setGlobalParallax,
  } = useConfig();

  const [collapsed, setCollapsed] = useState(false);

  const handleSceneDepthChange = (value) => {
    setGlobalParallax((prev) => ({
      ...prev,
      sceneDepth: value,
    }));
  };

  const handleVerticalDriftChange = (value) => {
    setGlobalParallax((prev) => ({
      ...prev,
      scrollIntensity: value,
    }));
  };

  const panelClass = collapsed ? 'admin-panel collapsed' : 'admin-panel';

  return (
    <div className={panelClass}>
      <div className="admin-panel-header">
        <h2>Admin Controls</h2>
        <button
          className="admin-collapse-button"
          onClick={() => setCollapsed((c) => !c)}
        >
          {collapsed ? '›' : '‹'}
        </button>
      </div>

      {!collapsed && (
        <div className="admin-panel-body">
          <section className="admin-section">
            <h3>Scene Depth</h3>
            <SliderControl
              label="Scene Depth"
              min={0}
              max={100}
              step={1}
              value={globalParallax.sceneDepth}
              onChange={handleSceneDepthChange}
            />
          </section>

          <section className="admin-section">
            <h3>Vertical Drift</h3>
            <SliderControl
              label="Vertical Drift"
              min={0}
              max={1}
              step={0.01}
              value={globalParallax.scrollIntensity}
              onChange={handleVerticalDriftChange}
            />
          </section>

          {/* Later: per-layer sliders, flame/lighter controls, slot controls */}
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
