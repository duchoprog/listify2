import React from 'react';
import "../css/Login.css"
import logo from "../assets/Spotify_Logo768.png"
import { loginUrl } from "./Spotify";


export const Login = () => {
  return <div className='login'>
      <img 
        src={logo} 
        alt="Spotify logo"
      />
         <a href={loginUrl}>LOGIN TO SPOTIFY</a>
      </div>;
};
