import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Text } from "react-konva";


const newText = () => ({
    x: 200,
    y: 20,
    text: "yo",
    x2: 300,
    y2: 30,
    text2: "howdy"
  
});

export default class App extends Component {
  state = {
    canvas: [
      {
        x: 250,
        y: 25,
        text: "hello there",
        x2: 350,
        y2: 35,
        text2: "sup"
      }
    ]
  };

  handleClick = () => {
    // this.setState(prevState => ({
    //     canvas: [...prevState.canvas, { ...newRectangle() }]
    //   }));

    this.setState(prevState => ({
      canvas: [{ ...newText() }]
    }));
    console.log(this.state)
  };

  render = () => (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {this.state.canvas.map(({ x, y, text, x2, y2, text2 }, key) => (
            <>
          <Text
            key={key}
            x={x}
            y={y}
            text={text}
            onClick={this.handleClick}
          />
          <Text
            key={key}
            x={x2}
            y={y2}
            text={text2}
            onClick={this.handleClick}
          />
          </>
        ))}
      </Layer>
    </Stage>
  );
}


// import React from 'react'
// import { Stage, Layer, Text, Circle } from 'react-konva';
// import QuestionInput from './QuestionInput'
// // import { connect } from 'react-redux'

// const IonicBond = (props) => {

//     const startingXpos = 300
//     const startingYpos = 300
//     const electronRadius = 5
    
//     console.log('ibb', props)

//     // const sodium = this.props.sodium
//     // const chlorine = this.props.chlorine

//     const renderElectronsNa = (atom) =>  {

        
//         // const startingXpos = 300
//         // const startingYpos = 300
        
//         const arr = []
//         let valenceElectrons = 0

//         if (atom.atomic_number > 2) {
//             valenceElectrons = atom.atomic_number - 2
//         }
//         if (atom.atomic_number > 10) {
//             valenceElectrons = atom.atomic_number - 10
//         }
//         if (atom.atomic_number > 18) {
//             valenceElectrons = atom.atomic_number - 18
//         }
//         if (atom.atomic_number >= 20) {
//             if (this.props.atom.oxidation_states[0]==='+') {
//                 valenceElectrons = this.props.atom.oxidation_states[1] 
//             } else {
//                 valenceElectrons = this.props.atom.oxidation_states[0]
//             }
//         }

//         for (let i=0; i<valenceElectrons; i++){
//             arr.push(i)
//         }        
//         return (
//             <>
//             {arr.map( i => {
//                 const radius = 50
//                     if (i === 0) {
//                         const x = startingXpos+parseInt(atom.atomic_radius)

//                         const y = startingYpos-20
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                               let scale = 
//                               radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                               if (scale < 1) {
//                                 return {
//                                   y: Math.round((pos.y - y) * scale + y),
//                                   x: Math.round((pos.x - x) * scale + x)
//                                 }
//                               }
//                               else {
//                                 return pos
//                               }
//                             }
//                           }
//                         draggable 
//                         x={x} 
//                         y={y} 
//                         radius={electronRadius} 
//                         fill="black"
//                         onDragStart={handleDragStart}
//                         onDragEnd={handleDragEnd}
//                         />                      
//                     } 
//             })}
//             </>
//         )
//     }

//     const renderElectronsCl = (atom) =>  {

//         const startingXposCl = startingXpos+450

