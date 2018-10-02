import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class NavBar extends Component{
  constructor(){
    super();
    this.state = {
      on: true
    }
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/login");
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
      cursor: 'text'
    }


    return(
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
    )
  }
}
export default withRouter(NavBar)
