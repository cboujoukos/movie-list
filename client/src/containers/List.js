import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovieToList, addNewListWithMovie } from '../actions/listActions';
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
        <Movie lists={this.props.lists} movie={movie} handleOnClick={this.props.onAddMovieToList} handleOnAddList={this.props.onAddNewListWithMovie} />
      </li>
    </ul>
  )

    return(
      <div>
        <h2>{this.props.singleList.name}</h2>
        <div className="movie-list">
          {renderMovieList}
        </div>
        <button onClick={(event) => this.test(event)}>Debugger</button>
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
    onAddNewListWithMovie: (name,movie) => dispatch(addNewListWithMovie(name,movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
