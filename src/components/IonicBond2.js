import React from 'react'
import { Stage, Layer, Text, Circle, Rect } from 'react-konva';

export default class IonicBond2 extends React.Component {

    state = {
        canvas: [
          {
            x: 180,
            y: 230,
            text: "Charge of Hydrogen: 0",
            x2: 480,
            y2: 180,
            text2: "Charge of Oxygen: 0"
          }
        ],
        rect1: [
            {}
        ],
        rect2: [
            {}
        ],
        rect3: [
            {}
        ],
        rect4: [
            {}
        ],
        rect5: [
            {}
        ],
        rect6: [
            {}
        ],
        circ1: [
            {}
        ],
        circ2: [
            {}
        ]
      };

    renderElectronsH = (atom) =>  {
        const arr = []
        // let valenceElectrons = 0
        let valenceElectrons = atom.atomic_number

        // if (atom.atomic_number > 2) {
        //     valenceElectrons = atom.atomic_number - 2
        // }
        // if (atom.atomic_number > 10) {
        //     valenceElectrons = atom.atomic_number - 10
        // }
        // if (atom.atomic_number > 18) {
        //     valenceElectrons = atom.atomic_number - 18
        // }

        for (let i=0; i<valenceElectrons; i++){
            arr.push(i)
        }  
        console.log(arr)      
        return (
            <>
            {arr.map( i => {
                const radius = 50
                    if (i === 0) {
                        //
                        const x = 250+parseInt(atom.atomic_radius)
                        console.log('hy')
                        const y = 300-20
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
                        fill="black"
                        onDragStart={this.handleDragStart}
                        onDragEnd={this.handleDragEnd1}
                        />                      
                    } 
            })}
            </>
        )
    }

    renderElectronsH2 = (atom) =>  {
        const arr = []
        // let valenceElectrons = 0
        let valenceElectrons = atom.atomic_number

        // if (atom.atomic_number > 2) {
        //     valenceElectrons = atom.atomic_number - 2
        // }
        // if (atom.atomic_number > 10) {
        //     valenceElectrons = atom.atomic_number - 10
        // }
        // if (atom.atomic_number > 18) {
        //     valenceElectrons = atom.atomic_number - 18
        // }

        for (let i=0; i<valenceElectrons; i++){
            arr.push(i)
        }  
        console.log(arr)      
        return (
            <>
            {arr.map( i => {
                const radius = 50
                    if (i === 0) {
                        //
                        const x = 850-parseInt(atom.atomic_radius)
                        const y = 300-20
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
                        fill="black"
                        onDragStart={this.handleDragStart}
                        onDragEnd={this.handleDragEnd2}
                        />                      
                    } 
            })}
            </>
        )
    }

