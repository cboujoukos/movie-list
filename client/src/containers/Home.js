import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists, fetchSingleList, addNewList, fetchMovies } from '../actions/listActions';
import ListItem from '../components/ListItem';

class Home extends Component{
  constructor(){
    super();
    this.state = {
      newList: ""
    }
  }

  componentDidMount() {
    this.props.onFetchLists();
    this.props.onFetchMovies();
  }


  onClick = (listId) => {
    this.props.onFetchSingleList(listId);
  }

  test = (event) => {
    event.preventDefault()
    debugger
  }

  handleOnChange = (event) => {
    this.setState({
      newList: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    if (this.state.newList !== "") {
      event.preventDefault();
      this.props.onAddNewList(this.state.newList)
    } else {
      event.preventDefault()
    }
  }

  isEmpty = (obj) => {
     return (Object.keys(obj).length === 0)
  }

  render(){

    let renderLists = null
    if (this.props && this.props.lists && this.props.lists.length > 0) {
      renderLists = this.props.lists.map((entry) =>
        <ul key={entry.list.id}>
          <li>
            <ListItem key={Date.now()} list={entry} onClick={this.onClick} />
          </li>
        </ul>
      )
    }


    return(
      <div>
        <h1>Movie Lists</h1>
        <div className="App-intro">
          {renderLists}

          <form className="new-list" onSubmit={(event) => this.handleOnSubmit(event)}>
            <input className="btn" placeholder="New List" name="name" type="text" id="name" value={this.state.newList} onChange={(event) => this.handleOnChange(event)} />
            <input className="btn" type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchLists: () => dispatch(fetchLists()),
    onFetchSingleList: (listId) => dispatch(fetchSingleList(listId)),
    onAddNewList: (name) => dispatch(addNewList(name)),
    onFetchMovies: () => dispatch(fetchMovies())
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
