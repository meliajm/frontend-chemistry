import React, { Component } from 'react'
import { Stage, Layer, Text, Circle } from 'react-konva';
// import Sodium from './Sodium'
// import Chlorine from './Chlorine'

export class IonicBond extends Component {

    // state = {
    //     sodium : {},
    //     chlorine: {}   
    // }

    // init = () => {
    //     console.log(this.props.atoms)
    //     this.setState({
    //         sodium: this.props.atoms.find(atom => atom.symbol==="Na"),
    //         chlorine: this.props.atoms.find(atom => atom.symbol==="Cl")
    //     })
    // }

    // componentDidMount() {
    //     // this.setState({ atom }))
        
    //     console.log(this.props.atoms)
    //     this.setState({
    //         sodium: this.props.atoms.find(atom => atom.symbol==="Na"),
    //         chlorine: this.props.atoms.find(atom => atom.symbol==="Cl")
    //     })
    // }
    


    handleDragStart = e => {
        console.log('start drag')
        // e.target.setAttrs({
        //   shadowOffset: {
        //     x: 15,
        //     y: 15
        //   },
        //   scaleX: 1.1,
        //   scaleY: 1.1
        // });
      };

    handleDragEnd = e => {
        console.log('end drag')
        console.log(e.target)
        if (e.target._lastPos.x === 410 && e.target._lastPos.y === 150) {
            console.log('you did it!')
        }
        // e.target.to({
        
        // });
      };
    
  render() {
    //   const sodium = this.props.atoms.find(atom => atom.symbol==="Na")
    //   const chlorine = this.props.atoms.find(atom => atom.symbol==="Cl")

    //   console.log('na', this.props)
    // let sodium = this.props.atoms.find(atom => ( atom.symbol==="Na"))
    // console.log('na', sodium)

    let sodium = {}
    sodium = this.props.atoms.find(atom => atom.symbol==="Na")
    console.log(sodium.atomic_number)
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text x={230} text="Ionic" fontSize={25} />
          
          <Text x={50} y={20} text="Sodium" fontSize={15} />
          <Text x={370} y={20} text="Chlorine" fontSize={15} />

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

          {/* <Circle  x={100} y={100} radius={sodium.atomic_radius} stroke="black" /> */}
          <Circle  x={100} y={100} radius={8} fill="blue" />


          <Circle draggable x={100} y={80} radius={5} fill="black" 
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd} />
        </Layer>
      </Stage>
    );
  }
}

export default IonicBond
