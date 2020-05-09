const atomsReducer = (
    state = {
     atoms: [], 
     loading: false,
     sodium: "",
     chlorine: "",
    //  users: [],
    //  currentUser: ""
    }, 
     action
     ) => {

    switch(action.type) {
        case 'LOADING_ATOMS':
            return {
                ...state,
                atoms: [...state.atoms],
                loading: true
                // users: [...state.users]
            }
        case 'ADD_ATOMS':
            return {
                ...state,
                atoms: action.atoms,
                loading: false
                // users: [...state.users]
            }
        case 'LOADING_USERS':
            return {
                ...state,
                // users: [...state.users]
            }
        // case 'ADD_USERS':
        //     return {
        //         ...state,
        //         // users: action.users
        //     }
        // case 'ADD_USER':
        //     console.log('reducer action', action)
        //     const user = {
        //         id: cuid(),
        //         email: action.email,
        //         password: action.password
        //     }
        //     return { ...state, users: state.users.concat(user)}
            // return {
            //     ...state,
            //     atoms: [...state.atoms],
            //     loading: false,
            //     users: [...state.users, action.user]
            // }
        default:
            return state
    }
}

export default atomsReducer