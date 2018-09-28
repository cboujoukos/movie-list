import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists, fetchSingleList } from '../actions/listActions';
import fetch from 'isomorphic-fetch';
import ListItem from './ListItem';
import Movie from './Movie';

class Home extends Component{

  componentDidMount() {
    this.props.onFetchLists()
  }

  // getLists = () => {
  //   // event.preventDefault();
  //   let token = "Bearer " + localStorage.getItem("jwt")
  //   fetch('/api/lists', {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': token
  //     }
  //   })
  //   .then((rsp) => rsp.json())
  //   .then((json) => this.convertToArray(json))
  //   .then((newLists) => this.setState((prevState) => {return {lists: prevState.lists.concat(newLists)}}))
  // }
  //
  // convertToArray = json => {
  //   let newLists = this.state.lists.slice()
  //   json.map((list) => {
  //     // debugger
  //     newLists.push({name: list.name, id: list.id})
  //   })
  //   // debugger
  //   return newLists
  // }

  onClick = (listId) => {
    this.props.onFetchSingleList(listId);
  }

  test = (event) => {
    event.preventDefault()
    debugger
  }

  isEmpty = (obj) => {
     return (Object.keys(obj).length == 0)
  }

  render(){

    const renderLists = this.props.lists.map((entry) =>
      <ul key={entry.id}>
        <li>
          <ListItem key={Date.now()} list={entry} onClick={this.onClick} />
        </li>
      </ul>
    )

    const renderMovieList = this.props.movies.map((movie) =>
    <ul>
      <li>
        <Movie key={movie.id} movie={movie} />
      </li>
    </ul>
  )

    return(
      <div>
        <h3>Hello World</h3>
        <br /><button onClick={(event) => this.test(event)}>Debugger</button>
        <div className="App-intro">
          {renderLists}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchLists: () => dispatch(fetchLists()),
    onFetchSingleList: (listId) => dispatch(fetchSingleList(listId))
  }
}

const mapStateToProps = state => {
  return {
    lists: state.app.lists,
    singleList: state.app.singleList,
    movies: state.app.movies
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
