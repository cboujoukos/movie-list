import React from 'react';
import {Link} from 'react-router-dom';

const Lists = ({list, id, onClick}) => {
  return (
    <div>
      <Link style={{'text-decoration': 'none', 'font-size': '1.5em'}} to={{pathname: "/"+list, state: {listId: id}}} >{list}</Link>
      <br />
      <button onClick={onClick} className="nav-button">See List</button>
    </div>
  )
}


export default Lists;
