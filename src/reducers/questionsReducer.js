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
            return {...state, questions: state.questions.concat(action.question.content)}
        default:
            return state
    }
}

export default questionsReducer