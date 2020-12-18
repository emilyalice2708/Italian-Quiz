import React, { useState } from 'react';
import AllCards from './AllCards.js';

export default function FlashCardGame () {
   const [questions, setQuestions] = useState(QUESTIONS)

   return (
       <AllCards questions={questions}></AllCards>
   )
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

