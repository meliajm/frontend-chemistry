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

export const updateQuestion = (question) => {
    return dispatch => {
        const body = {
            question
        }
        return fetch(`http://localhost:3001/api/v1/questions/${question.id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then( response => response.json())
            .then( question => {
                if (question.error) {
                    console.log(question.error)
                } else {
                    dispatch(updateQuestionSuccess(question))
                }
                return question
            })
    }
}

export const updateQuestionSuccess = question => ({ type: "UPDATE_QUESTION_SUCCESS", question })

export const deleteQuestion = (questionId, routerProps) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/questions/${questionId}`, {
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