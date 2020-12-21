import React, { useState } from 'react';

export default function MultipleChoiceGame(props) {
    const [index, setIndex] = useState(0)
    const [result, setResult] = useState("")

    const AnswerRandomizer = (questions) => {
        const choices = [...questions]
        choices.splice(index, 1)
        const choiceOneIndex = Math.round(Math.random() * (choices.length - 1))
        const choiceOne = choices[choiceOneIndex]
        choices.splice(choiceOneIndex, 1)
        const choiceTwo = choices[Math.round(Math.random() * (choices.length - 1))]
        return [choiceOne, choiceTwo, questions[index]]
    }

    const shuffle = (array) => {
        return array.map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])
    } 

    const checkAnswer = (answer) => {
        if(Question.answer.toLowerCase() === answer.toLowerCase()) {
            setResult("Correct!")
            setTimeout(() => {
                setIndex((index + 1) % props.questions.length)
                setResult("")
            }, 1000)
        } else {
            setResult("Try again!")
            console.log("no")
        }
    }

    const Choices = shuffle(AnswerRandomizer(props.questions))

    const Question = props.questions[index]
    
    if (props.view !== 'multiple-choice-game') {
        return null
    } else {        
    return (
        <div>
            <div>{Question.question}</div>
            <button onClick={() => {checkAnswer(Choices[0].answer)}}>{Choices[0].answer}</button>
            <button onClick={() => {checkAnswer(Choices[1].answer)}}>{Choices[1].answer}</button>
            <button onClick={() => {checkAnswer(Choices[2].answer)}}>{Choices[2].answer}</button>
            <button onClick={() => {props.setView('menu')}}>Menu</button>
            {result}
        </div>
    )}
}

