import React from 'react';
import MovieDropdown from './MovieDropdown';
import ReactStars from 'react-stars';


const Movie = ({movie, onAddRating, handleOnClick, handleOnAddList, lists}) => {

  return (
    <div className="movie-box">
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}
        onClick={()=>{console.log(movie.user_movie_ratings[0].rating)}}
        >{movie.title}</a>
      <br />
      <p>Genre: {movie.genre}</p>
      <p>Release Date: </p>
      {
        localStorage.jwt ? (
          <ReactStars
            count={5}
            onChange={(newRating) => {
              console.log(newRating);
              onAddRating(movie, newRating)
            }}
            value={(movie.user_movie_ratings.length > 0) ? (movie.user_movie_ratings[0].rating) : 0}
            size={24}
            color2={'#ffd700'} />
        ) : (
          null
        )
      }

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
