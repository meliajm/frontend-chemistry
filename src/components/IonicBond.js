import React from 'react'
import { Stage, Layer, Text, Circle } from 'react-konva';
import QuestionInput from './QuestionInput'
import { connect } from 'react-redux'

const IonicBond = () => {

    const handleDragStart = e => {
        console.log('start drag')
    };
    
    const handleDragEnd = e => {
        console.log('end drag')
        console.log(e.target)
        if (e.target._lastPos.x === 539 && e.target._lastPos.y === 229) {
            console.log('you did it!')
            // this.popUpQuestion()
        }
    }

    const sodium = this.props.sodium
    const chlorine = this.props.chlorine

    const renderElectrons = (atomicRadiusNa, atomicRadiusCl, startX, startY) =>  {
        
        const arr = []
        let valenceElectrons = this.props.atom.atomic_number
        // const valenceElectrons = (this.props.atom.atomic_number)
        if (this.props.atom.atomic_number > 2) {
            valenceElectrons = this.props.atom.atomic_number - 2
        }
        if (this.props.atom.atomic_number > 10) {
            valenceElectrons = this.props.atom.atomic_number - 10
        }
        if (this.props.atom.atomic_number > 18) {
            valenceElectrons = this.props.atom.atomic_number - 18
        }
        // if (this.props.atom.atomic_number >= 26) {
        //     console.log('atomic number', this.props.atom.atomic_number)
        //     valenceElectrons = this.props.atom.atomic_number - 24
        // }
        if (this.props.atom.atomic_number >= 20) {
            // console.log('atomic number', this.props.atom.atomic_number)
            if (this.props.atom.oxidation_states[0]==='+') {
                valenceElectrons = this.props.atom.oxidation_states[1] 
            } else {
                valenceElectrons = this.props.atom.oxidation_states[0]
            }
        }


        for (let i=0; i<valenceElectrons; i++){
            arr.push(i)
        }        
        return (
            <>
            {arr.map( i => {
                console.log('i', i)
                console.log('ar', parseInt(atomicRadius))
                console.log('startingXpos', this.startingXpos)
                    if (i === 0) {
                        return <Circle 
                        dragBoundFunc = {
                            function(pos) {
                              console.log("x y", startX, startY)
                              const x = 300-20
                              const y = 300-parseInt(atomicRadius)
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
                        x={this.startingXpos-1*20} 
                        y={this.startingYpos-parseInt(atomicRadius)} 
                        radius={this.electronRadius} 
                        fill="black" 
                        />                      
                    } else if ( i === 1) {
                        return <Circle 
                        dragBoundFunc = {
                            function(pos) {
                                const x = 300+20
                                const y = 300+parseInt(atomicRadius)
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
                        x={this.startingXpos+1*20} 
                        y={this.startingYpos+parseInt(atomicRadius)} 
                        radius={this.electronRadius} 
                        fill="gray" 
                        />

                    } else if ( i === 2) {
                        return         <Circle 
                        dragBoundFunc = {
                            function(pos) {
                                const x = 300-parseInt(atomicRadius)
                                const y = 300-20
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
                        x={this.startingXpos-parseInt(atomicRadius)} 
                        y={this.startingYpos-20} 
                        radius={this.electronRadius} 
                        fill="green" 
                        />
                    } else if ( i === 3) {
                        return         <Circle 
                        dragBoundFunc = {
                            function(pos) {
                                const x = 300+parseInt(atomicRadius) 
                                const y = 300-20
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
                        x={this.startingXpos+parseInt(atomicRadius)} 
                        y={this.startingYpos+20}
                        radius={this.electronRadius} 
                        fill="orange" 
                        />
                        // <Circle className="RightBottom" draggable x={this.startingXpos+parseInt(atomicRadius)} y={this.startingYpos+20} radius={this.electronRadius} fill="black" />                                        
                    } else if ( i === 4) {
                        return <Circle 
                        dragBoundFunc = {
                            function(pos) {
                                const x = 300-20
                                const y = 300+parseInt(atomicRadius)
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
                        x={this.startingXpos-1*20} 
                        y={this.startingYpos+parseInt(atomicRadius)} 
                        radius={this.electronRadius} 
                        fill="blue" 
                        />
                        // <Circle className="bottomLeft" draggable x={this.startingXpos-1*20} y={this.startingYpos+parseInt(atomicRadius)} radius={this.electronRadius} fill="black" />                    
                    } else if ( i === 5) {
                        return <Circle 
                        dragBoundFunc = {
                            function(pos) {
                                const x = 300+20
                                const y = 300-parseInt(atomicRadius)
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
                        x={this.startingXpos+1*20} 
                        y={this.startingYpos-parseInt(atomicRadius)} 
                        radius={this.electronRadius} 
                        fill="yellow" 
                        />
                        // <Circle className="TopRight" draggable x={this.startingXpos+1*20} y={this.startingYpos-parseInt(atomicRadius)} radius={this.electronRadius} fill="black" />                    
                    } else if ( i === 6) {
                        return <Circle 
                        dragBoundFunc = {
                            function(pos) {
                                const x = 300-parseInt(atomicRadius)
                                const y = 300+20
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
                        x={this.startingXpos-parseInt(atomicRadius)} 
                        y={this.startingYpos+20}
                        radius={this.electronRadius} 
                        fill="purple" 
                        />
                        // <Circle className="LeftBottom"draggable x={this.startingXpos-parseInt(atomicRadius)} y={this.startingYpos+20} radius={this.electronRadius} fill="black" />                    
                    } else if ( i === 7) {
                        return<Circle 
                        dragBoundFunc = {
                            function(pos) {
                                const x = 300+parseInt(atomicRadius)
                                const y = 300-20
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
                        x={this.startingYpos+parseInt(atomicRadius)}  
                        y={this.startingXpos-1*20}
                        radius={this.electronRadius} 
                        fill="red" 
                        /> 
                        // <Circle className="RightTop" draggable x={this.startingXpos+parseInt(atomicRadius)} y={this.startingYpos-20} radius={this.electronRadius} fill="black" />                                        
                    }
                
            })}
            </>
        )
    }

    const renderSodiumAndChlorine = (atomicRadiusNa, atomicRadiusCl) => {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              <Text x={75} y={20} text={this.props.atom.name} fontSize={15} />
              <Circle className="electronOrbit" x={this.startingXpos} y={this.startingYpos} radius={atomicRadius} stroke="black" />
              <Circle  className="nucleus" x={this.startingXpos} y={this.startingYpos} radius={atomicRadius/10} fill={`#${this.props.atom.cpk_hex_color}`}/>
              <Circle  className="nucleusOutline" x={this.startingXpos} y={this.startingYpos} radius={atomicRadius/10} stroke="black" strokeWidth='1'/>
              {this.renderElectrons(atomicRadius)}
            </Layer>
          </Stage>
        )
    }

    return (
        <>
            {renderSodiumAndChlorine(this.props.sodium.atomic_radius, this.props.chlorine.atomic_radius)}
        </>
    )
}

const mapStateToProps = state => {
    return {
      sodium: state.atomsReducer.atoms.find(atom => atom.symbol==="Na"),
      chlorine: state.atomsReducer.atoms.find(atom => atom.symbol==="Cl"),
    }
}

export default connect(mapStateToProps)(IonicBond)



// class IonicBond extends React.Component {

//     state = {
//         xPos: 400,
//         yPos: 20,
//         radius: 5,
//         delta: 50,
//         sodiumX: 300,
//         sodiumY: 300,
//         chlorineX: 600,
//         chlorineY: 300,
//         chlorineRadius: 175,
//         chlorineColor: '1FF01F',
//         answer: ""
//         // chlorine: this.props.atoms.find(atom => atom.symbol==="Cl")
//     }

//     handleDragStart = e => {
//         console.log('start drag')
//     };
    
//     handleDragEnd = e => {
//     console.log('end drag')
//     console.log(e.target)
//     if (e.target._lastPos.x === 539 && e.target._lastPos.y === 229) {
//         console.log('you did it!')
//         this.popUpQuestion()
//     }
//     };

//     handleOnChange = event => {
//         console.log('handle on change')
//         this.setState({
//             answer: event.target.value
//         })
//     }

//     handleOnSubmit = event => {
//         event.preventDefault()
//     }

//     popUpQuestion = () => {
//         console.log('what is the charge of sodium now?')
//         const canvas = document.querySelector(".konvajs-content")
//         const center = document.querySelector(".center")

//         // console.log('p', canvas)
//         const h3 = document.createElement('h3')
//         const br = document.createElement('br')
//         const form = document.createElement('form')
//         const input = document.createElement('input')
//         const submit = document.createElement('input')
//         h3.className = "ionicBond"
//         h3.innerText = "What is the charge of sodium now?"
//         center.appendChild(h3)
//         center.appendChild(br)
//         input.type = "text"
//         input.name = "answer"
//         input.value=this.state.answer
//         input.onChange=event=>this.handleOnChange(event)
//         form.onSubmit=event=>this.handleOnSubmit(event)
//         submit.type = "submit"
//         center.appendChild(form)
//         form.appendChild(input)
//         form.appendChild(submit)

//         // return <QuestionInput />

         
//     }

    

//     render() {
// }


// import React, { Component } from 'react'
// import { Stage, Layer, Text, Circle } from 'react-konva';
// // import Sodium from './Sodium'
// // import Chlorine from './Chlorine'

// export class IonicBond extends Component {

//     // state = {
//     //     sodium : {},
//     //     chlorine: {}   
//     // }

//     // init = () => {
//     //     console.log(this.props.atoms)
//     //     this.setState({
//     //         sodium: this.props.atoms.find(atom => atom.symbol==="Na"),
//     //         chlorine: this.props.atoms.find(atom => atom.symbol==="Cl")
//     //     })
//     // }

//     // componentDidMount() {
//     //     // this.setState({ atom }))
        
//     //     console.log(this.props.atoms)
//     //     this.setState({
//     //         sodium: this.props.atoms.find(atom => atom.symbol==="Na"),
//     //         chlorine: this.props.atoms.find(atom => atom.symbol==="Cl")
//     //     })
//     // }
    


    // handleDragStart = e => {
    //     console.log('start drag')
    //     // e.target.setAttrs({
    //     //   shadowOffset: {
    //     //     x: 15,
    //     //     y: 15
    //     //   },
    //     //   scaleX: 1.1,
    //     //   scaleY: 1.1
    //     // });
    //   };

    // handleDragEnd = e => {
    //     console.log('end drag')
    //     console.log(e.target)
    //     if (e.target._lastPos.x === 410 && e.target._lastPos.y === 150) {
    //         console.log('you did it!')
    //     }
    //     // e.target.to({
        
    //     // });
    //   };
    
//   render() {
//     //   const sodium = this.props.atoms.find(atom => atom.symbol==="Na")
//     //   const chlorine = this.props.atoms.find(atom => atom.symbol==="Cl")

//     //   console.log('na', this.props)
//     // let sodium = this.props.atoms.find(atom => ( atom.symbol==="Na"))
//     // console.log('na', sodium)

//     let sodium = {}
//     sodium = this.props.atoms.find(atom => atom.symbol==="Na")
//     console.log(sodium.atomic_number)
//     return (
    //   <Stage width={window.innerWidth} height={window.innerHeight}>
    //     <Layer>
    //       <Text x={230} text="Ionic" fontSize={25} />
          
    //       <Text x={50} y={20} text="Sodium" fontSize={15} />
    //       <Text x={370} y={20} text="Chlorine" fontSize={15} />

    //       <Circle x={400} y={100} radius={50} stroke='black' strokeWidth='2' />
    //       <Circle  x={400} y={100} radius={10} fill="green"  />
    //       <Circle draggable x={350} y={90} radius={5} fill="black"  />
    //       <Circle draggable x={350} y={110} radius={5} fill="black"  />
    //       <Circle draggable x={450} y={90} radius={5} fill="black"  />
    //       <Circle draggable x={450} y={110} radius={5} fill="black"  />
    //       <Circle draggable x={410} y={50} radius={5} fill="black"  />
    //       <Circle draggable x={390} y={50} radius={5} fill="black"  />
    //       <Circle draggable x={390} y={150} radius={5} fill="black"  />
    //       <Circle  x={410} y={150} radius={5} fill='white' stroke='black' strokeWidth='1' 
    //       lineJoin='round' lineCap='round' tension='0.5' shadowBlur={10}
    //       listening={this.onDrop}/>

    //       {/* <Circle  x={100} y={100} radius={sodium.atomic_radius} stroke="black" /> */}
    //       <Circle  x={100} y={100} radius={8} fill="blue" />


    //       <Circle draggable x={100} y={80} radius={5} fill="black" 
    //       onDragStart={this.handleDragStart}
    //       onDragEnd={this.handleDragEnd} />
    //     </Layer>
    //   </Stage>
//     );
//   }
// }

