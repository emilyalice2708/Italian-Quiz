import './App.css';
import FlashCardGame from './FlashCardGame.js';
import React, { useState } from 'react';
import Menu from './Menu.js'


function App() {
  const [view, setView] = useState('menu')

  return (
    <div className="App">
      <Menu setView={setView} view={view} />
      <FlashCardGame setView={setView} view={view}></FlashCardGame>
    </div>
  );
}

export default App;
