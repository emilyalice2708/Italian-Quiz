import './App.css';
import FlashCardGame from './FlashCardGame.js';
import React, { useState } from 'react';
import Menu from './Menu.js';
import TypeGame from './TypeGame.js';


function App() {
  const [view, setView] = useState('menu')
  const[continent, setContinent] = useState(EUROPE)

  return (
    <div className="App">
      World Cities
      <Menu setView={setView} view={view} setContinent={setContinent} europe={EUROPE} oceania={OCEANIA}/>
      <FlashCardGame questions={continent} setView={setView} view={view}></FlashCardGame>
      <TypeGame questions={continent} setView={setView} view={view}></TypeGame>
    </div>
  );
}

const EUROPE = [{
  id: 1,
  question: 'Italy',
  answer: 'Rome',
},
{
  id: 2,
  question: 'Spain',
  answer: 'Madrid',
},
{
  id: 3,
  question: 'France',
  answer: 'Paris',
}
]

const OCEANIA = [{
  id: 1,
  question: 'Australia',
  answer: 'Canberra',
},
{
  id: 2,
  question: 'Fiji',
  answer: 'Suva',
},
{
  id: 3,
  question: 'Kiribati',
  answer: 'Tarawa',
}
]

export default App;
