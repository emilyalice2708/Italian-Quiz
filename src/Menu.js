import React, {  useState } from 'react';

export default function Menu(props) {
  const [pressed, setPressed] = useState('eur')
  
  if (props.view !== 'menu') {
      return null
  } else {
  return (
      <div>
        <div>
            <button className={pressed == 'asi' ? "pressed" : ""} onClick={() => {props.setContinent(props.asia); setPressed('asi')}}>Asia</button>
            <button className={pressed == 'afr' ? "pressed" : ""} onClick={() => {props.setContinent(props.africa); setPressed('afr')}}>Africa</button>
            <button className={pressed == 'eur' ? "pressed" : ""} onClick={() => {props.setContinent(props.europe); setPressed('eur')}}>Europe</button>
            <button className={pressed == 'nam' ? "pressed" : ""} onClick={() => {props.setContinent(props.northamerica); setPressed('nam')}}>North America</button>
            <button className={pressed == 'oce' ? "pressed" : ""} onClick={() => {props.setContinent(props.oceania); setPressed('oce')}}>Oceania</button>
            <button className={pressed == 'sam' ? "pressed" : ""} onClick={() => {props.setContinent(props.southamerica); setPressed('sam')}}>South America</button>
        </div> 
        <div>   
            <button onClick={() => {props.setView('flash-game')}}>Flashcards</button>
            <button onClick={() => {props.setView('multiple-choice-game')}}>Multiple Choice Game</button>
            <button onClick={() => {props.setView('type-game')}}>TypeGame</button>
        </div> 
      </div>
  )
  }
  
}

