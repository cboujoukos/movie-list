import React from 'react';
import MovieDropdown from './MovieDropdown';
import ReactStars from 'react-stars';


const Movie = ({movie, list, onAddRating, handleOnClick, handleOnAddList, lists, onRemoveFromList}) => {

  return (
    <div className="movie-box">
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}
        onClick={()=>{console.log({movie})}}
        >{movie.movie.title}</a>
      <br />
      <div><p>Genre: {movie.movie.genre}</p>
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
            value={(movie.user_review) ? (movie.user_review) : 0}
            size={24}
            color2={'#ffd700'} />
        ) : (
          null
        )
      }
      <div>
        <MovieDropdown movie={movie} list={list} onAddList={handleOnAddList} onSelect={handleOnClick} trigger="+" items={lists} onRemoveFromList={onRemoveFromList}  />

      </div>
    </div>
  )
}


export default Movie;
