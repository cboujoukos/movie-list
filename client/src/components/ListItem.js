import React from 'react';
import {Link} from 'react-router-dom';

const ListItem = ({list}) => {
  return (
    <div>
      <Link
        style={{'textDecoration': 'none', 'fontSize': '1.5em'}}
        to={{pathname: "/"+list.id}}
        >{list.name}</Link>
      <br />
    </div>
  )
}


export default ListItem;
