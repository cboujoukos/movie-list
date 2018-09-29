import React from 'react';

const Movie = ({movie, onClick}) => {
  return (
    <div className="movie-box">
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}
        onClick={onClick}
        >{movie.title}</a>
      <br />
      <p>Genre: {movie.genre}</p>
      <p>Release Date: </p>
    </div>
  )
}


export default Movie;
