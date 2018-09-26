import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import fetch from 'isomorphic-fetch';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lists: "",
      email: "",
      password: "",
    }
    this.getLists = this.getLists.bind(this)
  }
  getLists(){
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

  handleChange = (event) => {
    console.log(event.target.name)
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    let request = {"auth": {"email": this.state.email, "password": this.state.password}}
    console.log(request)
    fetch('/api/user_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })
    .then(function(rsp){
      if (!rsp.ok) {
        throw Error(rsp.statusText);
      }
      return rsp.json()
    })
    .then((data) => localStorage.setItem("jwt", data.jwt))
    .catch(error => console.log(error))
    // axios.post('/api/user_token', {
    //   data: request,
    //   dataType: "json"
    // })
    // .then(function(rsp){
    //   rsp.json()
    // })
    // .then(function(data){
    //    console.log(data)
    //  })
    // .catch(function(err){
    //   console.log(err)
    // })
  }

  login(){
    let email = this.state.email
    let password = this.state.password
    // axios.post('http://localhost:3001/api/user_token', {
    //   email: this.state.email,
    //   password: this.state.password
    // })
    console.log("Email: " + email + " Password: " + password)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3> Movie Listr </h3>
        </header>

        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            id="email"
            type="email"
            onChange={(event) => this.handleChange(event)}
          />
          <br /> <br />
          <label htmlFor="password">Password: </label>
          <br />
          <input
            name="password"
            id="password"
            type="password"
            onChange={(event) => this.handleChange(event)}
            />
          <br />
          <input
            type="submit"
            />
        </form>
        <br />
        <button onClick={this.login}>Login</button>
        <br />

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
