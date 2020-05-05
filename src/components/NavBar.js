import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <nav className="nav">
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/intro'>Atom Intro</Link>
            <br/>
            <Link to='/login'>Log In</Link>
        </nav>
    )
}