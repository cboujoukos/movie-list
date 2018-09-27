import React from 'react';
import {Link} from 'react-router-dom';

const Movies = ({movie, id, onClick}) => {
  return (
    <div>
      <Link style={{'textDecoration': 'none', 'fontSize': '1.5em'}} to={{pathname: "/"+movie, state: {movieId: id}}} >{movie}</Link>
      <br />
      <button onClick={onClick} className="nav-button">See Movie</button>
    </div>
  )
}


export default Movies;
