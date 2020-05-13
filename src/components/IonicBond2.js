import React from 'react'
import { Stage, Layer, Text, Circle, Rect } from 'react-konva';
import { Link } from 'react-router-dom'

export default class IonicBond2 extends React.Component {

    state = {
        electronColor: `#${this.props.lithium.cpk_hex_color}`,
        canvas: [
            {
                x: 80,
                y: 130,
                text: "Charge of Li before bonding: 0",
                x2: 410,
                y2: 130,
                text2: "Charge of O before bonding: 0",
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
        label: [
            {}
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
                const radius = 50
                    if (i === 0) {
                        //
                        const x = 660
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
                        draggable 
                        x={x} 
                        y={y} 
                        radius={5} 
                        fill={this.state.electronColor}
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
                const radius = 50
                    if (i === 0) {
                        const x = 340
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
                        draggable 
                        x={x} 
                        y={y} 
                        radius={5} 
                        fill={this.state.electronColor}
                        onDragStart={this.handleDragStart}
                        onDragEnd={this.handleDragEnd2}
                        />                      
                    } 
            })}
            </>
        )
    }

    //rendering anion electrons
    renderElectronsAnion = (atom) =>  {
        // change this here
        const startingXposAnion = this.state.canvas[0].xion1
        // const startingXposAnion = 300+250
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
                    } else if ( i === 1) {
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
                        draggable 
                        x={x} 
                        y={y} 
                        radius={5} 
                        fill={`#${atom.cpk_hex_color}`} 
                        />
                    } else if ( i === 3) {
                        return <Circle 
                        fill="white"
                        x={startingXposAnion+parseInt(atom.atomic_radius)}
                        y={this.state.canvas[0].yion1+20}
                        radius={5}
                        stroke="black"
                        strokeWidth="1"
                        shadowBlur={10} 
                        />
                    } else if ( i === 4) {
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
                    } else if ( i === 5) {
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
                    } else if ( i === 6) {
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
                        fill={`#${atom.cpk_hex_color}`}
                        />
                    } else if ( i === 7) {
                        console.log('here')
                        return <Circle 
                        fill="white"
                        x={startingXposAnion-parseInt(atom.atomic_radius)} 
                        y={this.state.canvas[0].yion1-20}
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
        // if (e.target._lastPos.x === 662 && e.target._lastPos.y === 250 && this.handleDragEnd2.called) {
        if (e.target._lastPos.x <= 665 && e.target._lastPos.x >= 655 && e.target._lastPos.y <= 255 && e.target._lastPos.y >= 240 && this.handleDragEnd2.called) {
            this.handleDragEnd()
        } else if (e.target._lastPos.x <= 665 && e.target._lastPos.x >= 655 && e.target._lastPos.y <= 255 && e.target._lastPos.y >= 240) {
            this.handleDragEnd1.called = true
        }
    }

    handleDragEnd2 = e => {
        this.handleDragEnd2.called = false
        console.log('end drag')
        console.log(e.target)
        // if (e.target._lastPos.x === 358 && e.target._lastPos.y === 210 && this.handleDragEnd1.called) {
        //     this.handleDragEnd()
        if (e.target._lastPos.x <= 360 && e.target._lastPos.x >= 350 && e.target._lastPos.y <= 215 && e.target._lastPos.y >= 205 && this.handleDragEnd1.called) {
            this.handleDragEnd()
        } else if (e.target._lastPos.x <= 360 && e.target._lastPos.x >= 350 && e.target._lastPos.y <= 215 && e.target._lastPos.y >= 205)  {
            this.handleDragEnd2.called = true
            // turn draggable off
        }
    }

    handleDragEnd = () => {
        console.log('end drag')
        console.log('you did it!')    
            this.setState(prevState => ({
                label: [{...newLabel()}],
                rect1: [{...newRects1()}],
                rect2: [{...newRects2()}],
                rect3: [{...newRects3()}],
                rect4: [{...newRects4()}],
                rect5: [{...newRects5()}],
                rect6: [{...newRects6()}],
                electronColor: `#${this.props.oxygen.cpk_hex_color}`
              }));
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

                    <Text x={this.state.canvas[0].ypos} y={this.state.canvas[0].delta} text="Chemical equation: 2Li + O = Li2O" fontSize={25} />
                    <Text x={this.state.canvas[0].ypos} y={50} text="Can you transfer lithium's electrons to form an ionic bond?" fontSize={18} />
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

                    {this.state.label.map(({ x, y, text, x2, y2, text2}, key) => (
                    <>
                        <Text 
                            key={key}
                            x={x}
                            y={y}
                            text={text}  
                        />    
                        <Text 
                            key={key}
                            x={x2}
                            y={y2}
                            text={text2}  
                        />                     
                    </>

                    ))}

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
           {this.renderCompound(this.props.lithium, this.props.oxygen)}
           <p>
               Next let's look at <Link to='/covalentbond'>Covalent Bonding</Link>.
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

const newLabel = () => ({
    x: 150,
    y: 200,
    text: "Charge of Li now?",
    x2: 460,
    y2: 250,
    text2: "Charge of O now?"
})

const newRects1 = () => ({
    xr: 75,
    yr: 250,
    width: 20,
    height: 20
})

const newRects2 = () => ({
    xr: 175,
    yr: 250,
    width: 20,
    height: 20
})

const newRects3 = () => ({
    xr: 275,
    yr: 250,
    width: 20,
    height: 20
})

const newRects4 = () => ({
    xr: 400,
    yr: 280,
    width: 20,
    height: 20
})

const newRects5 = () => ({
    xr: 500,
    yr: 280,
    width: 20,
    height: 20
})

const newRects6 = () => ({
    xr: 600,
    yr: 280,
    width: 20,
    height: 20
})

const newCirc1 = () => ({
    x: 85,
    y: 260,
    radius: 30,
    // stroke: "black",
    // strokeWidth: 1
})

const newCirc2 = () => ({
    x: 610,
    y: 290,
    radius: 30,
    // stroke: "black",
    // strokeWidth: 1
})

// const changeColor = () => ({
//     electronColor: this.props.oxygen
//     // stroke: "black",
//     // strokeWidth: 1
// })

