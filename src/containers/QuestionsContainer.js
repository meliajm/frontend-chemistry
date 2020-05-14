import React, { Component } from 'react'
import Questions from '../components/Questions'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/questionActions'

class QuestionsContainer extends Component {

  componentDidMount() {
    console.log('uc p', this.props)
    this.props.fetchQuestions()
  }
  render() {
      console.log('uc', this.props)
    return (
      <div className="div">
        <Questions questions={this.props.questions} />
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

