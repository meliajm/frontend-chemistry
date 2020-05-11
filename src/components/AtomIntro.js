import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const AtomIntro = () =>{

    return (
        <div>
                What is an atom?
                <br/>
                <br/>
                Atom: The atom is the smallest object that retains the properties of an element.
                <br/>
                https://www.chemicool.com/definition/atom.html
                <br/>
                what is an atom made of?
                <br/>
                protons, electrons, neutrons
                <br/>
                Whos cares about any of this?
                    -foundations of chemistry, biology, materials science
                    -widespread applications: medicine, mining
                    -crystal structures
                    
                <br/>
                <Link to='/theatom'>The Atom</Link>
                <br/>
                <Link to='/api/v1/atoms'>See a list of all 118 elements</Link>
                <br/>
            </div>
        )
}

export default AtomIntro