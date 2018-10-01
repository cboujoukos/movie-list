import React, { Component } from 'react';

class DropDown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
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
                <li><button> Menu item 1 </button></li>
                <li><button> Menu item 2 </button></li>
                <li><button> Menu item 3 </button></li>
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


export default DropDown
