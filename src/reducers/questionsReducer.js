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
            console.log(action)
            // return {...state, questions: state.questions.concat(action.question.content)}
            return {...state, questions: [...state.questions, action.question.content]}
        case "UPDATE_QUESTION_SUCCESS":
            return state.questions.map ( question => {
                if (question.id === action.question.id) {
                    return action.question
                } else {
                    return question
                }
            })
        case "DELETE_QUESTION":
            return {...state, questions: state.questions.filter(question => question.id!==action.id)}
        default:
            return state
    }
}

export default questionsReducer