import React, { Component } from 'react'
import Questions from '../components/Questions'
// import { connect } from 'react-redux'
import QuestionInput from '../components/QuestionInput'


export class QuestionsContainer extends Component {

    render() {
        return (
            <>
                <h4>Questions</h4>
                    <p>
                        <QuestionInput />
                    </p>
                    <Questions questions={this.props.questions} />
            </>
        )
    }
}

export default (QuestionsContainer)