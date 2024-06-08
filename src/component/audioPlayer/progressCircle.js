import React from 'react';
import './progressCircle.css';

export default function ProgressCircle({ percentage, isPlaying, image, size, color }) {
  const radius = size / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-circle" style={{ width: size, height: size }}>
      <svg className="progress-circle-svg" width={size} height={size}>
        <circle
          className="progress-circle-background"
          stroke="#e6e6e6"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth="10"
        />
        <circle
          className="progress-circle-progress"
          stroke={color}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="progress-circle-content">
        <img src={image} alt="Album Art" />
      </div>
    </div>
  );
}
