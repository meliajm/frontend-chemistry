import React from 'react'
import { Stage, Layer, Text, Circle, Ellipse } from 'react-konva';

export default class CovalentBond1 extends React.Component {

    state = {
        electronColor1: "blue",
        electronColor2: "blue",
        electronOxygenColor1: `#${this.props.oxygen.cpk_hex_color}`,
        electronOxygenColor2: `#${this.props.oxygen.cpk_hex_color}`,
        radius: 50,
        draggable1: true,
        draggable2: true,
        draggable3: true,
        draggable4: true,
        shawodBlur1: 10,
        shawodBlur2: 10,
        canvas: [
            {
                x: 80,
                y: 130,
                text: "",
                x2: 410,
                y2: 130,
                text2: "",
                xpos: 180,
                ypos: 300,
                delta: 20,
                secondatom: 5,
                xion1: 510,
                xion2: 190,
                yion1: 230,
                yion2: 350,
                xion3: 830,
                yions: 200,
                yion3: 350,
              }
        ],
      };

    renderElectronsCation = (atom) =>  {
        const arr = []
        let valenceElectrons = atom.atomic_number

        for (let i=0; i<valenceElectrons; i++){
            arr.push(i)
        }  
        console.log(arr)      
        return (
            <>
            {arr.map( i => {
                const radius = this.state.radius
                if (i === 0) {
                        //
                        const x = 725
                        const y = 295
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
                        draggable={this.state.draggable1}
                        x={x} 
                        y={y} 
                        radius={5} 
                        fill={this.state.electronColor1}
                        onDragStart={this.handleDragStart}
                        onDragEnd={this.handleDragEnd1}
                        />                      
                    } 
            })}
            </>
        )
    }

    renderElectronsCation2 = (atom) =>  {
        const arr = []
        let valenceElectrons = atom.atomic_number
        for (let i=0; i<valenceElectrons; i++){
            arr.push(i)
        }  
        console.log(arr)      
        return (
            <>
            {arr.map( i => {
                const radius = this.state.radius
                    if (i === 0) {
                        const x = 255
                        const y = 250
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
                        draggable={this.state.draggable2}
                        x={x} 
                        y={y} 
                        radius={5} 
                        fill={this.state.electronColor2}
                        onDragStart={this.handleDragStart}
                        onDragEnd={this.handleDragEnd2}
                        />                      
                    } 
            })}
            </>
        )
    }

