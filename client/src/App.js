import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'
// import axios from 'axios';
import fetch from 'isomorphic-fetch';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false,
      email: "",
      password: "",
    }
    // this.getLists = this.getLists.bind(this)
  }
  // getLists(){
  //   let that = this
  //   let token = "Bearer " + localStorage.getItem("jwt")
  //   fetch('/api/lists', {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': token
  //     }
  //   })
  //   .then((rsp) => rsp.json())
  //   .then((json) => that.setState({lists: JSON.stringify(json)}))
  //   // axios.get('/api/lists')
  //   // .then(function(rsp){
  //   //   console.log(rsp.data);
  //   //   that.setState({lists: JSON.stringify(rsp.data)})
  //   // })
  //   // .catch(function(err){
  //   //   console.log(err)
  //   // })
  // }

  // handleChange = (event) => {
  //   console.log(event.target.name)
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   })
  // }
  //
  // handleOnSubmit = (event) => {
  //   event.preventDefault()
  //   let request = {"auth": {"email": this.state.email, "password": this.state.password}}
  //   console.log(request)
  //   fetch('/api/user_token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(request)
  //   })
  //   .then(function(rsp){
  //     if (!rsp.ok) {
  //       throw Error(rsp.statusText);
  //     }
  //     return rsp.json()
  //   })
  //   .then((data) => localStorage.setItem("jwt", data.jwt))
  //   // .then(() => this.setState({loggedIn: true}))
  //   .then(()=>alert('hi!'))
  //   .catch(error => console.log(error))
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
  // }

  login = () => {
    this.setState({loggedIn: true})
  }

  logout = (event) => {
    localStorage.removeItem("jwt");
    this.setState({loggedIn: false})
  }

  render() {

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h3> Movie Listr </h3>
            {!!localStorage.jwt ? (
              <button className="nav-button" onClick={(event) => this.logout(event)}>Logout</button>
            ) : null}
          </header>

        <div className='main'>
          <Route exact path="/login" render={({history}) => (
            !!localStorage.jwt ? (
              <Redirect to="/" />
            ) : (
              <Login login={this.login} history={history} />
            )
          )} />
          <Route exact path="/" render={({history}) => (
            !localStorage.jwt ? (
              <Redirect to="/login" />
            ) : (
              <Home />
            )
          )} />
          <Route exact path="/signup" component={Signup} />
        </div>
        <br />


      </div>
      </Router>
    );
  }
}

export default App;
