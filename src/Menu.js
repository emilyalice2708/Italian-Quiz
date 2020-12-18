import React, { Component } from 'react';

export class Menu extends Component {
  render() {
    if (this.props.view !== 'menu') {
        return null
    } else {
    return (
        <div>
            <button onClick={() => {this.props.setView('game')}}>Flashcards</button>
        </div> 
    )
    }
  }
}

export default Menu;