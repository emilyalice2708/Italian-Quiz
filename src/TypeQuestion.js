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
                Type the capital of {card.question}
            </div>
            <div className={`type-answer ${visibility ? 'visible' : 'hidden'}`}>
                <div style={{backgroundColor: 'white', width: '50%', position: 'relative', left: 40, justifyContent: 'center', alignItems: 'center'}}>
                {card.answer}
                </div>
            </div>
            <form>
            <input type='text' value={inputText} onChange={handleChange}></input>
            <br/>
            <button className="form-button" onClick={checkAnswer}>Submit</button>
             </form>
             <div style={{backgroundColor: 'white', width: '50%', position: 'relative', left: 40, justifyContent: 'center', alignItems: 'center'}}>
                {result}
             </div>
            <br/>
            <button className="form-button" onClick={() => {setVisibility(!visibility)}}>Remind me!</button>
        </div>
    )
}