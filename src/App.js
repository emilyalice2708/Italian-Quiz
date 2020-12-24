import './App.css';
import FlashCardGame from './FlashCardGame.js';
import React, { useState } from 'react';
import Menu from './Menu.js';
import AFRICA from './CapitalCities/Africa.js';
import ASIA from './CapitalCities/Asia.js';
import EUROPE from './CapitalCities/Europe.js';
import OCEANIA from './CapitalCities/Oceania.js';
import NORTHAMERICA from './CapitalCities/NorthAmerica.js'
import SOUTHAMERICA from './CapitalCities/SouthAmerica.js';
import TypeGame from './TypeGame.js';
import MultipleChoiceGame from './MultipleChoiceGame.js';


function App() {
  const [view, setView] = useState('menu')
  const [continent, setContinent] = useState(EUROPE)

  return (
    <div className="App">
      <div className='menu-button'>
        <button onClick={() => {setView('menu')}}>Menu</button>
      </div>
      <div className='header'>
        World Cities
      </div>
      <Menu 
        setView={setView} 
        view={view} 
        setContinent={setContinent} 
        asia={ASIA}
        africa={AFRICA} 
        europe={EUROPE} 
        northamerica={NORTHAMERICA}
        oceania={OCEANIA} 
        southamerica={SOUTHAMERICA}/>
      <FlashCardGame questions={continent} setView={setView} view={view}></FlashCardGame>
      <MultipleChoiceGame questions={continent} setView={setView} view={view}></MultipleChoiceGame>
      <TypeGame questions={continent} setView={setView} view={view}></TypeGame>
    </div>
  );
}

export default App;