    renderElectronsAnion = (atom) =>  {
        const startingXposAnion = this.state.canvas[0].xion1
        const arr = [6, 7]
        let valenceElectrons = 0
        if (atom.atomic_number > 2) {
            valenceElectrons = atom.atomic_number - 2
        }
        if (atom.atomic_number > 10) {
            valenceElectrons = atom.atomic_number - 10
        }
        if (atom.atomic_number > 18) {
            valenceElectrons = atom.atomic_number - 18
        }

        for (let i=0; i<valenceElectrons; i++){
            arr.push(i)
        }        
        return (
            <>
            {arr.map( i => {
                if (i === 3) {
                    let radius = 50
                        const x=startingXposAnion-1*20
                        const y=this.state.canvas[0].yion1-parseInt(atom.atomic_radius)
                        return <Circle 
                        dragBoundFunc = {
                            function(pos) {
                              let scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
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
                        radius={5} 
                        fill={`#${atom.cpk_hex_color}`} 
                        />                      
                    } else if ( i === 5) {
                        let radius = 50
                        const x = startingXposAnion+1*20
                        const y = this.state.canvas[0].yion1+parseInt(atom.atomic_radius)
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
                        x={x} 
                        y={y} 
                        radius={5} 
                        fill={`#${atom.cpk_hex_color}`} 
                        />

                    } else if ( i === 2) {
                        let radius = this.state.looseRadius
                        const x = startingXposAnion+parseInt(atom.atomic_radius)
                        const y = this.state.canvas[0].yion1-20
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
                        draggable={this.state.draggable3}
                        x={x} 
                        y={y} 
                        radius={5} 
                        // fill={`#${atom.cpk_hex_color}`} 
                        fill={this.state.electronOxygenColor1}
                        // fill='orange'
                        onDragStart={this.handleDragStart}
                        onDragEnd={this.handleDragEnd3}
                        />
                    } else if ( i === 0) {
                        return <Ellipse 
                        fill="white"
                        x={30+startingXposAnion+parseInt(atom.atomic_radius)}
                        y={10+this.state.canvas[0].yion1+20}
                        radiusX={7}
                        radiusY={20}                        
                        stroke="black"
                        strokeWidth="1"
                        shadowBlur={this.state.shawodBlur1} 
                        />
                    } 
                    else if ( i === 4) {
                        let radius = 50
                        const x = startingXposAnion-1*20
                        const y = this.state.canvas[0].yion1+parseInt(atom.atomic_radius)
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
                        x={x} 
                        y={y} 
                        radius={5} 
                        fill={`#${atom.cpk_hex_color}`} 
                        />
                    } else if ( i === 6) {
                        let radius = 50
                        const x = startingXposAnion+1*20
                        const y = this.state.canvas[0].yion1-parseInt(atom.atomic_radius)
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
                                } else {
                                    return pos
                                }
                            }
                        }
                        draggable 
                        x={x} 
                        y={y} 
                        radius={5} 
                        fill={`#${atom.cpk_hex_color}`} 
                        />
                    } else if ( i === 1) {
                        let radius = this.state.looseRadius
                        const x = startingXposAnion-parseInt(atom.atomic_radius)
                        const y = this.state.canvas[0].yion1+20
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
                                } else {
                                    return pos
                                }
                            }
                        }
                        draggable 
                        x={x} 
                        y={y}
                        radius={5} 
                        draggable={this.state.draggable4}

                        fill={this.state.electronOxygenColor2}
                        onDragStart={this.handleDragStart}
                        onDragEnd={this.handleDragEnd4}
                        />
                     } else if ( i === 7) {
                        console.log('here')
                        return <Ellipse 
                        fill="white"
                        x={-45+startingXposAnion-parseInt(atom.atomic_radius)} 
                        y={50+this.state.canvas[0].yion1-20}
                        radiusX={20}
                        radiusY={7}
                        stroke="black"
                        strokeWidth="1"
                        shadowBlur={this.state.shawodBlur2}
                        />
                    }
            })}
            </>
        )

    }

    handleDragStart = e => {
        console.log('start drag')
    };

    handleDragEnd1 = e => {
        this.handleDragEnd1.called = false
        console.log('end drag')
        console.log(e.target.attrs.x)
        if (e.target.attrs.x <= 701 && e.target.attrs.x >= 692 && e.target.attrs.y <= 276 && e.target.attrs.y >= 251 ) {
            this.setState(prevState => ({
                electronColor1: "purple",
                draggable1: false,
                shawodBlur1: 0
              })); 
              console.log('1', "here")

        }


    }

    handleDragEnd2 = e => {
        this.handleDragEnd2.called = false
        console.log('end drag')
        console.log(e.target)
        if (e.target.attrs.x <= 305 && e.target.attrs.x >= 298 && e.target.attrs.y <= 260 && e.target.attrs.y >= 251 ) {
            this.setState(prevState => ({
                electronColor2: "purple",
                draggable2: false,
              }));  
        } 
    }

    handleDragEnd3 = e => {
        this.handleDragEnd3.called = false
        console.log('end drag')
        console.log(e.target)
        if (e.target.attrs.x <= 696 && e.target.attrs.x >= 690 && e.target.attrs.y <= 281 && e.target.attrs.y >= 238) {
            this.setState(prevState => ({
                electronOxygenColor1: "purple",
                draggable3: false,
              })); 
              console.log('3', "here")
        }

    }

    handleDragEnd4 = e => {
        this.handleDragEnd4.called = false
        console.log('4 end drag')
        console.log(e.target)
        if (e.target.attrs.x <= 335 && e.target.attrs.x >= 292 && e.target.attrs.y <= 263 && e.target.attrs.y >= 256) {
            this.setState(prevState => ({
                electronOxygenColor2: "purple",
                draggable4: false,
                shawodBlur2: 0
              })); 
        }
    }


    // handleDragEnd1 = e => {
    //     this.handleDragEnd1.called = false
    //     console.log('end drag')
    //     console.log(e.target.attrs.x)
    //     if (e.target._lastPos.x <= 701 && e.target._lastPos.x >= 693 && e.target._lastPos.y <= 276 && e.target._lastPos.y >= 251 
    //         && this.handleDragEnd2.called
    //         && this.handleDragEnd3.called
    //         && this.handleDragEnd4.called) {
    //         this.handleDragEnd()
    //     } else if (e.target._lastPos.x <= 701 && e.target._lastPos.x >= 693 && e.target._lastPos.y <= 276 && e.target._lastPos.y >= 251) {
    //         this.handleDragEnd1.called = true
    //     }
    // }

    // handleDragEnd2 = e => {
    //     this.handleDragEnd2.called = false
    //     console.log('end drag')
    //     console.log(e.target)
    //     if (e.target._lastPos.x <= 305 && e.target._lastPos.x >= 298 && e.target._lastPos.y <= 260 && e.target._lastPos.y >= 251 
    //         && this.handleDragEnd1.called
    //         && this.handleDragEnd3.called
    //         && this.handleDragEnd4.called ) {
    //         this.handleDragEnd()
    //     } else if (e.target._lastPos.x <= 305 && e.target._lastPos.x >= 298 && e.target._lastPos.y <= 260 && e.target._lastPos.y >= 251)  {
    //         this.handleDragEnd2.called = true
    //         // turn draggable off
    //     }
    //     console.log('2', this.handleDragEnd1.called, this.handleDragEnd2.called, this.handleDragEnd3.called,
    //     this.handleDragEnd4.called)
    // }

    // handleDragEnd3 = e => {
    //     this.handleDragEnd3.called = false
    //     console.log('end drag')
    //     console.log(e.target)
    //     if (e.target._lastPos.x <= 696 && e.target._lastPos.x >= 693 && e.target._lastPos.y <= 281 && e.target._lastPos.y >= 238
    //         && this.handleDragEnd1.called
    //         && this.handleDragEnd2.called
    //         && this.handleDragEnd4.called) {
    //         this.handleDragEnd()
    //     } else if (e.target._lastPos.x <= 696 && e.target._lastPos.x >= 693 && e.target._lastPos.y <= 281 && e.target._lastPos.y >= 238) {
    //         this.handleDragEnd3.called = true
    //     }
    // }

    // handleDragEnd4 = e => {
    //     this.handleDragEnd4.called = false
    //     console.log('end drag')
    //     console.log(e.target)
    //     if (e.target._lastPos.x <= 335 && e.target._lastPos.x >= 292 && e.target._lastPos.y <= 263 && e.target._lastPos.y >= 256 
    //         && this.handleDragEnd1.called
    //         && this.handleDragEnd2.called
    //         && this.handleDragEnd3.called) {
    //         this.handleDragEnd()
    //     } else if (e.target._lastPos.x <= 335 && e.target._lastPos.x >= 292 && e.target._lastPos.y <= 263 && e.target._lastPos.y >= 256) {
    //         this.handleDragEnd4.called = true
    //     }
    // }

    handleDragEnd = () => {
        // console.log('end drag')
        console.log('you did it!')    
            this.setState(prevState => ({
                electronColor: "purple",
                electronOxygenColor: "purple",
                radius: 30,
              }));
    }

    renderCompound = (cation, anion) => {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight-150}>
                <Layer>
                
                    
                    {this.state.canvas.map(({ x, y, text, x2, y2, text2 }, key) => (
                    <>
                        <Text
                            key={key}
                            x={x}
                            y={y}
                            text={text}
                            fontSize={15}
                        />
                        <Text
                            key={key}
                            x={x2}
                            y={y2}
                            text={text2}
                            fontSize={15}
                        />
                    </>
                    ))}

                    <Text x={this.state.canvas[0].ypos} y={this.state.canvas[0].delta} text="Chemical equation: 2H + O = H2O" fontSize={25} />
                    {/* <Text x={this.state.canvas[0].ypos} y={50} text="Can you transfer lithium's electrons to form an ionic bond?" fontSize={18} /> */}
                    <Circle className="electronOrbit" x={this.state.canvas[0].xion1} y={this.state.canvas[0].yion1} radius={anion.atomic_radius} stroke="black" />
                    <Circle  className="nucleus" x={this.state.canvas[0].xion1} y={this.state.canvas[0].yion1} radius={anion.atomic_radius/10} fill={`#${anion.cpk_hex_color}`}/>
                    <Circle  className="nucleusOutline" x={this.state.canvas[0].xion1} y={this.state.canvas[0].yion1} radius={anion.atomic_radius/10} stroke="black" strokeWidth='1'/>
                    {this.renderElectronsAnion(anion)} 
                    <Circle className="electronOrbit" x={this.state.canvas[0].xion2} y={this.state.canvas[0].yion2} radius={cation.atomic_radius} stroke="black" />
                    <Circle  className="nucleus" x={this.state.canvas[0].xion2} y={this.state.canvas[0].yion2} radius={cation.atomic_radius/10} fill={`#${cation.cpk_hex_color}`}/>
                    <Circle  className="nucleusOutline" x={this.state.canvas[0].xion2} y={this.state.canvas[0].yion2} radius={cation.atomic_radius/10} stroke="black" strokeWidth='1'/>
                    <Circle className="electronOrbit" x={this.state.canvas[0].xion3} y={this.state.canvas[0].yion3} radius={cation.atomic_radius} stroke="black" />
                    <Circle  className="nucleus" x={this.state.canvas[0].xion3} y={this.state.canvas[0].yion3} radius={cation.atomic_radius/10} fill={`#${cation.cpk_hex_color}`}/>
                    <Circle  className="nucleusOutline" x={this.state.canvas[0].xion3} y={this.state.canvas[0].yion3} radius={cation.atomic_radius/10} stroke="black" strokeWidth='1'/>
                    {this.renderElectronsCation2(cation)}
                    {this.renderElectronsCation(cation)}


                    
                </Layer>
            </Stage>
        )
    }

    render() {
        return (
        <>
           {this.renderCompound(this.props.hydrogen, this.props.oxygen)}
           <p>
               Future works: double and triple bonding
               {/* Next let's look at <Link to='/covalentbond'>Covalent Bonding</Link>. */}
            </p> 

            {/* <br/>
            <br/>
            <Link to='/ionicbond2'>Ionic Bond 2</Link>
            <br/>
            <Link to='/ionicbondtest'>Test</Link>
            <br/> */}
        </>
    )}
}


