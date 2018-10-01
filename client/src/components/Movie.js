import React from 'react';
import MovieDropdown from './MovieDropdown';
import ReactStars from 'react-stars';

const Movie = ({movie, handleOnClick, handleOnAddList, lists}) => {
  return (
    <div className="movie-box">
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}

        >{movie.title}</a>
      <br />
      <p>Genre: {movie.genre}</p>
      <p>Release Date: </p>
      <ReactStars
        count={5}
        size={24}
        color2={'#ffd700'} />
      {
        (lists.length > 0)  ? (
          <MovieDropdown movie={movie} onAddList={handleOnAddList} onSelect={handleOnClick} trigger="+" items={lists} />
        ) : (
          null
        )
      }

    </div>
  )
}


export default Movie;
