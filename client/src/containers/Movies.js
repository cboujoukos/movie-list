import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, addMovieToList, addNewListWithMovie, addRatingToMovie } from '../actions/listActions';
import Movie from '../components/Movie';


class Movies extends Component {

  componentDidMount(){
    this.props.onFetchMovies()
  }

  render(){

    const renderMovieList = this.props.movies.map((movie) =>
      <ul key={movie.id}>
        <li>
          <Movie onAddRating={this.props.onAddRatingToMovie} lists={this.props.lists} movie={movie} handleOnClick={this.props.onAddMovieToList} handleOnAddList={this.props.onAddNewListWithMovie} />
        </li>
      </ul>
    )

    return(
      <div className="movie-list">
      <h1 className="title">Movies</h1>
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
    onFetchMovies: () => dispatch(fetchMovies()),
    onAddRatingToMovie: (movie, rating) => dispatch(addRatingToMovie(movie,rating)),
    onAddMovieToList: (movie,list) => dispatch(addMovieToList(movie,list)),
    onAddNewListWithMovie: (name,movie) => dispatch(addNewListWithMovie(name,movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
