import React from 'react'
import { Link } from 'react-router-dom'

export default function Atom() {
    return (
        <div>
            Atom orbitals
            <br/>
            strong force 
            <br/>
            nuclues
            <br/>
            charge
            <br/>
            electrons
            <br/>
            who cares?
            <br/>
            <Link to='/ionicbond'>Ionic Bond</Link>
            <br/>
            <Link to='/covalentbond'>Covalent Bond</Link>
        </div>
    )
}
