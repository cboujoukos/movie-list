import React from 'react';
import DropDown from './DropDown';

const Movie = ({movie, onClick, lists}) => {
  return (
    <div className="movie-box">
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}
        onClick={onClick}
        >{movie.title}</a>
      <br />
      <p>Genre: {movie.genre}</p>
      <p>Release Date: </p>
      <DropDown trigger="+" items={lists} />
    </div>
  )
}


export default Movie;
