import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      listId: this.props.location.state.listId
    }
  }

  render(){
    return(
      <div>
        {this.state.listId}
      </div>
    )
  }
}

export default List;
