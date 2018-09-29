import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists, fetchSingleList } from '../actions/listActions';
import ListItem from '../components/ListItem';
import Movie from '../components/Movie';

class Home extends Component{

  componentDidMount() {
    this.props.onFetchLists()
  }


  onClick = (listId) => {
    this.props.onFetchSingleList(listId);
  }

  test = (event) => {
    event.preventDefault()
    debugger
  }

  isEmpty = (obj) => {
     return (Object.keys(obj).length === 0)
  }

  render(){

    const renderLists = this.props.lists.map((entry) =>
      <ul key={entry.id}>
        <li>
          <ListItem key={Date.now()} list={entry} onClick={this.onClick} />
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