    //rendering anion electrons
    renderElectronsO = (atom) =>  {
        // change this here
        const startingXposCl = 300+250
        // add to this array
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
                const radius = 50
                    if (i === 0) {
                        const x=startingXposCl-1*20
                        const y=300-parseInt(atom.atomic_radius)
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
                        fill="black" 
                        />                      
                    } else if ( i === 1) {
                        const x = startingXposCl+1*20
                        const y = 300+parseInt(atom.atomic_radius)
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
                        fill="gray" 
                        />

                    } else if ( i === 2) {
                        const x = startingXposCl+parseInt(atom.atomic_radius)
                        const y = 300-20
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
                        fill="green" 
                        />
                    } else if ( i === 3) {
                        // const x = startingXposCl+parseInt(atom.atomic_radius) 
                        // const y = 300+20
                        // return <Circle 
                        // dragBoundFunc = {
                        //     function(pos) {
                        //         let scale = 
                        //         radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
                        //         if (scale < 1) {
                        //             return {
                        //                 y: Math.round((pos.y - y) * scale + y),
                        //                 x: Math.round((pos.x - x) * scale + x)
                        //             }
                        //         } else {
                        //             return pos
                        //         }
                        //     }
                        // }
                        // draggable 
                        // x={x} 
                        // y={y}
                        // radius={5} 
                        // fill="orange"
                        console.log('here')
                        return <Circle 
                        fill="white"
                        x={startingXposCl+parseInt(atom.atomic_radius)}
                        y={300+20}
                        radius={5}
                        stroke="black"
                        strokeWidth="1"
                        shadowBlur={10} 
                        />
                    } else if ( i === 4) {
                        const x = startingXposCl-1*20
                        const y = 300+parseInt(atom.atomic_radius)
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
                        fill="blue" 
                        />
                    } else if ( i === 5) {
                        const x = startingXposCl+1*20
                        const y = 300-parseInt(atom.atomic_radius)
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
                        fill="yellow" 
                        />
                    } else if ( i === 6) {
                        const x = startingXposCl-parseInt(atom.atomic_radius)
                        const y = 300+20
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
                        fill="purple" 
                        />
                    } else if ( i === 7) {
                        console.log('here')
                        return <Circle 
                        fill="white"
                        x={startingXposCl-parseInt(atom.atomic_radius)} 
                        y={300-20}
                        radius={5}
                        stroke="black"
                        strokeWidth="1"
                        shadowBlur={10}
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
        console.log(e.target)
        if (e.target._lastPos.x === 398 && e.target._lastPos.y === 280 && this.handleDragEnd2.called) {
            this.handleDragEnd()
        } else {
            this.handleDragEnd1.called = true
        }
    }

    handleDragEnd2 = e => {
        this.handleDragEnd2.called = false
        console.log('end drag')
        console.log(e.target)
        if (e.target._lastPos.x === 702 && e.target._lastPos.y === 320 && this.handleDragEnd1.called) {
            this.handleDragEnd()
        } else if (e.target._lastPos.x === 702 && e.target._lastPos.y === 320)  {
            this.handleDragEnd2.called = true
            // turn draggable off
        }
    }

    handleDragEnd = () => {
        console.log('end drag')
        // console.log(e.target)
        // if (e.target._lastPos.x === 398 && e.target._lastPos.y === 280) {
            console.log('you did it!')
            // this.setState(prevState => ({
            //     canvas: [{ ...newText() }]
            //   }));
            this.setState(prevState => ({
                canvas: [{ ...newText() }],
                rect1: [{...newRects1()}],
                rect2: [{...newRects2()}],
                rect3: [{...newRects3()}],
                rect4: [{...newRects4()}],
                rect5: [{...newRects5()}],
                rect6: [{...newRects6()}]
              }));
            //   console.log('state', this.state)

            //   console.log('state rect', this.state.rect1[0].xr)
            // this.popUpQuestion()
        // }
    }

    handleClick1 = e => {
        console.log('YOU got it!')
        console.log('state', this.state)
        this.setState(prevState => ({
            canvas: [...prevState.canvas],
            rect1: [...prevState.rect1],
            rect2: [...prevState.rect2],
            rect3: [...prevState.rect3],
            rect4: [...prevState.rect4],
            rect5: [...prevState.rect5],
            rect6: [...prevState.rect6],
            circ1: [{...newCirc1()}],
          })); 
          console.log('state', this.state)
    }

    handleClick2 = e => {
        console.log('YOU got it!')
        console.log('state', this.state)
        this.setState(prevState => ({
            canvas: [...prevState.canvas],
            rect1: [...prevState.rect1],
            rect2: [...prevState.rect2],
            rect3: [...prevState.rect3],
            rect4: [...prevState.rect4],
            rect5: [...prevState.rect5],
            rect6: [...prevState.rect6],
            circ2: [{...newCirc2()}]
          })); 
          console.log('state', this.state)
    }

    renderSodiumAndChlorine = (sodiumAtom, chlorineAtom) => {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
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
                    <Text x={300} y={20} text="Chemical equation: 2H + O = H2O" fontSize={25} />
                    <Text x={300} y={50} text="Can you transfer hydrogen's electrons to form an ionic bond?" fontSize={18} />

                    <Circle className="electronOrbit" x={300+250} y={300} radius={chlorineAtom.atomic_radius} stroke="black" />
                    <Circle  className="nucleus" x={300+250} y={300} radius={chlorineAtom.atomic_radius/10} fill={`#${chlorineAtom.cpk_hex_color}`}/>
                    <Circle  className="nucleusOutline" x={300+250} y={300} radius={chlorineAtom.atomic_radius/10} stroke="black" strokeWidth='1'/>
                    {this.renderElectronsO(chlorineAtom)}

                    {/* <Text x={210} y={170} text={`The charge of ${sodiumAtom.name} is 0.`} fontSize={15} /> */}
                    <Circle className="electronOrbit" x={250} y={300} radius={sodiumAtom.atomic_radius} stroke="black" />
                    <Circle  className="nucleus" x={250} y={300} radius={sodiumAtom.atomic_radius/10} fill={`#${sodiumAtom.cpk_hex_color}`}/>
                    <Circle  className="nucleusOutline" x={250} y={300} radius={sodiumAtom.atomic_radius/10} stroke="black" strokeWidth='1'/>
                    {this.renderElectronsH(sodiumAtom)}

                    <Circle className="electronOrbit" x={850} y={300} radius={sodiumAtom.atomic_radius} stroke="black" />
                    <Circle  className="nucleus" x={850} y={300} radius={sodiumAtom.atomic_radius/10} fill={`#${sodiumAtom.cpk_hex_color}`}/>
                    <Circle  className="nucleusOutline" x={850} y={300} radius={sodiumAtom.atomic_radius/10} stroke="black" strokeWidth='1'/>
                    {this.renderElectronsH2(sodiumAtom)}

                    {this.state.rect1.map(({ xr, yr, width, height }, key) => (
                    <>
                        { this.state.rect1[0].xr ? <Text x={xr+(width/2)-5} y={yr+(height/2)-5} text="+1" /> : null }

                        <Rect 
                            key={key}
                            x={xr}
                            y={yr}
                            width={width}
                            height={height}
                            onClick={this.handleClick1}
                            // onClick={this.handleClick}
                            stroke="gray"
                        />
                        
                    </>
                    ))}
                    {this.state.rect2.map(({ xr, yr, width, height }, key) => (
                    <>
                        <Rect 
                            key={key}
                            x={xr}
                            y={yr}
                            width={width}
                            height={height}
                            // onClick={this.handleClick}
                            stroke="gray"
                        />
                        { this.state.rect2[0].xr ? <Text x={xr+(width/2)-5} y={yr+(height/2)-5} text="+2" /> : null }
                        
                    </>
                    ))}
                    {this.state.rect3.map(({ xr, yr, width, height }, key) => (
                    <>
                        <Rect 
                            key={key}
                            x={xr}
                            y={yr}
                            width={width}
                            height={height}
                            // onClick={this.handleClick}
                            stroke="gray"
                        />
                        { this.state.rect4[0].xr ? <Text x={xr+(width/2)-5} y={yr+(height/2)-5} text="-1" /> : null }
                        
                    </>
                    ))}
                    {this.state.rect4.map(({ xr, yr, width, height }, key) => (
                    <>
                        <Rect 
                            key={key}
                            x={xr}
                            y={yr}
                            width={width}
                            height={height}
                            // onClick={this.handleClick}
                            stroke="gray"
                        />
                        { this.state.rect4[0].xr ? <Text x={xr+(width/2)-5} y={yr+(height/2)-5} text="+1" /> : null }
                        
                    </>
                    ))}
                    {this.state.rect5.map(({ xr, yr, width, height }, key) => (
                    <>
                        <Rect 
                            key={key}
                            x={xr}
                            y={yr}
                            width={width}
                            height={height}
                            // onClick={this.handleClick}
                            stroke="gray"
                        />
                        { this.state.rect5[0].xr ? <Text x={xr+(width/2)-5} y={yr+(height/2)-5} text="+2" /> : null }
                        
                    </>
                    ))}
                    {this.state.rect6.map(({ xr, yr, width, height }, key) => (
                    <>
                        { this.state.rect6[0].xr ? <Text x={xr+(width/2)-5} y={yr+(height/2)-5} text="-1"/> : null }
                        <Rect 
                            key={key}
                            x={xr}
                            y={yr}
                            width={width}
                            height={height}
                            // onClick={this.handleClick}
                            stroke="gray"
                            onClick={this.handleClick2}
                        />
                        
                    </>
                    ))}
                    {this.state.circ1.map(({ x, y, radius}, key) => (
                    <>
                        <Circle 
                            key={key}
                            x={x}
                            y={y}
                            radius={radius}
                            // height={height}
                            // // onClick={this.handleClick}
                            stroke="black"
                        />                        
                    </>
                    ))}
                    {this.state.circ2.map(({ x, y, radius}, key) => (
                    <>
                        <Circle 
                            key={key}
                            x={x}
                            y={y}
                            radius={radius}
                            // height={height}
                            // // onClick={this.handleClick}
                            stroke="black"
                        />                        
                    </>
                    ))}
                </Layer>
            </Stage>
        )
    }

