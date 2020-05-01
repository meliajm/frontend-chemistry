import React, { Component } from 'react'
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';


export class AtomsShow extends Component {

    state= {
        atom: {}
    }

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

    renderAtom() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              
              <Text x={370} y={20} text="Atom" fontSize={15} />
    
              <Circle x={400} y={100} radius={50} stroke='black' strokeWidth='2' />
              <Circle  x={400} y={100} radius={10} fill="green"  />
              <Circle draggable x={350} y={90} radius={5} fill="black"  />
              <Circle draggable x={350} y={110} radius={5} fill="black"  />
              <Circle draggable x={450} y={90} radius={5} fill="black"  />
              <Circle draggable x={450} y={110} radius={5} fill="black"  />
              <Circle draggable x={410} y={50} radius={5} fill="black"  />
              <Circle draggable x={390} y={50} radius={5} fill="black"  />
              <Circle draggable x={390} y={150} radius={5} fill="black"  />
              <Circle  x={410} y={150} radius={5} fill='white' stroke='black' strokeWidth='1' 
              lineJoin='round' lineCap='round' tension='0.5' shadowBlur={10}
              listening={this.onDrop}/>
              <Circle  x={100} y={100} radius={20} stroke="black" />
              <Circle  x={100} y={100} radius={8} fill="blue" />
              <Circle draggable x={100} y={80} radius={5} fill="black" 
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd} />
            </Layer>
          </Stage>
        )
    }

    render() {
        return (
            <div>
                <h3>{this.state.atom.name}</h3>
                <p>{this.state.atom.symbol}</p>
                <p>Atomic number: {this.state.atom.atomic_number}</p>
                {this.renderAtom()}
            </div>
        )
    }
}

export default AtomsShow
