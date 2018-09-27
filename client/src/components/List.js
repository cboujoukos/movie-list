import React from 'react';

const List = ({list, id, onClick}) => {
  return (
    <div>
      <h3>{list}</h3>
      <button onClick={onClick} className="nav-button">See List</button>
    </div>
  )
}


export default List;
