export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_USERS'})
        fetch('https://warm-fortress-71971.herokuapp.com/api/v1/users')
        .then(response => { return response.json()})
        .then( users => {dispatch(addUsers(users))})
    }
}

const addUsers = users => ({
    type: 'ADD_USERS',
    users
})