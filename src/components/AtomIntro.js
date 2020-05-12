import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Stage, Layer, Text, Circle } from 'react-konva';

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
                
                <Link to='/theatom'>The Atom</Link>
                <br/>
                <Link to='/api/v1/atoms'>See a list of all 118 elements</Link>
                <br/>
        </p>
        <div><p><p>This is the nucleus for lithium:</p></p></div>
        <>
        <Stage width={window.innerWidth} height={window.innerHeight/5}>
                <Layer>
                        <Circle
                        x={440}
                        y={50}
                        radius={10}
                        fill="#3122bb"
                        />
                        <Text
                        x={435}
                        y={45}
                        text="+"
                        fill="white"
                        />
                        <Circle
                        x={480}
                        y={50}
                        radius={10}
                        fill="#3122bb"
                        />
                        <Text
                        x={475}
                        y={45}
                        text="+"
                        fill="white"
                        />
                        <Circle
                        x={460}
                        y={90}
                        radius={10}
                        fill="#3122bb"
                        />
                        <Text
                        x={455}
                        y={85}
                        text="+"
                        fill="white"
                        />
                        <Circle
                        x={460}
                        y={50}
                        radius={10}
                        fill="#164624"
                        />
                        <Text
                        x={455}
                        y={45}
                        text="N"
                        fill="white"
                        />
                        <Circle
                        x={460}
                        y={70}
                        radius={10}
                        fill="#164624"
                        />
                        <Text
                        x={455}
                        y={65}
                        text="N"
                        fill="white"
                        />
                        <Circle
                        x={440}
                        y={75}
                        radius={10}
                        fill="#164624"
                        />
                        <Text
                        x={435}
                        y={70}
                        text="N"
                        fill="white"
                        />
                        <Circle
                        x={480}
                        y={75}
                        radius={10}
                        fill="#164624"
                        />
                        <Text
                        x={475}
                        y={70}
                        text="N"
                        fill="white"
                        />
                    </Layer>
                </Stage>
            </>
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
            <Stage width={window.innerWidth} height={window.innerHeight/1.75}>
                <Layer>
                {console.log(parseInt(props.lithium.atomic_radius))}

                        <Circle
                        x={460}
                        y={185}
                        radius={40}
                        fill="#243470"
                        />
                        <Text
                        x={435}
                        y={45}
                        text="+"
                        fill="white"
                        />
                        <Text
                        x={475}
                        y={45}
                        text="+"
                        fill="white"
                        />
                        <Text
                        x={455}
                        y={85}
                        text="+"
                        fill="white"
                        />
                        <Circle
                        x={460}
                        y={185}
                        radius={parseInt(props.lithium.atomic_radius)}
                        stroke="black"
                        />
                        <Circle
                        x={460}
                        y={185}
                        radius={parseInt(props.lithium.atomic_radius)/1.5}
                        stroke="black"
                        />
                        <Circle
                        x={460}
                        y={185-parseInt(props.lithium.atomic_radius)/1.5}
                        radius={5}
                        fill="#fd0000"
                        dragBoundFunc = {
                            function(pos) {
                                const x = 460
                                const y = 185-parseInt(props.lithium.atomic_radius)/1.5
                                const radius = 10
                                let scale = 
                                radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
                                if (scale < 1) {
                                return {
                                    y: Math.round((pos.y - y) * scale + y),
                                    x: Math.round((pos.x - x) * scale + x)
                                }
                                }
                                else {
                                return pos
                                }
                            }
                            }
                        draggable 
                        />
                        <Circle
                        x={460}
                        y={185+parseInt(props.lithium.atomic_radius)/1.5}
                        radius={5}
                        fill="#fd0000"
                        dragBoundFunc = {
                            function(pos) {
                                const x = 460
                                const y = 185+parseInt(props.lithium.atomic_radius)/1.5
                                const radius = 10
                                let scale = 
                                radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
                                if (scale < 1) {
                                return {
                                    y: Math.round((pos.y - y) * scale + y),
                                    x: Math.round((pos.x - x) * scale + x)
                                }
                                }
                                else {
                                return pos
                                }
                            }
                            }
                        draggable 
                        />
                         <Circle
                        x={460+parseInt(props.lithium.atomic_radius)}
                        y={185}
                        radius={5}
                        fill="#fd0000"
                        dragBoundFunc = {
                            function(pos) {
                                const x = 460+parseInt(props.lithium.atomic_radius)
                                const y = 185
                                const radius = 50
                                let scale = 
                                radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
                                if (scale < 1) {
                                return {
                                    y: Math.round((pos.y - y) * scale + y),
                                    x: Math.round((pos.x - x) * scale + x)
                                }
                                }
                                else {
                                return pos
                                }
                            }
                            }
                        draggable 
                        />
                        
                        
                        
                </Layer>
            </Stage>
            <p>
            <strong>Whos cares about any of this?</strong> 
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
                
        </>
        )
}

export default AtomIntro