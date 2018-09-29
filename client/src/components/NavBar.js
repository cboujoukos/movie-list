import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component{

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
      color: '#D4E4F7'
    }

    return(
      <nav>
        <div className="navWide">
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
        </div>
      </nav>
    )
  }
}
export default NavBar
