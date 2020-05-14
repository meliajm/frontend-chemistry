import React from 'react'

const Question = props => {
    return (
        <>
            <li>
                {props.question.content}
                <br />
                
            </li>
        </>
    )
}

export default Question