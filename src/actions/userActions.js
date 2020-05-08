export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_USERS'})
        fetch('http://localhost:3001/api/v1/users')
        .then(response => { return response.json()})
        .then( users => {dispatch(addUsers(users))})
    }
}

const addUsers = users => ({
    type: 'ADD_USERS',
    users
})