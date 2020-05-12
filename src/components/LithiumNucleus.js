import React from 'react'
import { Stage, Layer, Text, Circle } from 'react-konva';


export default function LithiumNucleus() {
    return (
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
    )
}
