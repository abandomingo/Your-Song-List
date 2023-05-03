import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-js";
import { Container, Row, Col, Button } from 'react-bootstrap';

const spotifyApi = new SpotifyWebApi();

const TopSongs = () => {
  const [topSongs, setTopSongs] = useState([]);

  const getTopItems = (timeRange) => {
    spotifyApi.getMyTopTracks({ limit: 10, time_range: timeRange }).then((response) => {
      console.log(response);
      const topSongsArray = response.items.map((item) => {
        return {
          song: item.name,
          albumArt: item.album.images[0].url,
          artist: item.artists[0].name,
        };
      });
      setTopSongs(topSongsArray);
    });
  };

  useEffect(() => {
    getTopItems("short_term");
  }, []);

  return (
    <>
      <Container id="top-song-title">
        <Row>
          <span id='section'>Your Top Songs</span>
        </Row>
          <Row>
            <Col>
              <Button variant="dark" onClick={() => getTopItems("short_term")}>
                Past month
              </Button>
              <Button variant="dark" onClick={() => getTopItems("medium_term")}>
                Past 6 months
              </Button>
              <Button variant="dark" onClick={() => getTopItems("long_term")}>
                All time
                </Button>
            </Col>
          </Row>
        </Container>
      {topSongs.map((song, index) => (
        <>
        <Row id='song-list' key={index}>
          <Col md={12} lg={6}>
            <img src={song.albumArt} style={{height: 350, width: 350}}/>
          </Col>
          <Col md={12} lg={6}>
            <h1>#{index + 1} <strong>{song.song}</strong> - {song.artist}</h1>  
          </Col>
        </Row>
        <hr/>
        </>
      ))}
    </>
  );
};

export default TopSongs;
