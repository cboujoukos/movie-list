import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import {Link} from 'react-router-dom';

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
      password_confirmation: ""
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.password_confirmation.length > 0;
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
  }

  render(){
    return(
      <form className="form" onSubmit={(event) => this.handleOnSubmit(event)}>
        <label htmlFor="email">Email: </label>
        <br />
        <input
          name="email"
          id="email"
          type="email"
          value={this.state.email}
          onChange={(event) => this.handleChange(event)}
        />
        <br /> <br />
        <label htmlFor="password">Password: </label>
        <br />
        <input
          name="password"
          id="password"
          type="password"
          value={this.state.password}
          onChange={(event) => this.handleChange(event)}
          />
        <br /><br />
        <input
          disabled={!this.validateForm()}
          type="submit"
          /> or <Link
            to="/login"
          >Log in</Link>
      </form>
    )
  }
}

export default Signup;
