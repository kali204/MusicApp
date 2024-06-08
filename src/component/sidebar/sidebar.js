import React, { useEffect, useState } from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdFavorite } from 'react-icons/md';
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';
import apiClient from '../../spotify';

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      if(response.data.image && response.data.image.length>0){
        setImage(response.data.images[0].url);
      }
      else
      {
        console.error("No Profile image found");
      }
    }).catch((error)=>{
      console.error("Error fetching profile image:",error);
    });
  }, []);

  return (
    <div className="sidebar-container">
      <img
        src={image}
        className="profile-img"
        alt="profile"
      />
      <div className="sidebar-buttons">
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/library" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="/signout" icon={<FaSignOutAlt />} />
    </div>
  );
}
