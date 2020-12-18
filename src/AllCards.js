import React from 'react';
import Card from './Card.js'

export default function AllCards({ questions }) {

    return (
        <div classname="flashcards">
            {questions.map(card => {
                return <Card card={card} key={card.id}/>
            })}
        </div>
    )
}

