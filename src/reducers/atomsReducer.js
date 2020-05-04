const atomsReducer = (
    state = {
     atoms: [], 
     loading: false,
     users: []
    }, 
     action
     ) => {

    switch(action.type) {
        case 'LOADING_ATOMS':
            return {
                ...state,
                atoms: [...state.atoms],
                loading: true,
                users: [...state.users]
            }
        case 'ADD_ATOMS':
            return {
                ...state,
                atoms: action.atoms,
                loading: false,
                users: [...state.users]
            }
        case 'ADD_USER':
            return {
                ...state,
                atoms: [...state.atoms],
                loading: false,
                users: [...state.users, action.user]
            }
        default:
            return state
    }
}

export default atomsReducer