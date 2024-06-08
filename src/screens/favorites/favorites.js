import React, { useState, useEffect } from 'react';
import apiClient from '../../spotify';
import './favorites.css';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await apiClient.get('/me/tracks');
        setFavorites(response.data.items);
      } catch (error) {
        console.error("There was an error fetching the favorites data!", error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="favorites-container screen-container flex">
      <h2>Your Favorite Tracks</h2>
      <div className="favorites-items">
        {favorites.map(item => (
          <div key={item.track.id} className="favorites-item">
            {item.track.album.images[0] && (
              <img
                src={item.track.album.images[0].url}
                alt={`${item.track.name} cover`}
                className="favorites-item-cover"
              />
            )}
            <div className="favorites-item-info">
              <h3>{item.track.name}</h3>
              <p>{item.track.artists.map(artist => artist.name).join(', ')}</p>
              <audio controls>
                <source src={item.track.preview_url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
