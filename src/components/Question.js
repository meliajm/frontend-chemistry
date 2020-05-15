import React from 'react'
import { connect } from 'react-redux'

const Question = (props) => {
    return (
        <>
        hi
        {console.log('q?', props)}
            <li>
                {props.question.content}
                {/* {props.question}              */}
            </li>
        </>
    )
}

export default Question