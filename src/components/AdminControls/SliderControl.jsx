import React from 'react';

function SliderControl({ label, min, max, step, value, onChange }) {
  const handleChange = (e) => {
    const raw = e.target.value;
    const numeric = step % 1 === 0 ? parseInt(raw, 10) : parseFloat(raw);
    onChange(numeric);
  };

  return (
    <div className="control control-slider">
      <div className="control-header">
        <span className="control-label">{label}</span>
        <span className="control-value">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default SliderControl;
