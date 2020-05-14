import React from 'react'
import Question from './Question'

export default function Questions(props) {
    return (
        <div>
            <strong>Questions</strong>
            <br/>
            <br/>
            {props.questions.map( question => <Question question={question}
            key={question.id}
            />)} 
            
        </div>
    )
}
