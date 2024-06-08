import React, { useState, useEffect } from 'react';
import apiClient from '../../spotify';
import './trending.css';

export default function Trending({ setCurrentTrack, setIsPlaying }) {
  const [trendingTracks, setTrendingTracks] = useState([]);

  const fetchTrendingTracks = async () => {
    try {
      const response = await apiClient.get('/browse/new-releases');
      setTrendingTracks(response.data.albums.items);
    } catch (error) {
      console.error("There was an error fetching the trending tracks!", error);
    }
  };

  useEffect(() => {
    fetchTrendingTracks();
    const interval = setInterval(fetchTrendingTracks, 60000); // Fetch every minute
    return () => clearInterval(interval);
  }, []);

  const handleTrackClick = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <div className="trending-container screen-container flex">
      <h2>Trending Now</h2>
      <div className="trending-items">
        {trendingTracks.map((album) => (
          <div
            key={album.id}
            className="trending-item"
            onClick={() => handleTrackClick(album)}
          >
            {album.images[0] && (
              <img
                src={album.images[0].url}
                alt={`${album.name} cover`}
                className="trending-item-cover"
              />
            )}
            <div className="trending-item-info">
              <h3>{album.name}</h3>
              <p>{album.artists.map(artist => artist.name).join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
