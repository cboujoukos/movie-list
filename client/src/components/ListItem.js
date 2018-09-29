import React from 'react';

const ListItem = ({list, onClick}) => {
  return (
    <div className="list-item">
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}
        onClick={() => onClick(list.list.id)}
        >{list.list.name}</a>
      <br />
      <p>Total movies: {list.list_length},  Average Rating:  </p>
      <br />
    </div>
  )
}


export default ListItem;
