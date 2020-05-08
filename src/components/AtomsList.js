import React from 'react'
import AtomCard from './AtomCard'

// class AtomsList extends React.Component { need to add render back if use class component
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