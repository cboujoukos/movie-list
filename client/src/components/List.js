import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';

class List extends Component {


  render(){

    const renderMovieList = this.props.movies.map((movie) =>
    <ul key={movie.id}>
      <li>
        <Movie movie={movie} />
      </li>
    </ul>
  )

    return(
      <div>
        <h2>{this.props.singleList.name}</h2>
        {renderMovieList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lists: state.app.lists,
    singleList: state.app.singleList,
    movies: state.app.movies
  }
}

export default connect(mapStateToProps)(List);
