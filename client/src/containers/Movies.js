import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/listActions';
import Movie from '../components/Movie';


class Movies extends Component {

  componentDidMount(){
    this.props.onFetchMovies()
  }

  render(){

    const renderMovieList = this.props.movies.map((movie) =>
      <ul key={movie.id}>
        <li>
          <Movie movie={movie} onClick={() => {alert('hi')}} />
        </li>
      </ul>
    )

    return(
      <div className="movie-list">
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
