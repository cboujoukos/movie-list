import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchForMovie } from '../actions/listActions';

class NavBar extends Component{
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/login");
  }

  handleOnChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchForMovie(this.state.text)
    this.setState({text: ''})
  }

  render(){

    const defaultStyle = {
      display: 'inline-block',
      padding: '20px 16px 0 16px',
      textDecoration: 'none',
      // backgroundColor: 'black',
      color: 'inherit',
      // textTransform: 'uppercase',
      fontSize: 14,
      fontWeight: 'bold'
    }
    const activeStyle = {
      color: '#D4E4F7',
      cursor: 'text',
    }


    return(
      <div>
        <nav>
          <NavLink
              exact to="/"
              style={defaultStyle}
              activeStyle={activeStyle}>My Lists
              </NavLink>
              <NavLink
              exact to="/movies"
              style={defaultStyle}
              activeStyle={activeStyle}>Movies
          </NavLink>
          {!localStorage.jwt ? (
            <NavLink
                exact to="/login"
                style={defaultStyle}
                activeStyle={activeStyle}>Login
            </NavLink>
          ) : (
              <button className="nav-button" onClick={() => this.logout()}>Logout</button>
          )}
        </nav>
        {localStorage.jwt ? (
          <div><form onSubmit={(e)=>this.handleOnSubmit(e)}><input value={this.state.text} onChange={(event)=>this.handleOnChange(event)} className="search" placeholder="search movies" /></form></div>
        ) : (
          null
        )}
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchForMovie: (title) => dispatch(searchForMovie(title))
  }
}
export default withRouter(connect(null, mapDispatchToProps)(NavBar))
