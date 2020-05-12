import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Stage, Layer, Text, Circle } from 'react-konva';
import Lithium from './Lithium'
import LithiumNucleus from './LithiumNucleus'

const AtomIntro = (props) =>{

    return (
        <>
        <p>
                <div>
                    <strong>What is an atom?</strong>
                </div> 
                <br/>

                <div>
                    Definition: The atom is the smallest object that retains the properties of an element.
                </div>
                <br/>
                <div>
                What is an atom made of?
                </div>
                <div className="proton">
                   <p>Protons,</p> 
                </div>
               
                <div className="electron">
                    <p>Electrons,</p>
                </div> 

                <div className="neutron">
                    <p>and Neutrons</p> 
                </div> 
                
                <br/>
        </p>
        <div><p><p>This is the nucleus for lithium:</p></p></div>
            <LithiumNucleus />
            <br/>
            <p>
                Protons have a positive charge. You can think of them as +1 unit of atomic charge.
                <br/>
                Neutrons have no charge. How are two positively charged particles held together?

                The Nuclear force or strong force relating to nuclear physics! Wow!
            </p>

            <p>
                Okay, this is awesome! We've covered a lot of ground so far. One more thing. What about those electrons?
                Electrons are negavitely charged; you can think of them as -1 unit of atomic charge.
            </p>

            <div><p><p>This is the atomic model of lithium:</p></p></div>
            <Lithium lithium={props.lithium}/>
            <p>
            <strong>Who cares about any of this anyways?</strong> 
            <br/>
                <li>
                    Foundations of chemistry are applicable in biology, materials science, medicine, mining
                </li>
                <li>
                    These fundamentals have widespread applications across many industries. 
                </li>
                <li>
                    Atoms are the building blocks of the world.
                </li>
            </p>
            <p>
            Want to learn more about <Link to='/theatom'>The Atom</Link>? 
                <br/>
                <br/>
                <Link to='/api/v1/atoms'>See a list of all 118 elements</Link>
                <br/>   
            </p>
        </>
        )
}

export default AtomIntro