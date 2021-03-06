import React from 'react'
import { Stage, Layer, Text, Circle } from 'react-konva';

export default function Lithium(props) {
    const xStart = 460
    const yStart = 185
    const radius = 40
    // const yText1 = 45
    // const yText2 = 85
    const tightEBound = 10
    const outerEBound = 50
    const electronRadius = 5

    return (
        <>
            <Stage width={window.innerWidth} height={window.innerHeight/1.75}>
                <Layer>
                {console.log(parseInt(props.lithium.atomic_radius))}

                        <Circle
                        x={xStart}
                        y={yStart}
                        radius={parseInt(props.lithium.atomic_radius)/4}
                        fill="#243470"
                        />
                        <Text
                        x={xStart+20}
                        y={yStart}
                        text="+"
                        fill="white"
                        />
                        <Text
                        x={xStart-20}
                        y={yStart}
                        text="+"
                        fill="white"
                        />
                        <Text
                        x={xStart}
                        y={yStart+20}
                        text="+"
                        fill="white"
                        />
                        <Circle
                        x={xStart}
                        y={yStart}
                        radius={parseInt(props.lithium.atomic_radius)}
                        stroke="black"
                        />
                        <Circle
                        x={xStart}
                        y={yStart}
                        radius={parseInt(props.lithium.atomic_radius)/1.5}
                        stroke="black"
                        />
                        <Circle
                        x={xStart}
                        y={yStart-parseInt(props.lithium.atomic_radius)/1.5}
                        radius={electronRadius}
                        fill="#fd0000"
                        dragBoundFunc = {
                            function(pos) {
                                const x = xStart
                                const y = yStart-parseInt(props.lithium.atomic_radius)/1.5
                                const radius = tightEBound
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
                        x={xStart}
                        y={yStart+parseInt(props.lithium.atomic_radius)/1.5}
                        radius={electronRadius}
                        fill="#fd0000"
                        dragBoundFunc = {
                            function(pos) {
                                const x = xStart
                                const y = yStart+parseInt(props.lithium.atomic_radius)/1.5
                                const radius = tightEBound
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
                        x={xStart+parseInt(props.lithium.atomic_radius)}
                        y={yStart}
                        radius={electronRadius}
                        fill="#fd0000"
                        dragBoundFunc = {
                            function(pos) {
                                const x = xStart+parseInt(props.lithium.atomic_radius)
                                const y = yStart
                                const radius = outerEBound
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
        </>
    )
}
