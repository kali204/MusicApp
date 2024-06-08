import React, { useState, useEffect } from 'react';
import apiClient from '../../spotify';
import './feed.css';

export default function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        // Example endpoint: Fetching user-specific playlists
        const response = await apiClient.get('/me/playlists');
        setFeed(response.data.items);
      } catch (error) {
        console.error("There was an error fetching the feed data!", error);
      }
    };

    fetchFeed();
  }, []);

  return (
    <div className="feed-container screen-container flex">
      <h2>Your Playlists</h2>
      <div className="feed-items">
        {feed.map(playlist => (
          <div key={playlist.id} className="feed-item">
            {playlist.images[0] && <img src={playlist.images[0].url} alt={`${playlist.name} cover`} className="feed-item-cover" />}
            <div className="feed-item-info">
              <h3>{playlist.name}</h3>
              <p>{playlist.tracks.total} songs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
