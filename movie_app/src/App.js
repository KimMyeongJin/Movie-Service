import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  
  
  
]

const movieImages = [
  
  
  
  
]



class App extends Component {

  state = {  
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title: "Matrix",
            poster: "https://i.pinimg.com/564x/ed/47/96/ed4796ac6feff9d2a6115406f964c928.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://i-h1.pinimg.com/236x/36/77/da/3677dafd602b4fc399fb76c3b8b6c158.jpg"
          },
          {
            title: "Oldboy",
            poster: "https://i.pinimg.com/564x/16/5e/78/165e787b0510ff651d956c7fa7b4e142.jpg"
          },
          {
            title: "Star Wars",
            poster: "https://i.pinimg.com/564x/de/2c/8e/de2c8e1e4ea03e4b6118f8030953cdfb.jpg"
          },
          {
            title:"Transformers",
            poster: "https://i.pinimg.com/564x/1f/d3/a7/1fd3a7e4b37253ef24844bafa05c17d7.jpg"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
     })
     return movies
  } 

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
