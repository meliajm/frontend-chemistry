import React from 'react'
import AtomCard from './AtomCard'

const AtomsList = props => {

    const atomsRender = props.atoms.map((atom, i) => (
        <AtomCard key={i} atom={atom} />
        ))

    return (
        <>
            <h3>Atoms</h3>
            {atomsRender}  
        </>
    )
}

export default AtomsList