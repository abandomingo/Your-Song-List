import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import MainPage from './MainPage';

const colors = ['#80A1C1', '#EEE3AB', '#D9CFC1', '#A77E58', '#BA3F1D'];

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
