import './App.css';
import FlashCardGame from './FlashCardGame.js';
import React, { useState } from 'react';
import Menu from './Menu.js';
import EUROPE from './Europe.js';
import OCEANIA from './Oceania.js';
import TypeGame from './TypeGame.js';
import MultipleChoiceGame from './MultipleChoiceGame.js';


function App() {
  const [view, setView] = useState('menu')
  const [continent, setContinent] = useState(EUROPE)

  return (
    <div className="App">
      World Cities
      <Menu setView={setView} view={view} setContinent={setContinent} europe={EUROPE} oceania={OCEANIA}/>
      <FlashCardGame questions={continent} setView={setView} view={view}></FlashCardGame>
      <MultipleChoiceGame questions={continent} setView={setView} view={view}></MultipleChoiceGame>
      <TypeGame questions={continent} setView={setView} view={view}></TypeGame>
    </div>
  );
}

export default App;
