export const fetchAtoms = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_ATOMS'})
        // fetch('http://localhost:3001/api/v1/atoms')
        fetch('https://warm-fortress-71971.herokuapp.com/api/v1/atoms')
        .then(response => { return response.json()})
        .then( atoms => {dispatch(addAtoms(atoms))})
    }
}

const addAtoms = atoms => ({
    type: 'ADD_ATOMS',
    atoms
})