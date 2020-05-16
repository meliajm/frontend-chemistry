import React from 'react'
import { Link } from 'react-router-dom'

const QuestionCard = ({ question }) => {
    return (
        <p>
         <Link to={`questions/${question.id}`}>{question.content}<br/></Link>
        </p>
    )
}

export default QuestionCard