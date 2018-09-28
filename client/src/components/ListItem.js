import React from 'react';

const ListItem = ({list, onClick}) => {
  return (
    <div className="list-item">
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}
        onClick={() => onClick(list.id)}
        >{list.name}</a>
      <br />
      <p>Total movies:  Average Rating:  </p>
      <br />
    </div>
  )
}


export default ListItem;
