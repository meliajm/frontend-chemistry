import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteQuestion } from '../actions/questionActions'

const Question = (props) => {
    return (
        <p>
        
        {console.log('q?', props)}
            <li>
                {props.question.content}
            </li>
            <Link to={`${props.question.id}/edit`}>Edit this question</Link>
            <br />
            <button
            onClick={() => props.deleteQuestion(props.question.id, props.history)}
            >Delete this question</button>
        </p>
    )
}

export default connect(null, {deleteQuestion})(Question)