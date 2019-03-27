import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Movie.css';


class Movie extends Component{

    static propTypes = {
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired
    }

    static propTypes = {
        poster: propTypes.string.isRequired
    }


    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster} />
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.poster}/>
        )
    }
}

export default Movie;