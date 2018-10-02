import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Home from './containers/Home'
import List from './containers/List';
import Movies from './containers/Movies';
import Results from './components/Results'
import History from './utils/History';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      redirect: false,
      email: "",
      password: "",
    }
  }


  login = () => {
    this.setState({loggedIn: true})
  }


  render() {
    return (
      <Router history={History}>
        <div className="App">
          <header className="App-header">
            <h3 className="App-title"> Movie Listr </h3>
            <div className="nav-links">
              <NavBar />
            </div>
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
            <Route exact path="/movies" render={({history}) => (
              !localStorage.jwt ? (
                <Redirect to="/login" />
              ) : (
                <Movies />
              )
            )} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/results" render={({history}) => (
              !localStorage.jwt ? (
                <Redirect to="/login" />
              ) : (
                <Results />
              )
            )} />
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
