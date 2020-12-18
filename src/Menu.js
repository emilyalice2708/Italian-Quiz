import React, { Component } from 'react';

export class Menu extends Component {
  render() {
    if (this.props.view !== 'menu') {
        return null
    } else {
    return (
        <div>
            <button onClick={() => {this.props.setContinent(this.props.europe)}}>Europe</button>
            <button onClick={() => {this.props.setContinent(this.props.oceania)}}>Oceania</button>
            <button onClick={() => {this.props.setView('flash-game')}}>Flashcards</button>
            <button onClick={() => {this.props.setView('type-game')}}>TypeGame</button>
        </div> 
    )
    }
  }
}

export default Menu;