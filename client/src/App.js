import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {lists: ""}
    this.getLists = this.getLists.bind(this)
  }
  getLists(){
    let that = this
    axios.get('/api/lists')
    .then(function(rsp){
      console.log(rsp.data);
      that.setState({lists: JSON.stringify(rsp.data)})
    })
    .catch(function(err){
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3> Movie Listr </h3>
        </header>
        <button
          onClick={this.getLists}
        >
        Get Lists
        </button>
        <p className="App-intro">
          {this.state.lists}
        </p>
      </div>
    );
  }
}

export default App;
