import React from 'react'
import QuestionCard from './QuestionCard'

export default function Questions(props) {
    console.log('Questions', props)
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