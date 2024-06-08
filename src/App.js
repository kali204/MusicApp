import React, { useState } from 'react';
import Home from './screens/home/home';
import AudioPlayer from './component/audioPlayer';

export default function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Home setCurrentTrack={setCurrentTrack} setIsPlaying={setIsPlaying} />
      {currentTrack && (
        <AudioPlayer
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}
    </div>
  );
}
