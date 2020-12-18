import React, { useState } from 'react';
import './Question.css'

export default function TypeQuestion({ card }) {
    const [visibility, setVisibility] = useState(false)

    return (
        <div>
            <div className="type-question">
                {card.question}
            </div>
            <div className={`type-answer ${visibility ? 'visible' : 'hidden'}`}>
                {card.answer}
            </div>
            <button onClick={() => {setVisibility(!visibility)}}>Show Answer</button>
        </div>
    )
}