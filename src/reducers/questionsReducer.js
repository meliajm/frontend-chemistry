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
       
            
        default:
            return state
    }
}

export default questionsReducer


  
// const questionsReducer = (
//     state = {
//      questions: [], 
//      loading: false,
//     }, 
//      action
//      ) => {

//     switch(action.type) {
//         case 'LOADING_QUESTIONS':
//             return {
//                 ...state,
//                 questions: [...state.questions],
//                 loading: true
//             }
//         case 'ADD_QUESTIONS':
//             return {
//                 ...state,
//                 questions: action.questions,
//                 loading: false
//             }
       
//         default:
//             return state
//     }
// }

// export default questionsReducer




  
