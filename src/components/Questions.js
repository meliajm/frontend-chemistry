import React from 'react'
import QuestionCard from './QuestionCard'
import Question from './Question'

export default function Questions(props) {
    return (
        <div>
            {/* <strong>Questions</strong> */}
            {/* <br/>
            <br/> */}
            {props.questions.map( question => <QuestionCard question={question}
            key={question.id}
            />)} 
            
        </div>
    )
}