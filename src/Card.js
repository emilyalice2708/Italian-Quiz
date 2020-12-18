import React, { useState } from 'react';

export default function Card({ card }) {
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <div onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? card.answer : card.question}
        </div>
    )
}