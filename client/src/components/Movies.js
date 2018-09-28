import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/listActions';
import Movie from './Movie';


class Movies extends Component {

  componentDidMount(){
    this.props.onFetchMovies()
  }

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

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovies: () => dispatch(fetchMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
