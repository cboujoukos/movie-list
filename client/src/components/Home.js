import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions/listActions';
import fetch from 'isomorphic-fetch';
import ListItem from './ListItem';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      lists: []
    }
  }

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

  onClick = (event) => {
    alert(event.target)
  }

  test = (event) => {
    event.preventDefault()
    debugger
  }

  render(){

    const renderLists = this.props.lists.map((entry) =>
      <ul>
        <li>
          <ListItem list={entry} />
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
    onFetchLists: () => dispatch(fetchLists())
  }
}

const mapStateToProps = state => {
  return {
    lists: state.app.lists
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
