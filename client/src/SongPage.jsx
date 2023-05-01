import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useEffect} from "react"
import SpotifyWebApi from "spotify-web-api-js";
import { Container, Row, Col, Button} from 'react-bootstrap';
import TopSongs from './TopSongs';

const spotifyApi = new SpotifyWebApi();

const SongPage = () => {
  const [nowPlaying, setNowPlaying] = useState({});
  const [userInfo, setUserInfo] = useState({})

  const getUserInfo =() => {
    spotifyApi.getMe().then((response) => {
      console.log(response)
      ;
      setUserInfo({
        name: response.display_name,
        userArt: response.images[0].url
      })
    })
  }
  const getNowPlaying =() => {
    spotifyApi.getMyCurrentPlaybackState().then((response) => {
      console.log(response);
      setNowPlaying({
        name: response.item.name,
        albumArt: response.item.album.images[0].url,
        artist: response.item.artists[0].name
      })
    })
  }

  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  getNowPlaying()
    return () => { ignore = true; }
    },[]);

  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  getUserInfo()
    return () => { ignore = true; }
    },[]);

  return (
  <Container>
    <Container>
      <Row id='currently-listening'>
        <Col md={6} className="text-center">
          <div id="scroll-container">
            <h1>Currently Listening To:</h1>
            <h3 id="scroll-text">{nowPlaying.name} - {nowPlaying.artist}</h3>
            <img src={nowPlaying.albumArt} style={{height: 350, width: 350}}/>
          </div>
          <div id='refresh-button'>
            <Button onClick={() => getNowPlaying()}  variant="dark">Check Now Playin</Button>{' '}
          </div>
        </Col>
        <Col md={6} className="text-center">
          <h1> Welcome to <br/> Your Song List,</h1>
          <h3>{userInfo.name}</h3>
        </Col>
      </Row>
    </Container>
      <hr/>
      <Row>
        {(<TopSongs/>)}
      </Row>
  </Container>
  );
};

export default SongPage;