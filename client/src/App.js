import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import MainPage from './MainPage';

const colors = ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const App = () => {
  const [backgroundColor] = useState(getRandomColor());

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <MainPage/>
  );
}

export default App;
