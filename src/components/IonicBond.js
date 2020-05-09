import React from 'react'
import { Stage, Layer, Text, Circle, Rect } from 'react-konva';
import QuestionInput from './QuestionInput'
// import { connect } from 'react-redux'

// const IonicBond = (props) => {

// const newText = () => ({
//     x: 300,
//     y: 50,
//     x2: 700,
//     y2: 50,
//     textNa: "What is the charge of Sodium now?",
//     textCl: "What is the charge of Chlorine now?"
//     });
export default class IonicBond extends React.Component {

    state = {
        canvas: [
          {
            x: 210,
            y: 170,
            text: "Charge of Sodium: 0",
            x2: 660,
            y2: 170,
            text2: "Charge of Chlorine: 0"
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
        ]
      };

    renderElectronsNa = (atom) =>  {

        const arr = []
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
                        const x = 300+parseInt(atom.atomic_radius)

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
                        onDragEnd={this.handleDragEnd}
                        />                      
                    } 
            })}
            </>
        )
    }

    renderElectronsCl = (atom) =>  {

        const startingXposCl = 300+450

        const arr = [7]
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
                        const x = startingXposCl+parseInt(atom.atomic_radius) 
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
                        fill="orange" 
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
    
    handleDragEnd = e => {
        console.log('end drag')
        console.log(e.target)
        if (e.target._lastPos.x === 575 && e.target._lastPos.y === 280) {
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
              console.log('state', this.state)

              console.log('state rect', this.state.rect1[0].xr)
            // this.popUpQuestion()
        }
    }

    handleClick = e => {
        console.log('YOU got it!')
    }

    renderSodiumAndChlorine = (sodiumAtom, chlorineAtom) => {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                
                    
                    {this.state.canvas.map(({ x, y, text, x2, y2, text2, xr, yr, width, height }, key) => (
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
                    {/* <Text x={660} y={170} text={`The charge of ${chlorineAtom.name} is 0.`} fontSize={15} /> */}
                    <Circle className="electronOrbit" x={300+450} y={300} radius={chlorineAtom.atomic_radius} stroke="black" />
                    <Circle  className="nucleus" x={300+450} y={300} radius={chlorineAtom.atomic_radius/10} fill={`#${chlorineAtom.cpk_hex_color}`}/>
                    <Circle  className="nucleusOutline" x={300+450} y={300} radius={chlorineAtom.atomic_radius/10} stroke="black" strokeWidth='1'/>
                    {this.renderElectronsCl(chlorineAtom)}

                    {/* <Text x={210} y={170} text={`The charge of ${sodiumAtom.name} is 0.`} fontSize={15} /> */}
                    <Circle className="electronOrbit" x={300} y={300} radius={sodiumAtom.atomic_radius} stroke="black" />
                    <Circle  className="nucleus" x={300} y={300} radius={sodiumAtom.atomic_radius/10} fill={`#${sodiumAtom.cpk_hex_color}`}/>
                    <Circle  className="nucleusOutline" x={300} y={300} radius={sodiumAtom.atomic_radius/10} stroke="black" strokeWidth='1'/>
                    {this.renderElectronsNa(sodiumAtom)}

                    {this.state.rect1.map(({ xr, yr, width, height }, key) => (
                    <>
                        <Rect 
                            key={key}
                            x={xr}
                            y={yr}
                            width={width}
                            height={height}
                            // onClick={this.handleClick}
                            fill="green"
                        />
                        { this.state.rect1[0].xr ? <Text fill="white" x={xr+(width/2)-5} y={yr+(height/2)-5} text="+1" onClick={this.handleClick}/> : null }
                        
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
                            fill="purple"
                        />
                        { this.state.rect2[0].xr ? <Text fill="white" x={xr+(width/2)-5} y={yr+(height/2)-5} text="+2" /> : null }
                        
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
                            fill="blue"
                        />
                        { this.state.rect4[0].xr ? <Text fill="white" x={xr+(width/2)-5} y={yr+(height/2)-5} text="-1" /> : null }
                        
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
                            fill="green"
                        />
                        { this.state.rect4[0].xr ? <Text fill="white" x={xr+(width/2)-5} y={yr+(height/2)-5} text="+1" /> : null }
                        
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
                            fill="purple"
                        />
                        { this.state.rect5[0].xr ? <Text fill="white" x={xr+(width/2)-5} y={yr+(height/2)-5} text="+2" /> : null }
                        
                    </>
                    ))}
                    {this.state.rect6.map(({ xr, yr, width, height }, key) => (
                    <>
                        <Rect 
                            key={key}
                            x={xr}
                            y={yr}
                            width={width}
                            height={height}
                            // onClick={this.handleClick}
                            fill="blue"
                        />
                        { this.state.rect6[0].xr ? <Text fill="white" x={xr+(width/2)-5} y={yr+(height/2)-5} text="-1" onClick={this.handleClick}/> : null }
                        
                    </>
                    ))}
                </Layer>
            </Stage>
        )
    }

    render() {
        return (
        <>
           {this.renderSodiumAndChlorine(this.props.sodium, this.props.chlorine)}
        </>
    )}
}

const newText = () => ({
    x: 190,
    y: 200,
    text: "What is the charge of Sodium now?",
    x2: 630,
    y2: 200,
    text2: "What is the charge of Chlorine now?"
  
});

const newRects1 = () => ({
    xr: 190,
    yr: 250,
    width: 20,
    height: 20
})

const newRects2 = () => ({
    xr: 300,
    yr: 250,
    width: 20,
    height: 20
})

const newRects3 = () => ({
    xr: 400,
    yr: 250,
    width: 20,
    height: 20
})

const newRects4 = () => ({
    xr: 650,
    yr: 250,
    width: 20,
    height: 20
})

const newRects5 = () => ({
    xr: 750,
    yr: 250,
    width: 20,
    height: 20
})

const newRects6 = () => ({
    xr: 850,
    yr: 250,
    width: 20,
    height: 20
})