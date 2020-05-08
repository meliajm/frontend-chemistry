const usersReducer = (
    state = {
     users: [], 
    }, 
     action
     ) => {

    switch(action.type) {
        case 'LOADING_USERS':
            return {
                ...state,
                users: [...state.users]
            }
        case 'ADD_USERS':
            return {
                ...state,
                users: action.users
            }
       
            
        default:
            return state
    }
}

export default usersReducer


  