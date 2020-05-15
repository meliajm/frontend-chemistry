import React from 'react'
import { connect } from 'react-redux'

const Question = (props) => {
    return (
        <>
        {console.log('q', props)}
            <li>
                {props.question.content}
                {/* {props.question}              */}
            </li>
        </>
    )
}

// const mapStateToProps = state => {
//     return {
//       questions: state.questionReducer.questions,
//     }
//   }

export default Question