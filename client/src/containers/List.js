import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovieToList, addNewListWithMovie, addRatingToMovie, removeMovieFromList } from '../actions/listActions';
import Movie from '../components/Movie';

class List extends Component {


  test = (event) => {
    event.preventDefault()
    debugger
  }

  render(){


    const renderMovieList = this.props.movies.map((movie) =>
    <ul key={movie.id}>
      <li>
        <Movie onRemoveFromList={this.props.onRemoveMovieFromList} onAddRating={this.props.onAddRatingToMovie} list={this.props.singleList} lists={this.props.lists} movie={movie} handleOnClick={this.props.onAddMovieToList} handleOnAddList={this.props.onAddNewListWithMovie} />
      </li>
    </ul>
  )

    return(
      <div>
        <h2>{this.props.singleList.name}</h2>
        <div className="movie-list">
          {renderMovieList}
        </div>
        <button className="btn" onClick={(event) => this.test(event)}>Debugger</button>
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
    onAddMovieToList: (movie,list) => dispatch(addMovieToList(movie,list)),
    onAddRatingToMovie: (movie, rating) => dispatch(addRatingToMovie(movie,rating)),
    onAddNewListWithMovie: (name,movie) => dispatch(addNewListWithMovie(name,movie)),
    onRemoveMovieFromList: (movie_id, list_id) => dispatch(removeMovieFromList(movie_id, list_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
