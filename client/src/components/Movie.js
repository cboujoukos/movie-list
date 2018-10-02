import React from 'react';
import MovieDropdown from './MovieDropdown';
import ReactStars from 'react-stars';


const Movie = ({movie, onAddRating, handleOnClick, handleOnAddList, lists, onRemoveFromList}) => {

  return (
    <div className="movie-box">
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}
        onClick={()=>{console.log({movie})}}
        >{movie.title}</a>
      <br />
      <div><p>Genre: {movie.genre}</p>
      <p>Release Date: </p></div>
      {
        localStorage.jwt ? (
          <ReactStars
            count={5}
            half={false}
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
      <div>
        <MovieDropdown movie={movie} onAddList={handleOnAddList} onSelect={handleOnClick} trigger="+" items={lists} onRemoveFromList={onRemoveFromList}  />

      </div>
    </div>
  )
}


export default Movie;
