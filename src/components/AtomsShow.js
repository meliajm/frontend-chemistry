import React, { Component } from 'react'
import { Stage, Layer, Text, Circle } from 'react-konva';

export class AtomsShow extends Component {

    state = {
        electronRadius: 5,
        startingXpos: 360,
        startingYpos: 380
    }

    renderElectrons(atomicRadius) {
        if (atomicRadius==="") {
            atomicRadius = 250
        }
        const arr = []

        const tightRadius = 20
        const looseRadius = 50
        
        let valenceElectrons = this.props.atom.atomic_number
        if (this.props.atom.atomic_number > 2) {
            valenceElectrons = this.props.atom.atomic_number - 2
        }
        if (this.props.atom.atomic_number > 10) {
            valenceElectrons = this.props.atom.atomic_number - 10
        }
        if (this.props.atom.atomic_number > 18) {
            valenceElectrons = this.props.atom.atomic_number - 18
        }
        if (this.props.atom.atomic_number >= 20) {
            if (this.props.atom.oxidation_states[0]==='+') {
                valenceElectrons = this.props.atom.oxidation_states[1] 
            } else {
                valenceElectrons = this.props.atom.oxidation_states[0]
            }
            if (valenceElectrons === '0') {
                valenceElectrons = '8'
            }
        }


        for (let i=0; i<valenceElectrons; i++){
            arr.push(i)
        }  
        
        let radius = looseRadius
        
        return (
            <>
            {arr.map( i => {
            
                console.log('i', i)
                console.log('ar', parseInt(atomicRadius))
                console.log('startingXpos', this.state.startingXpos)
                if (arr.length === 8) {
                    radius = tightRadius
                }
                    if (i === 0) {
                        const x = this.state.startingXpos-20
                        const y = this.state.startingYpos-parseInt(atomicRadius)
                        return <Circle 
                        dragBoundFunc = {
                            function(pos) {
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
                        x={this.state.startingXpos-1*20} 
                        y={this.state.startingYpos-parseInt(atomicRadius)} 
                        radius={this.state.electronRadius} 
                        fill="black" 
                        />                      
                    } else if ( i === 1) {
                        const x = this.state.startingXpos+20
                        const y = this.state.startingYpos+parseInt(atomicRadius)
                        return <Circle 
                        dragBoundFunc = {
                            function(pos) {
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
                        x={this.state.startingXpos+1*20} 
                        y={this.state.startingYpos+parseInt(atomicRadius)} 
                        radius={this.state.electronRadius} 
                        fill="gray" 
                        />

                    } else if ( i === 2) {
                        const x = this.state.startingXpos-parseInt(atomicRadius)
                        const y = this.state.startingYpos-20
                        return         <Circle 
                        dragBoundFunc = {
                            function(pos) {
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
                        x={this.state.startingXpos-parseInt(atomicRadius)} 
                        y={this.state.startingYpos-20} 
                        radius={this.state.electronRadius} 
                        fill="green" 
                        />
                    } else if ( i === 3) {
                        const x = this.state.startingXpos+parseInt(atomicRadius) 
                        const y = this.state.startingYpos-20
                        return         <Circle 
                        dragBoundFunc = {
                            function(pos) {
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
                        x={this.state.startingXpos+parseInt(atomicRadius)} 
                        y={this.state.startingYpos+20}
                        radius={this.state.electronRadius} 
                        fill="orange" 
                        />
                        // <Circle className="RightBottom" draggable x={this.state.startingXpos+parseInt(atomicRadius)} y={this.state.startingYpos+20} radius={this.state.electronRadius} fill="black" />                                        
                    } else if ( i === 4) {
                        const x = this.state.startingXpos-20
                        const y = this.state.startingYpos+parseInt(atomicRadius)
                        return <Circle 
                        dragBoundFunc = {
                            function(pos) {
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
                        x={this.state.startingXpos-1*20} 
                        y={this.state.startingYpos+parseInt(atomicRadius)} 
                        radius={this.state.electronRadius} 
                        fill="blue" 
                        />
                        // <Circle className="bottomLeft" draggable x={this.state.startingXpos-1*20} y={this.state.startingYpos+parseInt(atomicRadius)} radius={this.state.electronRadius} fill="black" />                    
                    } else if ( i === 5) {
                        const x = this.state.startingXpos+20
                        const y = this.state.startingYpos-parseInt(atomicRadius)
                        return <Circle 
                        dragBoundFunc = {
                            function(pos) {
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
                        x={this.state.startingXpos+1*20} 
                        y={this.state.startingYpos-parseInt(atomicRadius)} 
                        radius={this.state.electronRadius} 
                        fill="yellow" 
                        />
                        // <Circle className="TopRight" draggable x={this.state.startingXpos+1*20} y={this.state.startingYpos-parseInt(atomicRadius)} radius={this.state.electronRadius} fill="black" />                    
                    } else if ( i === 6) {
                        const x = this.state.startingXpos-parseInt(atomicRadius)
                        const y = this.state.startingYpos+20
                        return <Circle 
                        dragBoundFunc = {
                            function(pos) {
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
                        x={this.state.startingXpos-parseInt(atomicRadius)} 
                        y={this.state.startingYpos+20}
                        radius={this.state.electronRadius} 
                        fill="purple" 
                        />
                    } else if ( i === 7) {
                        const x = this.state.startingXpos+parseInt(atomicRadius)
                        const y = this.state.startingYpos-20
                        return<Circle 
                        dragBoundFunc = {
                            function(pos) {
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
                        x={x}  
                        y={y}
                        radius={this.state.electronRadius} 
                        fill="red" 
                        /> 
                    }
                
            })}
            </>
        )
    }


    
    renderAtom(atomicRadius) {
        if (atomicRadius ===""){
            atomicRadius=250
        }
        return (
            <Stage width={window.innerWidth} height={window.innerHeight+50}>
            <Layer>
              {/* <Text x={75} y={20} text={this.props.atom.name} fontSize={15} /> */}
              <Circle className="electronOrbit" x={this.state.startingXpos} y={this.state.startingYpos} radius={atomicRadius} stroke="black" />
              <Circle  className="nucleus" x={this.state.startingXpos} y={this.state.startingYpos} radius={atomicRadius/10} fill={`#${this.props.atom.cpk_hex_color}`}/>
              <Circle  className="nucleusOutline" x={this.state.startingXpos} y={this.state.startingYpos} radius={atomicRadius/10} stroke="black" strokeWidth='1'/>
              {this.renderElectrons(atomicRadius)}
            </Layer>
          </Stage>
        )
    }

    render() {
        return (
            <div>
                <h4>{this.props.atom.name}: {this.props.atom.group_block}</h4>
                <p>Atomic number: {this.props.atom.atomic_number}</p>
                <p>How many electrons does this atom have? Valence electrons?</p>
                <p>How many protons does this atom have?</p>
                {this.renderAtom(this.props.atom.atomic_radius, this.state.startingXpos, this.state.startingYpos)}                
            <br/>
            </div>
        )
    }
}

export default AtomsShow