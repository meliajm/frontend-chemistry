import React from 'react'
import AtomCard from './AtomCard'

// class AtomsList extends React.Component { need to add render back if use class component
const AtomsList = (atoms) => {
    console.log('al', atoms)

    const atomsRender = atoms.map((atom, i) => (
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