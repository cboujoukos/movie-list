import React, { Component } from 'react';
import Movies from './Movies';

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      listName: "",
      // listId: this.props.location.state.listId,
      id: "",
      movies: []
    }
  }

  // componentDidMount(){
  //   this.getList()
  // }


  getList = () => {
    // event.preventDefault();
    let that = this
    let token = "Bearer " + localStorage.getItem("jwt")
    fetch('/api/lists/'+that.props.match.params.id, {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
    .then((rsp) => {debugger})
    .then((json) => this.convertToArray(json))
    .then((newMovies) => this.setState((prevState) => {return {movies: prevState.movies.concat(newMovies)}}))
  }

  convertToArray = json => {
    debugger;
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
    debugger;
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
