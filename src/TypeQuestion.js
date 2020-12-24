import React, { useState } from 'react';
import './Question.css'

export default function TypeQuestion({ card, setIndex, index }) {
    const [visibility, setVisibility] = useState(false)
    const [inputText, setInputText] = useState("")
    const [result, setResult] = useState("")

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    const checkAnswer = (e) => {
        e.preventDefault()
        if(card.answer.toLowerCase() === inputText.toLowerCase()) {
            setIndex(index + 1)
        } else {
            setResult("Try again!")
        }
    }

    return (
        <div>
            <div className="type-question">
                Type the capital of {card.question}
            </div>
            <div className={`type-answer ${visibility ? 'visible' : 'hidden'}`}>
                <div>
                {card.answer}
                </div>
            </div>
            <form>
            <input type='text' value={inputText} onChange={handleChange}></input>
            <br/>
            <button className="form-button" onClick={checkAnswer}>Submit</button>
             </form>
             <div>
                {result}
             </div>
            <br/>
            <button className="form-button" onClick={() => {setVisibility(!visibility)}}>Remind me!</button>
        </div>
    )
}