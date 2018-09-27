import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import List from './List';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      lists: []
    }
  }

  componentDidMount() {
    this.getLists()
  }

  getLists = () => {
    // event.preventDefault();
    let token = "Bearer " + localStorage.getItem("jwt")
    fetch('/api/lists', {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
    .then((rsp) => rsp.json())
    .then((json) => this.convertToArray(json))
    .then((newLists) => this.setState({lists: [...this.state.lists, newLists]}))
  }

  convertToArray = json => {
    let newLists = this.state.lists.slice()
    json.map((list) => {
      // debugger
      newLists.push(list.name)
    })
    // debugger
    return newLists
  }

  test = (event) => {
    event.preventDefault()
    // debugger
  }

  render(){

    const renderLists = this.state.lists.map((entry, i) =>
      <List list={entry} key={i} />
    )

    return(
      <div>
        <h3>Hello World</h3>
        <br /><button onClick={(event) => this.test(event)}>Debugger</button>
        <div className="App-intro">
          {this.state.lists}
        </div>
      </div>
    )
  }
}

export default Home
