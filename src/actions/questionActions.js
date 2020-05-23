// import baseURL from './baseURL'

// const baseURL = "http://localhost:3001/api/v1/"
const baseURL = "https://warm-fortress-71971.herokuapp.com/api/v1/"
// export const baseURL = "http://localhost:3002/api/v1/"

export const fetchQuestions = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_QUESTIONS'})
        fetch(baseURL+'questions')
        .then(response => { return response.json()})
        .then( questions => {dispatch(addQuestions(questions))})
    }
}

const addQuestions = questions => ({
    type: 'ADD_QUESTIONS',
    questions
})

export const addQuestion = (question, routerProps) => {
    console.log('b')
    return dispatch => {
        console.log('c')
        return fetch(baseURL+"questions", {
            credentials: "include",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({question: question})
        })
        .then(response => response.json())
        .then( newQuestion => {
            console.log('qaaaaAA', newQuestion)
            console.log('d')
            if (newQuestion.error) {
                console.log(newQuestion.error)
            } else {
                dispatch(addQ(newQuestion))
                // routerProps.history.push('/questions')
            }
            // return newQuestion
        })
        console.log('e')
    }
    console.log('f')
}

export const addQ = question => ({ type: "ADD_QUESTION", question})

export const updateQuestion = (question, routerProps) => {
    return dispatch => {
        return fetch(baseURL+`questions/${question.id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({question: question})
        })
            .then( response => response.json())
            .then( question => {
                if (question.error) {
                    console.log(question.error)
                } else {
                    dispatch(updateQuestionSuccess(question))
                    // routerProps.push('/questions')
                }
                // return question
            })
    }
}

export const updateQuestionSuccess = question => ({ type: "UPDATE_QUESTION_SUCCESS", question })

export const deleteQuestion = (questionId, routerProps) => {
    return dispatch => {
        return fetch(baseURL+`questions/${questionId}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .finally( resp => {
                    dispatch(deleteQuestionSuccess(questionId))
                    routerProps.push('/questions')
                    // console.log(routerProps)
             })   
    }
}

export const deleteQuestionSuccess = questionId => {
    return {
        type: "DELETE_QUESTION",
        questionId
    }
}