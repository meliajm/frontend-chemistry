import React, { Component } from 'react'
import Questions from '../components/Questions'
// import { connect } from 'react-redux'
import QuestionInput from '../components/QuestionInput'


export class QuestionsContainer extends Component {


    // state = {
    //     questions: this.props.questions
    // }

    render() {
        // console.log("questions container", this.state)
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

// const mapStateToProps = state => {
//     return {
//     //   atoms: state.atomsReducer.atoms,
//     //   loading: state.atomsReducer.loading,
//     //   loggedIn: (Object.keys(state.currentUser).length === 0) ? false : true,
//       questions: state.questionsReducer.questions
//     }
//   }
  
//   const mapDispatchToProps = dispatch => {
//     return {
//       fetchQuestions: () => dispatch(fetchQuestions()),
//     }
//   }

//   export default (mapStateToProps, mapDispatchToProps)(QuestionsContainer)


// const mapStateToProps = state => {
//     return {
//       questions: state.questionsReducer.questions,
//     }
// }


// const QuestionsContainer = ({ questions }) => {

    // return (
    //     <>
    //         <h4>Questions</h4>
    //             <p>
    //                 <QuestionInput />
    //             </p>
    //             <Questions questions={questions} />
    //     </>
    // )
// }