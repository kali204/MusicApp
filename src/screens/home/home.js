import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from '../feed/feed';
import Trending from '../trending/trending';
import Player from '../player/player';
import Favorites from '../favorites/favorites'; 
import Library from '../library/library';
import './home.css'; // Corrected CSS import path
import Sidebar from '../../component/sidebar/sidebar';
import Login from '../auth/login';
import { setClientToken } from '../../spotify';

export default function Home() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const hash = window.location.hash;
    window.location.hash = '';
    if (!token && hash) {
      const _token = hash.split('&')[0].split('=')[1];
      window.localStorage.setItem('token', _token);
      setToken(_token);
      // If you need to set client token, ensure setClientToken is defined
      setClientToken(_token);
    } else {
      setToken(token);
      // If you need to set client token, ensure setClientToken is defined
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/library" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}
