import React from 'react';
import './controls.css';

export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  return (
    <div className="controls-container">
      <button onClick={handlePrev} className="control-button">
        <i className="fa fa-backward"></i>
      </button>
      <button onClick={() => setIsPlaying(!isPlaying)} className="control-button">
        {isPlaying ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}
      </button>
      <button onClick={handleNext} className="control-button">
        <i className="fa fa-forward"></i>
      </button>
    </div>
  );
}
