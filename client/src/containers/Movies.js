import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, addMovieToList } from '../actions/listActions';
import Movie from '../components/Movie';


class Movies extends Component {

  componentDidMount(){
    this.props.onFetchMovies()
  }

  render(){

    const renderMovieList = this.props.movies.map((movie) =>
      <ul key={movie.id}>
        <li>
          <Movie lists={this.props.lists} movie={movie} handleOnClick={this.props.onAddMovieToList} />
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
    onFetchMovies: () => dispatch(fetchMovies()),
    onAddMovieToList: (movie,list) => dispatch(addMovieToList(movie,list))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
