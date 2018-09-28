import React from 'react';

const ListItem = ({list, onClick}) => {
  return (
    <div>
      <a
        style={{'textDecoration': 'underline', 'cursor': 'pointer', 'fontSize': '1.5em'}}
        onClick={() => onClick(list.id)}
        >{list.name}</a>
      <br />
    </div>
  )
}


export default ListItem;
