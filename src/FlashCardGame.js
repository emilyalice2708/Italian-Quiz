import React, { useState } from 'react';
import AllCards from './AllCards.js';

export default function FlashCardGame (props) {
   const [questions, setQuestions] = useState(QUESTIONS)
   if (props.view !== 'game') {
    return null
   } else {        
   return (
       <div>
        <AllCards questions={questions}></AllCards>
        <button onClick={() => {props.setView('menu')}}>Menu</button>
       </div>
   )}
}

const QUESTIONS = [{
    id: 1,
    question: 'One',
    answer: 'Uno',
    options: [
        'Uno', 
        'Dos', 
        'Tres']
},
{
    id: 2,
    question: 'Two',
    answer: 'Dos',
    options: [
        'Uno', 
        'Dos', 
        'Tres']
},
{
    id: 3,
    question: 'Three',
    answer: 'Tres',
    options: [
        'Uno', 
        'Dos', 
        'Tres']
}
]

