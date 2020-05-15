import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({ questions }) => {
    const questionLinks = questions.map ( (question, i) => (
        <>
        <Link key={question.id} to={`/questions/${question.id}`}>
    {i}. {question.content}
        </Link>
        <br/> 
        </>
    ))
    return (
        <p>  
            { questionLinks}
        </p>

    )
}

export default SideBar