import React from "react";
import "../styles/battery.css";

interface BatteryProps {
  name: string;
  color: string;
  width: string;
  height: string;
}

const Battery: React.FC<BatteryProps> = ({ name, color, width, height }) => {
  return (
    <div className={`battery ${color}`} style={{ width, height }}>
      {name}
    </div>
  );
};

export default Battery;
