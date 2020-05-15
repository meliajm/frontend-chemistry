import React, { Component } from 'react'
import Questions from '../components/Questions'
import Question from '../components/Question'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/questionActions'
import QuestionInput from '../components/QuestionInput'
import QuestionEdit from '../components/QuestionEdit'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import SideBar from './SideBar'

// add a question // rethink how to set up question container with
// routing

const QuestionsContainer = ({ questions }) => {
    console.log('qu c', questions)

    // hook?

    return (
        <>
            <h4>Questions</h4>
                <p>
                    <QuestionInput />
                </p>
                <Questions questions={questions} />
                <Switch>
                    {/* <Route exact path="/questions/:id" 
                        render={(routerProps) => {
                            console.log('route quest id', routerProps.match.params.id)
                            const question = questions.find(question => question.id === parseInt(routerProps.match.params.id))
                            return <Question {...routerProps} question={question} />
                        }}/>
                    <Route exact path="/questions/:id/edit"
                        render={(routerProps) => {
                            const question = questions.find(question => question.id === parseInt(routerProps.match.params.id))
                            return <QuestionEdit {...routerProps} question={question} />
                       }} /> */}
                </Switch>
                    {/* <p>
                        <Link to='/questions/:id'>Questions</Link>
                    </p> */}
        </>
    )
}

const mapStateToProps = state => {
    return {
      questions: state.questionsReducer.questions,
    }
  }

export default connect(mapStateToProps)(QuestionsContainer)

// class QuestionsContainer extends Component {

//   componentDidMount() {
//     console.log('uc p', this.props)
//     this.props.fetchQuestions()
//   }
//   render() {
//       console.log('uc', this.props)
//     return (
//       <div className="div">
//         <QuestionInput />

//         <Questions questions={this.props.questions} question={this.props.question} />
//         <QuestionEdit />
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   console.log('state mstp', state)
//   return {
//     questions: state.questionsReducer.questions,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchQuestions: () => dispatch(fetchQuestions()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer)

