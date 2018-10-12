import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component{

  render(){
    return(
      <div className='movie-details'>
        <h1>{this.props.movie.movie.title}</h1>
        <h3>Genre:</h3>
        <p>{this.props.movie.movie.genre}</p>
        <h3>Synopsis: </h3>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    movie: state.app.singleMovie
  }
}


export default connect(mapStateToProps)(MovieDetail);
