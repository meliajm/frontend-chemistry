export const fetchQuestions = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_QUESTIONS'})
        fetch('https://warm-fortress-71971.herokuapp.com/api/v1/questions')
        .then(response => { return response.json()})
        .then( questions => {dispatch(addQuestions(questions))})
    }
}

const addQuestions = questions => ({
    type: 'ADD_QUESTIONS',
    questions
})

export const addQuestion = (question, routerProps) => {
    return dispatch => {
        return fetch("https://warm-fortress-71971.herokuapp.com/api/v1/questions", {
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
            if (newQuestion.error) {
                console.log(newQuestion.error)
            } else {
                dispatch(addQ(newQuestion))
                // routerProps.history.push('/questions')
            }
            // return newQuestion
        })
    }
}

export const addQ = question => ({ type: "ADD_QUESTION", question})

export const updateQuestion = (question, routerProps) => {
    return dispatch => {
        return fetch(`https://warm-fortress-71971.herokuapp.com/api/v1/questions/${question.id}`, {
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
        return fetch(`https://warm-fortress-71971.herokuapp.com/api/v1/questions/${questionId}`, {
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