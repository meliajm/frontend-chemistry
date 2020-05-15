import React, { Component } from 'react'
import Questions from '../components/Questions'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/questionActions'
import QuestionInput from '../components/QuestionInput'

// add a qustion

class QuestionsContainer extends Component {

  componentDidMount() {
    console.log('uc p', this.props)
    this.props.fetchQuestions()
  }
  render() {
      console.log('uc', this.props)
    return (
      <div className="div">
        <QuestionInput />

        <Questions questions={this.props.questions} question={this.props.question} />
        {/* addQuestion={this.props.addQuestion} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state mstp', state)
  return {
    questions: state.questionsReducer.questions,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer)

