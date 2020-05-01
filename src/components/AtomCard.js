import React from 'react'
import { Link } from 'react-router-dom'

const AtomCard = ({ atom }) => {
    return (
        <>
        <Link to={`api/v1/atoms/${atom.id}`}>{atom.name}<br/></Link>
        <p>{atom.symbol}</p>
    <p>{atom.atomic_number}</p>
        </>
    )
}


export default AtomCard
