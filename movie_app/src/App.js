import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://i.pinimg.com/564x/ed/47/96/ed4796ac6feff9d2a6115406f964c928.jpg",
  "https://i-h1.pinimg.com/236x/36/77/da/3677dafd602b4fc399fb76c3b8b6c158.jpg",
  "https://i.pinimg.com/564x/16/5e/78/165e787b0510ff651d956c7fa7b4e142.jpg",
  "https://i.pinimg.com/564x/de/2c/8e/de2c8e1e4ea03e4b6118f8030953cdfb.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
