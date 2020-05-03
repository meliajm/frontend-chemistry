import React, { Component } from 'react'
// import Konva from 'konva';
import { Stage, Layer, Text, Circle } from 'react-konva';
// import AtomList from './AtomsList'

export class AtomsShow extends Component {
    // use arrow functions?

    state = {
        atom: {}
    }


    electronRadius = 5
    startingXpos = 300
    startingYpos = 300

    componentDidMount() {
        let id = this.props.match.params.id
        fetch(`http://localhost:3001/api/v1/atoms/${id}`)
            .then(response=>response.json())
            .then(atom => this.setState({ atom }))
    }

    // boundElectron() {
        
    // }

    renderElectrons(atomicRadius, startX, startY) {
        if (atomicRadius==="") {
            atomicRadius = 250
        }
        const arr = []
        let valenceElectrons = this.state.atom.atomic_number
        // const valenceElectrons = (this.state.atom.atomic_number)
        if (this.state.atom.atomic_number > 2) {
            valenceElectrons = this.state.atom.atomic_number - 2
        }
        if (this.state.atom.atomic_number > 10) {
            valenceElectrons = this.state.atom.atomic_number - 10
        }
        if (this.state.atom.atomic_number > 18) {
            valenceElectrons = this.state.atom.atomic_number - 18
        }
        // if (this.state.atom.atomic_number >= 26) {
        //     console.log('atomic number', this.state.atom.atomic_number)
        //     valenceElectrons = this.state.atom.atomic_number - 24
        // }
        if (this.state.atom.atomic_number >= 20) {
            // console.log('atomic number', this.state.atom.atomic_number)
            if (this.state.atom.oxidation_states[0]==='+') {
                valenceElectrons = this.state.atom.oxidation_states[1] 
            } else {
                valenceElectrons = this.state.atom.oxidation_states[0]
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


    
    renderAtom(atomicRadius) {
        if (atomicRadius ===""){
            atomicRadius=250
        }
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              <Text x={75} y={20} text={this.state.atom.name} fontSize={15} />
              <Circle className="electronOrbit" x={this.startingXpos} y={this.startingYpos} radius={atomicRadius} stroke="black" />
              <Circle  className="nucleus" x={this.startingXpos} y={this.startingYpos} radius={atomicRadius/10} fill={`#${this.state.atom.cpk_hex_color}`}/>
              <Circle  className="nucleusOutline" x={this.startingXpos} y={this.startingYpos} radius={atomicRadius/10} stroke="black" strokeWidth='1'/>
              {this.renderElectrons(atomicRadius)}
            </Layer>
          </Stage>
        )
    }

    render() {
        return (
            <div>
                {/* <AtomList/> */}
                <h3>{this.state.atom.name}</h3>
                <p>{this.state.atom.symbol}</p>
                <p>{this.state.atom.atomic_radius}</p>
                <p>Atomic number: {this.state.atom.atomic_number}</p>
                <p>{this.state.atom.oxidation_states}</p>
                <p>How many electrons does this atom have?</p>
                <p>How many valence electrons does this atom have?</p>
                <p>How many protons does this atom have?</p>

                <p>{this.state.atom.cpk_hex_color}</p>
                {this.renderAtom(this.state.atom.atomic_radius, this.startingXpos, this.startingYpos)}
            </div>
        )
    }
}

export default AtomsShow