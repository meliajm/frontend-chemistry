import React from 'react'
import { Link } from 'react-router-dom'
import { Stage, Layer, Text, Circle, Rect } from 'react-konva';

// not using currently

const RectCard = ({ atom, colX, colY }) => {
    // const pos = 70
    const width = 60
    const height = 70
    
    return (
        
        <>
        <Stage width={width} height={height} x={colX} y={colY}>
            <Layer>
                <Rect 
                fill={`#${atom.cpk_hex_color}`}
                x={colX}
                y={colY}
                width={width-colX}
                height={height-colY}
                stroke="black"
                />
                <Text 
                fontSize={10}
                text={atom.name}
                x={5}
                y={0}
                />
                <Text 
                fontSize={15}
                text={atom.atomic_number}
                x={10}
                y={15}
                />
            </Layer>
        </Stage>
        {/* {atom.atomic_number} */}
        <br/>
        {/* <Link to={`atoms/${atom.id}`}>{atom.name}<br/></Link> */}
        </>
    )
}


export default RectCard