import React from 'react'
import { Stage, Layer, Text, Circle, Rect } from 'react-konva';
// import RectCard from './RectCard'

export default class RectsList extends React.Component {

    render() {
        
        let one = []
        let two = []
        
        this.props.atoms.map((atom, i) => {
            
            if (atom.symbol==="H" || atom.group_block==="Alkali metal") {
                // console.log(atom, i)
                one.push(atom)
            }
        })
        
        this.props.atoms.map((atom, i) => {
            if (atom.group_block==="Alkaline earth metal") {
                two.push(atom)
            }
        })
        // console.log('2', two)
        // const colOne = this.props.atoms.filter( atom => atom.symbol==="H" ||
        // atom.group_block==="Alkali metal")

        // const colTwo = this.props.atoms.filter( atom => 
        // atom.group_block==="Alkaline earth metal")
        // console.log(colTwo)
        return (
           
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                {one.map((atom, i) => {
                    return <>
                    <Rect
                    draggable
                    fill={`#${atom.cpk_hex_color}`}
                    x={10}
                    y={i*75}
                    width={60}
                    height={65}
                    stroke="black"
                    />
                    <Text 
                    fontSize={10}
                    text={atom.name}
                    x={10}
                    y={i*75}
                    />
                    </>
                    })}
                    {two.map((atom, i) => {
                    return <>
                    <Rect
                    draggable
                    fill={`#${atom.cpk_hex_color}`}
                    x={75}
                    y={i*75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    />
                    <Text 
                    fontSize={10}
                    text={atom.name}
                    x={75}
                    y={i*75+75}
                    />
                    </>
                    })}
                </Layer>
            </Stage>


        );
    }
}
// export default RectsList
  
    // render() {

    //     const colOne = this.props.atoms.filter( atom => atom.symbol==="H" ||
    //         atom.group_block==="Alkali metal")
        
    //     const colOneX = 10
    //     const colOneY = 10

    //     const colTwo = this.props.atoms.filter( atom => atom.symbol==="H" ||
    //         atom.group_block==="Alkaline earth metal")
        
    //     const colTwoX = 15
    //     const colTwoY = 10
        
    //     console.log('2', colTwo)

    //     const rectsRenderOne = colOne.map((atom, i) => (
    //         <RectCard key={i} atom={atom} colX={colOneX} colY={colOneY}/>
    //     ))

    //     const rectsRenderTwo = colTwo.map((atom, i) => (
    //         <RectCard key={i} atom={atom} colX={colTwoX} colY={colTwoY}/>
    //     ))
    //     return (
    //         <>
    //           <h3>Rects</h3>
    //           {rectsRenderOne}  
    //           {rectsRenderTwo}
    //         </>
    //     )
    // }
// 
