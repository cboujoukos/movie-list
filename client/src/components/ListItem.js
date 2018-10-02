import React from 'react';
// import DropDown from './DropDown'

const ListItem = ({list, onClick}) => {
  return (
    <div className="list-item">
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}
        onClick={() => onClick(list.list.id)}
        >{list.list.name}</a>
      <br />
      <div>Total movies: {list.list_length},  Average Rating: {Math.round(list.avg_rating*10)/10} </div>
      <br />
    </div>
  )
}


export default ListItem;
