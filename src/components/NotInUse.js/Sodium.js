import React, { Component } from 'react'
import { Stage, Layer, Text, Circle } from 'react-konva';

export class Sodium extends Component {

    state = {
        atom: {},
        electronRadius: 5,
        startingXpos: 300,
        startingYpos: 300,
    }

    componentDidMount() {
        // sodium
        let id = 716
        fetch(`http://localhost:3001/api/v1/atoms/${id}`)
            .then(response=>response.json())
            .then(atom => this.setState({ atom }))
    }

    renderElectrons(atomicRadius, startX, startY) {
        const arr = []
        let valenceElectrons = this.state.atom.atomic_number
        // const valenceElectrons = (this.state.atom.atomic_number)
        if (this.state.atom.atomic_number > 2) {
            valenceElectrons = this.state.atom.atomic_number - 2
        }
        if (this.state.atom.atomic_number > 10) {
            valenceElectrons = this.state.atom.atomic_number - 10
        }
        


        for (let i=0; i<valenceElectrons; i++){
            arr.push(i)
        }        
        return (
            <>
            {arr.map( i => {
                console.log('i', i)
                console.log('ar', parseInt(atomicRadius))
                console.log('startingXpos', this.state.startingXpos)
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
                        x={this.state.startingXpos-1*20} 
                        y={this.state.startingYpos-parseInt(atomicRadius)} 
                        radius={this.state.electronRadius} 
                        fill="black" 
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
            <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              <Text x={270} y={40} text={this.state.atom.name} fontSize={15} />
              <Circle className="electronOrbit" x={this.state.startingXpos} y={this.state.startingYpos} radius={atomicRadius} stroke="black" />
              <Circle  className="nucleus" x={this.state.startingXpos} y={this.state.startingYpos} radius={atomicRadius/10} fill={`#${this.state.atom.cpk_hex_color}`}/>
              <Circle  className="nucleusOutline" x={this.state.startingXpos} y={this.state.startingYpos} radius={atomicRadius/10} stroke="black" strokeWidth='1'/>
              {this.renderElectrons(atomicRadius)}
            </Layer>
          </Stage>
        )
    }

    render() {
        return (
            <>
                {this.renderAtom(this.state.atom.atomic_radius, this.state.startingXpos, this.state.startingYpos)}

            </>
        )
    }
}

export default Sodium
