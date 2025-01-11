import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircularProgressBarProps {
  value: number; 
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ value }) => {
  return (
    <div className="w-10 h-10">
      <CircularProgressbar
        value={value}
        text={`${Math.round(value * 10)}%`}
        styles={buildStyles({
          textSize: "20px",
          textColor: "#fff",
          pathColor: "#22c55e", // Green
          trailColor: "#374151", // Gray
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
