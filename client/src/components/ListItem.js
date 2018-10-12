import React from 'react';

const ListItem = ({list, onClick}) => {
  return (
    <div className="list-item">
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}
        onClick={() => onClick(list.list.id)}
        >{list.list.name}</a>
      <br />
      <div>
        <p>Total movies: {list.list_length}</p>
        <p>Average Rating: {Math.round(list.avg_rating*20)}%</p>
     </div>
    <br />
    </div>
  )
}


export default ListItem;
