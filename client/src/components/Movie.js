import React from 'react';

const Movie = ({movie}) => {
  return (
    <div>
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}
        >{movie.title}</a>
      <br />
    </div>
  )
}


export default Movie;
