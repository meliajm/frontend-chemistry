import React from 'react'
import { Link } from 'react-router-dom'

export default function Atom() {
    return (
        <div>
            Atom orbitals
            2,8
            <br/>            
            charge, forces of attraction
            <br/>
            valence electrons - bonding electrons
            <li>
                stability of outer most orbital
                2 or 8
                electrons in inner orbitals are more tightly bound to nucleus
            </li>
            <br/>
            who cares?
            <br/>
            <Link to='/ionicbond'>Ionic Bond</Link>
            <br/>
            <Link to='/covalentbond'>Covalent Bond</Link>

            <br/>
            <Link to='/ionicbond1'>Ionic Bond 1</Link>
            <br/>
            <Link to='/ionicbond2'>Ionic Bond 2</Link>
            <br/>
            <Link to='/ionicbondtest'>Test</Link>
            <br/>
        </div>
    )
}
