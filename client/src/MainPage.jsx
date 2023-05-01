import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, {useState, useEffect} from "react"
import SpotifyWebApi from "spotify-web-api-js";
import { Container} from 'react-bootstrap';
import LoginRedirect from './LoginRedirect';
import SongPage from './SongPage';



const spotifyApi = new SpotifyWebApi();

const getTokenFromUrl = () =>{
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
  },  {});
};

const MainPage = () => {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log("This is what we got from the URL: ", getTokenFromUrl())
    const spotifyToken = getTokenFromUrl().access_token
    window.location.hash = "";
    console.log("This is our spotify token", spotifyToken);

    if (spotifyToken) {
      setSpotifyToken(spotifyToken)
      spotifyApi.setAccessToken(spotifyToken)
      spotifyApi.getMe().then((user) => {
        console.log(user)
      })
      setLoggedIn(true)
    }
  }, []);

  return (
    <Container>
      <Container>
        {!loggedIn && (<LoginRedirect />) }
      </Container>
      <Container >
        {loggedIn && (<SongPage spotifyApi={spotifyApi}/>)}
      </Container>
  </Container>  
  );
};

export default MainPage;
