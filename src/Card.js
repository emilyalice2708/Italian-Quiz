import React, { useState } from 'react';
import './Card.css'

export default function Card({ card }) {
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <div className={`card ${showAnswer ? 'show-answer' : ''}`} onClick={() => setShowAnswer(!showAnswer)}>
            <div className="question">
                {card.question}
            </div>
            <div className="answer">
                {card.answer}
            </div>
        </div>
    )
}