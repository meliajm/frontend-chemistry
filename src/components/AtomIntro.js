import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const AtomIntro = () =>{

    return (
        <p>
                <div>
                    <strong>What is an atom?</strong>
                </div> 
                <br/>

                <div>
                    Definition: The atom is the smallest object that retains the properties of an element.
                </div>
                <div>
                What is an atom made of?
                </div>
                <div className="proton">
                   <p>Protons</p> 
                </div>
               
                <div className="electron">
                    <p>Electrons,</p>
                </div> 

                <div className="neutron">
                    <p>and Neutrons</p> 
                </div> 
                                
                <br/>
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
            </p>
        )
}

export default AtomIntro