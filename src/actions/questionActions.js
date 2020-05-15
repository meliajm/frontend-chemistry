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

export const addQuestion = (question) => {
    return dispatch => {
        const body = {
            question
        }
        return fetch("http://localhost:3001/api/v1/questions", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then( newQuestion => {
            if (newQuestion.error) {
                console.log(newQuestion.error)
            } else {
                dispatch(addQ(newQuestion))
            }
            return newQuestion
        })
    }
}

export const addQ = question => ({ type: "ADD_QUESTION", question})