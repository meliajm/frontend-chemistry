import React from 'react'
import { Stage, Layer, Text, Circle } from 'react-konva';

export default function Lithium(props) {
    return (
        <>
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
        </>
    )
}
