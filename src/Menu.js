import React, {  useState } from 'react';

export default function Menu(props) {
  const [pressed, setPressed] = useState('eur')
  
  if (props.view !== 'menu') {
      return null
  } else {
  return (
      <div>
        <div>
            <button className={pressed == 'eur' ? "pressed" : ""} onClick={() => {props.setContinent(props.europe); setPressed('eur')}}>Europe</button>
            <button className={pressed == 'oce' ? "pressed" : ""} onClick={() => {props.setContinent(props.oceania); setPressed('oce')}}>Oceania</button>
        </div> 
        <div>   
            <button className="menu-button" onClick={() => {props.setView('flash-game')}}>Flashcards</button>
            <button className="menu-button" onClick={() => {props.setView('type-game')}}>TypeGame</button>
        </div> 
      </div>
  )
  }
  
}

