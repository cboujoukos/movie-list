import React from 'react';
import DropDown from './DropDown';

const Movie = ({movie, handleOnClick, lists}) => {
  return (
    <div className="movie-box">
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}

        >{movie.title}</a>
      <br />
      <p>Genre: {movie.genre}</p>
      <p>Release Date: </p>
      {
        (lists.length > 0)  ? (
          <DropDown movie={movie} onSelect={handleOnClick} trigger="+" items={lists} />
        ) : (
          null
        )
      }

    </div>
  )
}


export default Movie;
