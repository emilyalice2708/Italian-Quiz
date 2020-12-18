import React, { useState } from 'react';
import './Question.css'

export default function TypeQuestion({ card }) {
    const [visibility, setVisibility] = useState(false)
    const [inputText, setInputText] = useState("")
    const [result, setResult] = useState("")

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    const checkAnswer = (e) => {
        e.preventDefault()
        if(card.answer.toLowerCase() === inputText.toLowerCase()) {
            setResult("Correct!")
        } else {
            setResult("Try again!")
        }
    }

    return (
        <div>
            <div className="type-question">
                {card.question}
            </div>
            <div className={`type-answer ${visibility ? 'visible' : 'hidden'}`}>
                {card.answer}
            </div>
            <form>
            <input type='text' value={inputText} onChange={handleChange}></input>
            <button onClick={checkAnswer}>Check Answer</button>
             </form>
             {result}
            <button onClick={() => {setVisibility(!visibility)}}>Show Answer</button>
        </div>
    )
}