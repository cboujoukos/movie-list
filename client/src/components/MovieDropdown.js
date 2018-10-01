import React, { Component } from 'react';

class MovieDropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      text: ''
    }
  }

  showMenu = (event) => {
    event.preventDefault();
    this.setState({showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }

  closeMenu = (event) => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = () => {
    if (this.state.text != ""){
      this.props.onAddList(this.state.text, this.props.movie)
    }
  }

  render(){
    if (!!this.props.items) {
      const renderLists = this.props.items.map((entry) =>
          <li key={Date.now()}>
            hi
          </li>
      )
    }


    return(
      <div>
        <button onClick={(event)=>this.showMenu(event)}>{this.props.trigger}</button>

        {
          this.state.showMenu
            ? (
              <ul
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                {
                  !!this.props.items ? (
                    this.props.items.map((entry) =>
                        <li key={entry.id}>
                          <button key={entry.id} onClick={() => this.props.onSelect(this.props.movie, entry.list)}>{entry.list.name}</button>
                        </li>
                    )
                  ) : (
                    null
                  )
                }
                <li>
                  <form onSubmit={()=>this.handleOnSubmit()}>
                    <input autoFocus placeholder="New List" value={this.state.text} onChange={(event)=>this.handleOnChange(event)} />
                  </form>
                </li>
              </ul>
            )
            : (
              null
            )
        }
      </div>
    )
  }
}


export default MovieDropdown
