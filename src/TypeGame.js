import React, { useState } from 'react';
import TypeQuestion from './TypeQuestion.js';

export default function TypeGame(props) {
    const [index, setIndex] = useState(0)
    
    if (props.view !== 'type-game') {
        return null
    } else {        
    return (
        <div>
            <TypeQuestion setIndex={setIndex} index={index} card={props.questions[index]} key={props.questions[index].id}/> 
            <button onClick={() => {setIndex((index + 1) % props.questions.length)}}>Pass</button>
        </div>
    )}
}

