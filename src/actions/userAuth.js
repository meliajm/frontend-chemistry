// imports for resetting forms

export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: 'CLEAR_CURRENT_USER'
    }
}

export const login = (credentials, routerProps) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: 'include',
            method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    console.log(response.error)
                } else {
                    dispatch(setCurrentUser(response.data))
                    //reset form
                    routerProps.push('/')
                }
            })
            .catch(console.log)
    }
}

export const signup = (credentials, routerProps) => {
    return dispatch => {
        const userCred = {
            user: credentials
        }
        return fetch("http://localhost:3001/api/v1/signup", {
            credentials: "include",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCred)
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    console.log(response.error)
                } else {
                    dispatch(setCurrentUser(response.data))
                    // reset form
                    routerProps.push('/')
                }
            })
            .catch(console.log)
    }
}

export const logout = event => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3001/api/v1/logout', {
            credentials: "include",
            method: "POST"
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/get_current_user', {
            credentials: "include",
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response=>response.json())
            .then(response => {
                if (response.error) {
                    console.log(response.error)
                } else {
                    dispatch(setCurrentUser(response.data))
                }
            })
            .catch(console.log)
    }
}

export const updateLoginForm = (formData) => {
    return {
        type: "UPDATE_LOGIN_FORM",
        formData
    }
}