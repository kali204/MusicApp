import React from 'react';
import './waveAnimation.css';

export default function WaveAnimation({ isPlaying }) {
  return (
    <div className="wave-animation">
      <div className={`bar ${isPlaying ? 'playing' : ''}`}></div>
      <div className={`bar ${isPlaying ? 'playing' : ''}`}></div>
      <div className={`bar ${isPlaying ? 'playing' : ''}`}></div>
      <div className={`bar ${isPlaying ? 'playing' : ''}`}></div>
      <div className={`bar ${isPlaying ? 'playing' : ''}`}></div>
    </div>
  );
}
