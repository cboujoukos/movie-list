import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      lists: ''
    }
  }

  getLists = (event) => {
    event.preventDefault();
    let that = this
    let token = "Bearer " + localStorage.getItem("jwt")
    fetch('/api/lists', {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
    .then((rsp) => rsp.json())
    .then((json) => that.setState({lists: JSON.stringify(json)}))
    // axios.get('/api/lists')
    // .then(function(rsp){
    //   console.log(rsp.data);
    //   that.setState({lists: JSON.stringify(rsp.data)})
    // })
    // .catch(function(err){
    //   console.log(err)
    // })
  }

  render(){
    return(
      <div>
        <h3>Hello World</h3>
        <button
          onClick={(event) => this.getLists(event)}
        >
        Get Lists
        </button>
        <p className="App-intro">
          {this.state.lists}
        </p>
      </div>
    )
  }
}

export default Home
