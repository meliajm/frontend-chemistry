import React from 'react'
import { Stage, Layer, Text, Circle } from 'react-konva';
import QuestionInput from './QuestionInput'

class IonicBond extends React.Component {

    state = {
        xPos: 400,
        yPos: 20,
        radius: 5,
        delta: 50,
        sodiumX: 300,
        sodiumY: 300,
        chlorineX: 600,
        chlorineY: 300,
        chlorineRadius: 175,
        chlorineColor: '1FF01F',
        answer: ""
        // chlorine: this.props.atoms.find(atom => atom.symbol==="Cl")
    }

    handleDragStart = e => {
        console.log('start drag')
    };
    
    handleDragEnd = e => {
    console.log('end drag')
    console.log(e.target)
    if (e.target._lastPos.x === 539 && e.target._lastPos.y === 229) {
        console.log('you did it!')
        this.popUpQuestion()
    }
    };

    handleOnChange = event => {
        console.log('handle on change')
        this.setState({
            answer: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
    }

    popUpQuestion = () => {
        console.log('what is the charge of sodium now?')
        const canvas = document.querySelector(".konvajs-content")
        const center = document.querySelector(".center")

        // console.log('p', canvas)
        const h3 = document.createElement('h3')
        const br = document.createElement('br')
        const form = document.createElement('form')
        const input = document.createElement('input')
        const submit = document.createElement('input')
        h3.className = "ionicBond"
        h3.innerText = "What is the charge of sodium now?"
        center.appendChild(h3)
        center.appendChild(br)
        input.type = "text"
        input.name = "answer"
        input.value=this.state.answer
        input.onChange=event=>this.handleOnChange(event)
        form.onSubmit=event=>this.handleOnSubmit(event)
        submit.type = "submit"
        center.appendChild(form)
        form.appendChild(input)
        form.appendChild(submit)

        // return <QuestionInput />

         
    }

    

    render() {
        // console.log('atoms list', this.props)

        const sodiumAnChlorine = this.props.atoms.map((atom, i) => (
        <> {atom.name === "Sodium" ? 
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {/* <Text x={230} text="Ionic" fontSize={25} /> */}
          
          <Text x={250} y={50} text={`${atom.name}`} fontSize={15} />
          <Text x={650} y={50} text="Chlorine" fontSize={15} />

          <Circle x={this.state.xPos+300} y={300} radius={this.state.chlorineRadius} stroke='black' strokeWidth='2' />
          <Circle  x={this.state.xPos+300} y={300} radius={10} fill={`#${this.state.chlorineColor}`} />
          
          <Circle draggable x={544} y={378} radius={this.state.radius} fill="red"  />
          <Circle draggable x={665} y={472} radius={this.state.radius} fill="orange"  />
          <Circle draggable x={875} y={310} radius={this.state.radius} fill="blue"  />
          <Circle draggable x={870} y={256} radius={this.state.radius} fill="green"  />
          <Circle draggable x={625} y={143} radius={this.state.radius} fill="black"  />
          <Circle draggable x={745} y={130} radius={this.state.radius} fill="black"  />
          <Circle draggable x={813} y={434} radius={this.state.radius} fill="black"  />
          <Circle  x={539} y={229} radius={5} fill='white' stroke='black' strokeWidth='1' 
          lineJoin='round' lineCap='round' tension='0.5' shadowBlur={10}
          listening={this.onDrop}/>

          <Circle  x={this.state.sodiumX-20} y={this.state.sodiumY} radius={atom.atomic_radius} stroke="gray" />
          <Circle  x={this.state.sodiumX-20} y={this.state.sodiumX} radius={atom.atomic_radius/10} fill={`#${atom.cpk_hex_color}`} />


          <Circle draggable x={505} y={this.state.sodiumY} radius={5} fill="gray" 
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd} />
        </Layer>
      </Stage> : null}</>
        ))

        console.log(this.props.atoms.find(atom => atom.symbol==="Cl"))
        return (
            <>
            Ionic Bond
            <br />
              {sodiumAnChlorine}  
            </>
        )
    }
}

export default IonicBond

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

// export default IonicBond
