import React from 'react'
import { Link } from 'react-router-dom'

export default function IonicBondMain() {
    return (
        <p>
            ionic bond main


            <Link to='/covalentbond'>Covalent Bond</Link>

            <br/>
            <Link to='/ionicbond1'>Ionic Bond 1</Link>
            <br/>
            <Link to='/ionicbond2'>Ionic Bond 2</Link>
            <br/>
            <Link to='/ionicbondtest'>Test</Link>
            <br/>
        </p>
    )
}
