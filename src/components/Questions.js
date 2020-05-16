import React from 'react'
import QuestionCard from './QuestionCard'
import QuestionInput from '../components/QuestionInput'

export default function Questions(props) {
    console.log('Questions', props)
    return (
        <div>
            {/* <strong>Questions</strong> */}
            {/* <br/>
            <br/> */}
            {/* <QuestionInput /> */}
            {props.questions.map( question => <QuestionCard question={question}
            key={question.id}
            />)} 
        </div>
    )
}