import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Home from './containers/Home'
import List from './containers/List';
import Movies from './containers/Movies';
import History from './utils/History';
// import axios from 'axios';
// import fetch from 'isomorphic-fetch';

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


  login = () => {
    this.setState({loggedIn: true})
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.setState({loggedIn: false})
  }

  render() {
    return (
      <Router history={History}>
        <div className="App">
          <header className="App-header">
            <h3> Movie Listr </h3>
            {!!localStorage.jwt ? (
              <button className="nav-button" onClick={() => this.logout()}>Logout</button>
            ) : null}
          </header>

        <div className='main'>
          <Switch>
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
            <Route exact path="/movies" component={Movies} />
            <Route path="/:list" render={({props, history}) => (
              !localStorage.jwt ? (
                <Redirect to="/login" />
              ) : (
                (this.props.singleList && this.props.history.location.pathname === `/${this.props.singleList.id}`) ? (
                  <List {...props} />
                ) : (
                  <Redirect to="/" />
                )
              )
            )} />
          </Switch>
        </div>
        <br />


      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleList: state.app.singleList
  }
}

export default connect(mapStateToProps)(App);
