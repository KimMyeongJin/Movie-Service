import React, { Component } from 'react';
import './Movie.css';


class Movie extends Component{
    render(){
        return(
            <div>
                <h1>Hello this is a Movie.</h1>
                <MoviePoster />
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://cdn1.thr.com/sites/default/files/2015/12/splashd-bigshort_0.jpg"/>
        )
    }
}

export default Movie;