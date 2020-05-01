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
    startingXpos = 500
    startingYpos = 200

    componentDidMount() {
        let id = this.props.match.params.id

        fetch(`http://localhost:3001/api/v1/atoms/${id}`)
            .then(response=>response.json())
            .then(atom => this.setState({ atom }))
    }

    handleDragStart = e => {
        console.log('start drag')
        e.target.setAttrs({
        });
      };

    handleDragEnd = e => {
    console.log('end drag')
    console.log(e.target)
    if (e.target._lastPos.x === 410 && e.target._lastPos.y === 150) {
        console.log('you did it!')
    }
    
    };

    // makeElectron(i) {
    //     return (
    //         <Circle draggable x={500+i} y={200+i} radius={this.electronRadius} fill="black" />
    //     )
    // }

    // renderElectrons() {
    //     const atomicNumberInt = parseInt(this.state.atom.atomic_number)

    //     for (let i=0; i<atomicNumberInt; i++){
    //         return this.makeElectron(i)
    //     }
    // }

    renderElectrons() {
        const arr = []
        const atomicNumberInt = (this.state.atom.atomic_number)
        
        for (let i=0; i<atomicNumberInt; i++){
            arr.push(i)
            }
        
            console.log(atomicNumberInt)
        return (
            <>
            {arr.map( i => {
                console.log(i)
                // console.log(circle)
                return <Circle draggable x={500+i} y={200+i} radius={this.electronRadius} fill="black" />
            })}
            </>
        )

    }
    
    renderAtom() {
        

        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              
              <Text x={75} y={20} text={this.state.atom.name} fontSize={15} />
    
              <Circle className="electronOrbit" x={500} y={200} radius={this.state.atom.atomic_radius} stroke="black" />

              <Circle  className="nucleus" x={500} y={200} radius={this.state.atom.atomic_radius/10} fill={`#${this.state.atom.cpk_hex_color}`}/>
              <Circle  className="nucleus" x={500} y={200} radius={this.state.atom.atomic_radius/10} stroke="black" strokeWidth='1'/>
              {/* {this.renderArrayElectrons()} */}
              {this.renderElectrons()}

              {/* <Circle draggable x={100} y={80} radius={5} fill="black" 
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd} /> */}
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
                <p>Atomic number: {this.state.atom.atomic_number}</p>
                <p>{this.state.atom.atomic_radius}</p>
                <p>{this.state.atom.cpk_hex_color}</p>
                {this.renderAtom()}
            </div>
        )
    }
}

export default AtomsShow
