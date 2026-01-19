import React from "react";
const Stat = ({ value, label }) => {
  return (
    <div className="hero-stat">
      <div className="hero-stat-value">{value}</div>
      <div className="hero-stat-label">{label}</div>
    </div>
  );
};

export default Stat;
