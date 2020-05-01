import React from 'react'
import { Link } from 'react-router-dom'

const AtomCard = ({ atom }) => {
    return (
        <>
        <Link to={`atoms/${atom.id}`}>{atom.name}<br/></Link>
        </>
    )
}


export default AtomCard
