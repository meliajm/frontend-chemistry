import React, { Component } from 'react'
import Konva from 'konva';
import { Stage, Layer, Text, Circle, Line } from 'react-konva';
import AtomList from './AtomsList'

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

    renderElectrons() {
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
                console.log('ar', parseInt(this.state.atom.atomic_radius))
                console.log('startingXpos', this.startingXpos)
                if (i === 0) {
                    // return <Circle draggable x={this.startingXpos+parseInt(this.state.atom.atomic_radius)*i-2*20} y={this.startingYpos+parseInt(this.state.atom.atomic_radius)} radius={this.electronRadius} fill="black" />
                    return <Circle draggable x={this.startingXpos-1*20} y={this.startingYpos+parseInt(this.state.atom.atomic_radius)} radius={this.electronRadius} fill="black" />                    
                } else if ( i === 1) {
                    return <Circle draggable x={this.startingXpos+1*20} y={this.startingYpos+parseInt(this.state.atom.atomic_radius)} radius={this.electronRadius} fill="black" />                    
                } else if ( i === 2) {
                    return <Circle draggable x={this.startingXpos-1*20} y={this.startingYpos-parseInt(this.state.atom.atomic_radius)} radius={this.electronRadius} fill="black" />                      
                } else if ( i === 3) {
                    return <Circle draggable x={this.startingXpos+1*20} y={this.startingYpos-parseInt(this.state.atom.atomic_radius)} radius={this.electronRadius} fill="black" />                    
                } else if ( i === 4) {
                    return <Circle draggable x={this.startingXpos-parseInt(this.state.atom.atomic_radius)} y={this.startingYpos-20} radius={this.electronRadius} fill="black" />                    
                } else if ( i === 5) {
                    return <Circle draggable x={this.startingXpos-parseInt(this.state.atom.atomic_radius)} y={this.startingYpos+20} radius={this.electronRadius} fill="black" />                    
                } else if ( i === 6) {
                    return <Circle draggable x={this.startingXpos+parseInt(this.state.atom.atomic_radius)} y={this.startingYpos+20} radius={this.electronRadius} fill="black" />                                        
                } else if ( i === 7) {
                    return <Circle draggable x={this.startingXpos+parseInt(this.state.atom.atomic_radius)} y={this.startingYpos-20} radius={this.electronRadius} fill="black" />                                        
                }
            })}
            </>
        )
    }
    
    renderAtom() {
        
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              <Text x={75} y={20} text={this.state.atom.name} fontSize={15} />
              <Circle className="electronOrbit" x={this.startingXpos} y={this.startingYpos} radius={this.state.atom.atomic_radius} stroke="black" />
              <Circle  className="nucleus" x={this.startingXpos} y={this.startingYpos} radius={this.state.atom.atomic_radius/10} fill={`#${this.state.atom.cpk_hex_color}`}/>
              <Circle  className="nucleusOutline" x={this.startingXpos} y={this.startingYpos} radius={this.state.atom.atomic_radius/10} stroke="black" strokeWidth='1'/>
              {this.renderElectrons()}
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
                <p>How many electrons does this atom have?</p>
                <p>How many valence electrons does this atom have?</p>
                <p>How many protons does this atom have?</p>

                <p>{this.state.atom.cpk_hex_color}</p>
                {this.renderAtom()}
            </div>
        )
    }
}

export default AtomsShow
