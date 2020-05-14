export const fetchQuestions = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_QUESTIONS'})
        fetch('http://localhost:3001/api/v1/questions')
        .then(response => { return response.json()})
        .then( questions => {dispatch(addQuestions(questions))})
    }
}

const addQuestions = questions => ({
    type: 'ADD_QUESTIONS',
    questions
})