//         const arr = [7]
//         let valenceElectrons = 0
//         if (atom.atomic_number > 2) {
//             valenceElectrons = atom.atomic_number - 2
//         }
//         if (atom.atomic_number > 10) {
//             valenceElectrons = atom.atomic_number - 10
//         }
//         if (atom.atomic_number > 18) {
//             valenceElectrons = atom.atomic_number - 18
//         }
//         if (atom.atomic_number >= 20) {
//             if (this.props.atom.oxidation_states[0]==='+') {
//                 valenceElectrons = this.props.atom.oxidation_states[1] 
//             } else {
//                 valenceElectrons = this.props.atom.oxidation_states[0]
//             }
//         }
//         for (let i=0; i<valenceElectrons; i++){
//             arr.push(i)
//         }        
//         return (
//             <>
//             {arr.map( i => {
//                 const radius = 50
//                     if (i === 0) {
//                         const x=startingXposCl-1*20
//                         const y=startingYpos-parseInt(atom.atomic_radius)
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                               let scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                               if (scale < 1) {
//                                 return {
//                                   y: Math.round((pos.y - y) * scale + y),
//                                   x: Math.round((pos.x - x) * scale + x)
//                                 }
//                               }
//                               else {
//                                 return pos
//                               }
//                             }
//                           }
//                         draggable 
//                         x={x}
//                         y={y}
//                         radius={electronRadius} 
//                         fill="black" 
//                         />                      
//                     } else if ( i === 1) {
//                         const x = startingXposCl+1*20
//                         const y = startingYpos+parseInt(atom.atomic_radius)
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                                 let scale = 
//                                     radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                                 if (scale < 1) {
//                                     return {
//                                         y: Math.round((pos.y - y) * scale + y),
//                                         x: Math.round((pos.x - x) * scale + x)
//                                     }
//                                 }
//                                 else {
//                                     return pos
//                                 }
//                             }
//                         }
//                         draggable 
//                         x={x} 
//                         y={y} 
//                         radius={electronRadius} 
//                         fill="gray" 
//                         />

//                     } else if ( i === 2) {
//                         const x = startingXposCl+parseInt(atom.atomic_radius)
//                         const y = startingYpos-20
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                                 let scale = 
//                                 radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                                 if (scale < 1) {
//                                     return {
//                                         y: Math.round((pos.y - y) * scale + y),
//                                         x: Math.round((pos.x - x) * scale + x)
//                                     }
//                                 }
//                                 else {
//                                     return pos
//                                 }
//                             }
//                         }
//                         draggable 
//                         x={x} 
//                         y={y} 
//                         radius={electronRadius} 
//                         fill="green" 
//                         />
//                     } else if ( i === 3) {
//                         const x = startingXposCl+parseInt(atom.atomic_radius) 
//                         const y = startingYpos+20
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                                 let scale = 
//                                 radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                                 if (scale < 1) {
//                                     return {
//                                         y: Math.round((pos.y - y) * scale + y),
//                                         x: Math.round((pos.x - x) * scale + x)
//                                     }
//                                 } else {
//                                     return pos
//                                 }
//                             }
//                         }
//                         draggable 
//                         x={x} 
//                         y={y}
//                         radius={electronRadius} 
//                         fill="orange" 
//                         />
//                     } else if ( i === 4) {
//                         const x = startingXposCl-1*20
//                         const y = startingYpos+parseInt(atom.atomic_radius)
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                                 let scale = 
//                                 radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                                 if (scale < 1) {
//                                 return {
//                                     y: Math.round((pos.y - y) * scale + y),
//                                     x: Math.round((pos.x - x) * scale + x)
//                                     }
//                                 }
//                                 else {
//                                     return pos
//                                 }
//                             }
//                         }
//                         draggable 
//                         x={x} 
//                         y={y} 
//                         radius={electronRadius} 
//                         fill="blue" 
//                         />
//                     } else if ( i === 5) {
//                         const x = startingXposCl+1*20
//                         const y = startingYpos-parseInt(atom.atomic_radius)
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                                 let scale = 
//                                 radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                                 if (scale < 1) {
//                                     return {
//                                         y: Math.round((pos.y - y) * scale + y),
//                                         x: Math.round((pos.x - x) * scale + x)
//                                     }
//                                 } else {
//                                     return pos
//                                 }
//                             }
//                         }
//                         draggable 
//                         x={x} 
//                         y={y} 
//                         radius={electronRadius} 
//                         fill="yellow" 
//                         />
//                     } else if ( i === 6) {
//                         const x = startingXposCl-parseInt(atom.atomic_radius)
//                         const y = startingYpos+20
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                                 let scale = 
//                                 radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                                 if (scale < 1) {
//                                     return {
//                                         y: Math.round((pos.y - y) * scale + y),
//                                         x: Math.round((pos.x - x) * scale + x)
//                                     }
//                                 } else {
//                                     return pos
//                                 }
//                             }
//                         }
//                         draggable 
//                         x={x} 
//                         y={y}
//                         radius={electronRadius} 
//                         fill="purple" 
//                         />
//                     } else if ( i === 7) {
//                         console.log('here')
//                         return <Circle 
//                         fill="white"
//                         x={startingXposCl-parseInt(atom.atomic_radius)} 
//                         y={startingYpos-20}
//                         radius={electronRadius}
//                         stroke="black"
//                         strokeWidth="1"
//                         shadowBlur={10}
//                         />
//                     }
//             })}
//             </>
//         )

//     }

//     const handleDragStart = e => {
//         console.log('start drag')
//     };
    
//     const handleDragEnd = e => {
//         console.log('end drag')
//         console.log(e.target)
//         if (e.target._lastPos.x === 575 && e.target._lastPos.y === 280) {
//             console.log('you did it!')
//             // this.popUpQuestion()
//         }
//     }

//     const renderSodiumAndChlorine = (sodiumAtom, chlorineAtom) => {
//         return (
//             <Stage width={window.innerWidth} height={window.innerHeight}>
//                 <Layer>
//                     <Text x={660} y={170} text={`The charge of ${chlorineAtom.name} is 0.`} fontSize={15} />
//                     <Circle className="electronOrbit" x={startingXpos+450} y={startingYpos} radius={chlorineAtom.atomic_radius} stroke="black" />
//                     <Circle  className="nucleus" x={startingXpos+450} y={startingYpos} radius={chlorineAtom.atomic_radius/10} fill={`#${chlorineAtom.cpk_hex_color}`}/>
//                     <Circle  className="nucleusOutline" x={startingXpos+450} y={startingYpos} radius={chlorineAtom.atomic_radius/10} stroke="black" strokeWidth='1'/>
//                     {renderElectronsCl(chlorineAtom)}

//                     <Text x={210} y={170} text={`The charge of ${sodiumAtom.name} is 0.`} fontSize={15} />
//                     <Circle className="electronOrbit" x={startingXpos} y={startingYpos} radius={sodiumAtom.atomic_radius} stroke="black" />
//                     <Circle  className="nucleus" x={startingXpos} y={startingYpos} radius={sodiumAtom.atomic_radius/10} fill={`#${sodiumAtom.cpk_hex_color}`}/>
//                     <Circle  className="nucleusOutline" x={startingXpos} y={startingYpos} radius={sodiumAtom.atomic_radius/10} stroke="black" strokeWidth='1'/>
//                     {renderElectronsNa(sodiumAtom)}
//                 </Layer>
//             </Stage>
//         )
//     }

//     return (
//         <>
//            {renderSodiumAndChlorine(props.sodium, props.chlorine)}
//         </>
//     )
// }

// // const mapStateToProps = state => {
// //     console.log('ib', state)
// //     return {
// //       sodium: state.atomsReducer.atoms.find(atom => atom.symbol==="Na"),
// //       chlorine: state.atomsReducer.atoms.find(atom => atom.symbol==="Cl"),
// //     }
// // }

// // export default connect(mapStateToProps)(IonicBond)

// export default IonicBond



// import React from 'react'
// import { Stage, Layer, Text, Circle } from 'react-konva';
// import QuestionInput from './QuestionInput'
// // import { connect } from 'react-redux'

// const IonicBond = (props) => {

//     // const startingXpos = 300
//     // const startingYpos = 300
//     // const electronRadius = 5
    
//     console.log('ibb', props)

//     // const sodium = this.props.sodium
//     // const chlorine = this.props.chlorine

//     const renderElectronsNa = (atom) =>  {

        
//         // const startingXpos = 300
//         // const startingYpos = 300
        
//         const arr = []
//         let valenceElectrons = 0

//         if (atom.atomic_number > 2) {
//             valenceElectrons = atom.atomic_number - 2
//         }
//         if (atom.atomic_number > 10) {
//             valenceElectrons = atom.atomic_number - 10
//         }
//         if (atom.atomic_number > 18) {
//             valenceElectrons = atom.atomic_number - 18
//         }

//         for (let i=0; i<valenceElectrons; i++){
//             arr.push(i)
//         }        
//         return (
//             <>
//             {arr.map( i => {
//                 const radius = 50
//                     if (i === 0) {
//                         const x = 300+parseInt(atom.atomic_radius)

//                         const y = 300-20
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                               let scale = 
//                               radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                               if (scale < 1) {
//                                 return {
//                                   y: Math.round((pos.y - y) * scale + y),
//                                   x: Math.round((pos.x - x) * scale + x)
//                                 }
//                               }
//                               else {
//                                 return pos
//                               }
//                             }
//                           }
//                         draggable 
//                         x={x} 
//                         y={y} 
//                         radius={5} 
//                         fill="black"
//                         onDragStart={handleDragStart}
//                         onDragEnd={handleDragEnd}
//                         />                      
//                     } 
//             })}
//             </>
//         )
//     }

//     const renderElectronsCl = (atom) =>  {

//         const startingXposCl = 300+450

//         const arr = [7]
//         let valenceElectrons = 0
//         if (atom.atomic_number > 2) {
//             valenceElectrons = atom.atomic_number - 2
//         }
//         if (atom.atomic_number > 10) {
//             valenceElectrons = atom.atomic_number - 10
//         }
//         if (atom.atomic_number > 18) {
//             valenceElectrons = atom.atomic_number - 18
//         }
        
//         for (let i=0; i<valenceElectrons; i++){
//             arr.push(i)
//         }        
//         return (
//             <>
//             {arr.map( i => {
//                 const radius = 50
//                     if (i === 0) {
//                         const x=startingXposCl-1*20
//                         const y=300-parseInt(atom.atomic_radius)
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                               let scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                               if (scale < 1) {
//                                 return {
//                                   y: Math.round((pos.y - y) * scale + y),
//                                   x: Math.round((pos.x - x) * scale + x)
//                                 }
//                               }
//                               else {
//                                 return pos
//                               }
//                             }
//                           }
//                         draggable 
//                         x={x}
//                         y={y}
//                         radius={5} 
//                         fill="black" 
//                         />                      
//                     } else if ( i === 1) {
//                         const x = startingXposCl+1*20
//                         const y = 300+parseInt(atom.atomic_radius)
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                                 let scale = 
//                                     radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                                 if (scale < 1) {
//                                     return {
//                                         y: Math.round((pos.y - y) * scale + y),
//                                         x: Math.round((pos.x - x) * scale + x)
//                                     }
//                                 }
//                                 else {
//                                     return pos
//                                 }
//                             }
//                         }
//                         draggable 
//                         x={x} 
//                         y={y} 
//                         radius={5} 
//                         fill="gray" 
//                         />

//                     } else if ( i === 2) {
//                         const x = startingXposCl+parseInt(atom.atomic_radius)
//                         const y = 300-20
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                                 let scale = 
//                                 radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                                 if (scale < 1) {
//                                     return {
//                                         y: Math.round((pos.y - y) * scale + y),
//                                         x: Math.round((pos.x - x) * scale + x)
//                                     }
//                                 }
//                                 else {
//                                     return pos
//                                 }
//                             }
//                         }
//                         draggable 
//                         x={x} 
//                         y={y} 
//                         radius={5} 
//                         fill="green" 
//                         />
//                     } else if ( i === 3) {
//                         const x = startingXposCl+parseInt(atom.atomic_radius) 
//                         const y = 300+20
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                                 let scale = 
//                                 radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                                 if (scale < 1) {
//                                     return {
//                                         y: Math.round((pos.y - y) * scale + y),
//                                         x: Math.round((pos.x - x) * scale + x)
//                                     }
//                                 } else {
//                                     return pos
//                                 }
//                             }
//                         }
//                         draggable 
//                         x={x} 
//                         y={y}
//                         radius={5} 
//                         fill="orange" 
//                         />
//                     } else if ( i === 4) {
//                         const x = startingXposCl-1*20
//                         const y = 300+parseInt(atom.atomic_radius)
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                                 let scale = 
//                                 radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                                 if (scale < 1) {
//                                 return {
//                                     y: Math.round((pos.y - y) * scale + y),
//                                     x: Math.round((pos.x - x) * scale + x)
//                                     }
//                                 }
//                                 else {
//                                     return pos
//                                 }
//                             }
//                         }
//                         draggable 
//                         x={x} 
//                         y={y} 
//                         radius={5} 
//                         fill="blue" 
//                         />
//                     } else if ( i === 5) {
//                         const x = startingXposCl+1*20
//                         const y = 300-parseInt(atom.atomic_radius)
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                                 let scale = 
//                                 radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                                 if (scale < 1) {
//                                     return {
//                                         y: Math.round((pos.y - y) * scale + y),
//                                         x: Math.round((pos.x - x) * scale + x)
//                                     }
//                                 } else {
//                                     return pos
//                                 }
//                             }
//                         }
//                         draggable 
//                         x={x} 
//                         y={y} 
//                         radius={5} 
//                         fill="yellow" 
//                         />
//                     } else if ( i === 6) {
//                         const x = startingXposCl-parseInt(atom.atomic_radius)
//                         const y = 300+20
//                         return <Circle 
//                         dragBoundFunc = {
//                             function(pos) {
//                                 let scale = 
//                                 radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//                                 if (scale < 1) {
//                                     return {
//                                         y: Math.round((pos.y - y) * scale + y),
//                                         x: Math.round((pos.x - x) * scale + x)
//                                     }
//                                 } else {
//                                     return pos
//                                 }
//                             }
//                         }
//                         draggable 
//                         x={x} 
//                         y={y}
//                         radius={5} 
//                         fill="purple" 
//                         />
//                     } else if ( i === 7) {
//                         console.log('here')
//                         return <Circle 
//                         fill="white"
//                         x={startingXposCl-parseInt(atom.atomic_radius)} 
//                         y={300-20}
//                         radius={5}
//                         stroke="black"
//                         strokeWidth="1"
//                         shadowBlur={10}
//                         />
//                     }
//             })}
//             </>
//         )

//     }

//     const handleDragStart = e => {
//         console.log('start drag')
//     };
    
//     const handleDragEnd = e => {
//         console.log('end drag')
//         console.log(e.target)
//         if (e.target._lastPos.x === 575 && e.target._lastPos.y === 280) {
//             console.log('you did it!')
//             // this.popUpQuestion()
//         }
//     }

//     const renderSodiumAndChlorine = (sodiumAtom, chlorineAtom) => {
//         return (
//             <Stage width={window.innerWidth} height={window.innerHeight}>
//                 <Layer>
//                     <Text x={660} y={170} text={`The charge of ${chlorineAtom.name} is 0.`} fontSize={15} />
//                     <Circle className="electronOrbit" x={300+450} y={300} radius={chlorineAtom.atomic_radius} stroke="black" />
//                     <Circle  className="nucleus" x={300+450} y={300} radius={chlorineAtom.atomic_radius/10} fill={`#${chlorineAtom.cpk_hex_color}`}/>
//                     <Circle  className="nucleusOutline" x={300+450} y={300} radius={chlorineAtom.atomic_radius/10} stroke="black" strokeWidth='1'/>
//                     {renderElectronsCl(chlorineAtom)}

//                     <Text x={210} y={170} text={`The charge of ${sodiumAtom.name} is 0.`} fontSize={15} />
//                     <Circle className="electronOrbit" x={300} y={300} radius={sodiumAtom.atomic_radius} stroke="black" />
//                     <Circle  className="nucleus" x={300} y={300} radius={sodiumAtom.atomic_radius/10} fill={`#${sodiumAtom.cpk_hex_color}`}/>
//                     <Circle  className="nucleusOutline" x={300} y={300} radius={sodiumAtom.atomic_radius/10} stroke="black" strokeWidth='1'/>
//                     {renderElectronsNa(sodiumAtom)}
//                 </Layer>
//             </Stage>
//         )
//     }

//     return (
//         <>
//            {renderSodiumAndChlorine(props.sodium, props.chlorine)}
//         </>
//     )
// }

// // const mapStateToProps = state => {
// //     console.log('ib', state)
// //     return {
// //       sodium: state.atomsReducer.atoms.find(atom => atom.symbol==="Na"),
// //       chlorine: state.atomsReducer.atoms.find(atom => atom.symbol==="Cl"),
// //     }
// // }

// // export default connect(mapStateToProps)(IonicBond)

// export default IonicBond