    render() {
        return (
        <>
           {this.renderSodiumAndChlorine(this.props.hydrogen, this.props.oxygen)}
        </>
    )}
}

const newText = () => ({
    x: 190,
    y: 140,
    text: "Charge of Hydrogen now?",
    x2: 470,
    y2: 200,
    text2: "Charge of Oxygen now?"
  
});

const newRects1 = () => ({
    xr: 150,
    yr: 250,
    width: 20,
    height: 20
})

const newRects2 = () => ({
    xr: 240,
    yr: 250,
    width: 20,
    height: 20
})

const newRects3 = () => ({
    xr: 330,
    yr: 250,
    width: 20,
    height: 20
})

const newRects4 = () => ({
    xr: 450,
    yr: 250,
    width: 20,
    height: 20
})

const newRects5 = () => ({
    xr: 550,
    yr: 250,
    width: 20,
    height: 20
})

const newRects6 = () => ({
    xr: 650,
    yr: 250,
    width: 20,
    height: 20
})

const newCirc1 = () => ({
    x: 160,
    y: 260,
    radius: 30,
    // stroke: "black",
    // strokeWidth: 1
})

const newCirc2 = () => ({
    x: 860,
    y: 260,
    radius: 30,
    // stroke: "black",
    // strokeWidth: 1
})

