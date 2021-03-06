import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import {Link} from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false,
      error: false,
      email: "",
      password: ""
    }
  }

  test = (event) => {
    event.preventDefault()
    debugger
  }

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
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
    .then(() => {this.props.login(); this.setState({error:false})})
    .then(() => this.props.history.push('/'))
    .catch(error => {console.log(error); this.setState({error:true})});
  }

  render(){
    return(
      <div className="container"><form className="form" onSubmit={(event) => this.handleOnSubmit(event)}>
        <div style={{display: !!this.state.error ? 'block' : 'none', color: 'red'}}>
          Wrong email/password combination<br />
        </div>
        <label htmlFor="email">Email: </label>
        <br />
        <input className="btn"
          name="email"
          id="email"
          type="email"
          value={this.state.email}
          onChange={(event) => this.handleChange(event)}
        />
        <br /> <br />
        <label htmlFor="password">Password: </label>
        <br />
        <input className="btn"
          name="password"
          id="password"
          type="password"
          value={this.state.password}
          onChange={(event) => this.handleChange(event)}
          />
        <br /><br />
        <input className="btn"
          disabled={!this.validateForm()}
          type="submit"
          /> or <Link
            to="/signup"
          >Sign up</Link>
      </form></div>
    )
  }
}

export default Login;
