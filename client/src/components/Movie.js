import React from 'react';

const Movie = ({movie}) => {
  return (
    <div className="movie-box">
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}
        >{movie.title}</a>
      <br />
      <p>Genre: {movie.genre}</p>
      <p>Release Date: </p>
    </div>
  )
}


export default Movie;
