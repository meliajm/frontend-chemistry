// import baseURL from './baseURL'

// const baseURL = "http://localhost:3001/api/v1/"
const baseURL = "https://warm-fortress-71971.herokuapp.com/api/v1/"
// export const baseURL = "http://localhost:3002/api/v1/"

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_USERS'})
        fetch(baseURL+'users')
        .then(response => { return response.json()})
        .then( users => {dispatch(addUsers(users))})
    }
}

const addUsers = users => ({
    type: 'ADD_USERS',
    users
})