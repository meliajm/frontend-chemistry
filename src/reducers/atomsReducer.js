const atomsReducer = (
    state = {
     atoms: [], loading: false}, 
     action
     ) => {

    switch(action.type) {
        case 'LOADING_ATOMS':
            return {
                ...state,
                atoms: [...state.atoms],
                loading: true
            }
        case 'ADD_ATOMS':
            return {
                ...state,
                atoms: action.atoms,
                loading: false
            }
        default:
            return state
    }
}

export default atomsReducer