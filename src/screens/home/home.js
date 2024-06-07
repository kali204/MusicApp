import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Feed from '../feed/feed'
import Trending from '../trending/trending'
import Player from '../player/player'
import Favorities from '../favorities/favorities'
import Library from '../library/library'
import './home.css'
import Sidebar from '../../component/sidebar/sidebar'
import Login from '../auth/login'
export default function Home() {
  return (
    <Router>
        <div className="main-body">
          <Login/>
        {/* <Sidebar/>
        <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
            <Route path="/favorities" element={<Favorities />} />
        </Routes> */}
        </div>
    </Router>
  )
}

//settingScreen
//Settingscreen
