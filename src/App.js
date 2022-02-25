import { useEffect, useState } from 'react';
import './App.css';
import {Login} from "./components/Login"
import {getTokenFromUrl} from "./components/Spotify"
import SpotifyWebApi from "spotify-web-api-js";
import { Lister } from './components/Lister';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }

  }, []);

  return (
    <div className="App">


{token ? <Lister token={token} /> : <Login />}


    </div>
  );
}

export default App;

// client id 197225f46f194cf594d4673102c1971c
