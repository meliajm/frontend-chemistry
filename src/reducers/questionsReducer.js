const questionsReducer = (
    state = {
     questions: [], 
    }, 
     action
     ) => {

    switch(action.type) {
        case 'LOADING_QUESTIONS':
            return {
                ...state,
                questions: [...state.questions]
            }
        case 'ADD_QUESTIONS':
            return {
                ...state,
                questions: action.questions
            }
        case 'ADD_QUESTION':
            return {...state, questions: state.questions.concat(action.question)}
        case "UPDATE_QUESTION_SUCCESS":
            console.log("state in update question suc", state)
            console.log(action.question.id)
            console.log(state.questions)

            return Object.assign({}, state, {
                questions: state.questions.map(question => {
                  if (question.id !== action.question.id) {
                    return question
                  }
        
                  return Object.assign({}, question, {
                    content: action.question.content
                  })
                })
              })
            case "DELETE_QUESTION":    
                return {...state, questions: state.questions.filter(question => question.id!==action.questionId)}
        default:
            return state
    }
}

export default questionsReducer