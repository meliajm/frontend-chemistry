import React from 'react'
import { Stage, Layer, Text, Circle } from 'react-konva';
import QuestionInput from './QuestionInput'
import { connect } from 'react-redux'

const IonicBond = (props) => {

    const electronRadius = 5
    const startingXpos = 300
    const startingYpos = 300

    console.log('ibb', props)

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

    const sodium = props.sodium
    const chlorine = props.chlorine

    const renderElectrons = (atom, atomicRadius, startX, startY) =>  {
        
        const arr = []
        let valenceElectrons = 0
        // const valenceElectrons = (this.props.atom.atomic_number)
        if (atom.atomic_number > 2) {
            valenceElectrons = atom.atomic_number - 2
        }
        if (atom.atomic_number > 10) {
            valenceElectrons = atom.atomic_number - 10
        }
        if (atom.atomic_number > 18) {
            valenceElectrons = atom.atomic_number - 18
        }
        // if (this.props.atom.atomic_number >= 26) {
        //     console.log('atomic number', this.props.atom.atomic_number)
        //     valenceElectrons = this.props.atom.atomic_number - 24
        // }
        if (atom.atomic_number >= 20) {
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
                console.log('startingXpos', startingXpos)
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
                        x={startingXpos-1*20} 
                        y={startingYpos-parseInt(atomicRadius)} 
                        radius={electronRadius} 
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
                        x={startingXpos+1*20} 
                        y={startingYpos+parseInt(atomicRadius)} 
                        radius={electronRadius} 
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
                        x={startingXpos-parseInt(atomicRadius)} 
                        y={startingYpos-20} 
                        radius={electronRadius} 
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
                        x={startingXpos+parseInt(atomicRadius)} 
                        y={startingYpos+20}
                        radius={electronRadius} 
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
                        x={startingXpos-1*20} 
                        y={startingYpos+parseInt(atomicRadius)} 
                        radius={electronRadius} 
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
                        x={startingXpos+1*20} 
                        y={startingYpos-parseInt(atomicRadius)} 
                        radius={electronRadius} 
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
                        x={startingXpos-parseInt(atomicRadius)} 
                        y={startingYpos+20}
                        radius={electronRadius} 
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
                        x={startingYpos+parseInt(atomicRadius)}  
                        y={startingXpos-1*20}
                        radius={electronRadius} 
                        fill="red" 
                        /> 
                        // <Circle className="RightTop" draggable x={this.startingXpos+parseInt(atomicRadius)} y={this.startingYpos-20} radius={this.electronRadius} fill="black" />                                        
                    }
                
            })}
            </>
        )
    }

    const renderSodiumAndChlorine = (sodiumAtom, chlorineAtom, atomicRadiusNa, atomicRadiusCl) => {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              <Text x={200} y={200} text={sodiumAtom.name} fontSize={15} />
              <Circle className="electronOrbit" x={startingXpos} y={startingYpos} radius={atomicRadiusNa} stroke="black" />
              <Circle  className="nucleus" x={startingXpos} y={startingYpos} radius={atomicRadiusNa/10} fill={`#${sodiumAtom.cpk_hex_color}`}/>
              <Circle  className="nucleusOutline" x={startingXpos} y={startingYpos} radius={atomicRadiusNa/10} stroke="black" strokeWidth='1'/>
              {renderElectrons(sodium, atomicRadiusNa)}
              <Text x={500} y={200} text={chlorineAtom.name} fontSize={15} />
              <Circle className="electronOrbit" x={startingXpos+450} y={startingYpos} radius={atomicRadiusCl} stroke="black" />
              <Circle  className="nucleus" x={startingXpos+450} y={startingYpos} radius={atomicRadiusCl/10} fill={`#${chlorineAtom.cpk_hex_color}`}/>
              <Circle  className="nucleusOutline" x={startingXpos+450} y={startingYpos} radius={atomicRadiusCl/10} stroke="black" strokeWidth='1'/>
              {renderElectrons(chlorine, atomicRadiusCl)}

            </Layer>
          </Stage>
        )
    }

    return (
        <>
           { (props) ? renderSodiumAndChlorine(props.sodium, props.chlorine, props.sodium.atomic_radius, props.chlorine.atomic_radius) : null}
        </>
    )
}

const mapStateToProps = state => {
    console.log('ib', state)
    return {
      sodium: state.atomsReducer.atoms.find(atom => atom.symbol==="Na"),
      chlorine: state.atomsReducer.atoms.find(atom => atom.symbol==="Cl"),
    }
}

export default connect(mapStateToProps)(IonicBond)