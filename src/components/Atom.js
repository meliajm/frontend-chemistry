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

            <br/>
            <Link to='/ionicbond1'>Ionic Bond</Link>
            <br/>
            <Link to='/ionicbond2'>Ionic Bond 2</Link>
            <br/>
            <Link to='/ionicbondtest'>Test</Link>
            <br/>
        </div>
    )
}
