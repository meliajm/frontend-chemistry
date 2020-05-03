export const fetchAtoms = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_ATOMS'})
        fetch('http://localhost:3001/api/v1/atoms')
        .then(response => { return response.json()})
        // .then(response => { console.log(response.json())})
            // .then( atoms => console.log(atoms))
            .then( atoms => {dispatch({type: 'ADD_ATOMS', atoms: atoms})})

    }
}