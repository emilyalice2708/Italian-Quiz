import React, { useState } from 'react';
import AllCards from './AllCards.js';

export default function FlashCardGame (props) {

   if (props.view !== 'flash-game') {
    return null
   } else {        
   return (
       <div style={{color: 'black'}}>
        <AllCards questions={props.questions}></AllCards>
       </div>
   )}
}


