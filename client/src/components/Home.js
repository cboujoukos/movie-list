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
    .then((newLists) => this.setState((prevState) => {return {lists: prevState.lists.concat(newLists)}}))
  }

  convertToArray = json => {
    let newLists = this.state.lists.slice()
    json.map((list) => {
      // debugger
      newLists.push({name: list.name, id: list.id})
    })
    // debugger
    return newLists
  }

  onClick = (event) => {
    alert('hi')
  }

  test = (event) => {
    event.preventDefault()
    debugger
  }

  render(){

    const renderLists = this.state.lists.map((entry) =>
      <List list={entry.name} id={entry.id} onClick={this.onClick} key={entry.id} />
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

export default Home
