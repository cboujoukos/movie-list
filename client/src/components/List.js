import React, { Component } from 'react';
import Movies from './Movies';

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      listName: this.props.location.state.name,
      listId: this.props.location.state.listId,
      movies: []
    }
  }

  componentDidMount(){
    this.getMovies()
  }

  getMovies = () => {
    // event.preventDefault();
    let token = "Bearer " + localStorage.getItem("jwt")
    fetch('/api/movies', {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
    .then((rsp) => rsp.json())
    .then((json) => this.convertToArray(json))
    .then((newMovies) => this.setState((prevState) => {return {movies: prevState.movies.concat(newMovies)}}))
  }

  convertToArray = json => {
    let newMovies = this.state.movies.slice()
    if (typeof(json) === Array) {
      json.map((movie) => {
        // debugger
        newMovies.push({name: movie.name, id: movie.id})
      })
    } else {
      newMovies = json
    }
    // debugger
    return newMovies
  }

  render(){
    // debugger;
    const renderMovies = this.state.movies.map((entry) =>
      <Movies movie={entry.title} id={entry.id}  key={entry.id} />
    )
    return(
      <div>
        <h2>{this.state.listName}</h2>
        {renderMovies}
      </div>
    )
  }
}

export default List;
