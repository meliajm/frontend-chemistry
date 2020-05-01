import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <nav className="nav">
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/api/v1/atoms'>Atoms</Link>
        </nav>
    )
}