import React from 'react'
import { Stage, Layer, Text, Rect } from 'react-konva';
// import { stages } from 'konva/types/Stage';
export default class RectsList extends React.Component {

    state = {
        opacity: 1
    }

    handleOnMouseEnter = (e) => {
        const container = e.target.getStage().container();
        container.style.cursor = "pointer";
    }

    handleOnMouseLeave = (e) => {
        const container = e.target.getStage().container();
        container.style.cursor = "default";
    } 

    
    render() {

        // const canvasWidth = 1000
        // const canvasHeight = 1000

        // const scale = Math.min(
        //     window.innerWidth / canvasWidth,
        //     window.innerHeight / canvasHeight
        // )
        
        let one = []
        let two = []
        let three = []
        let four = []
        let five = []
        let six = []
        let seven = []
        let eight = []
        let nine = []
        let ten = []
        let eleven = []
        let twelve = []
        let thirteen = []
        let fourteen = []
        let fifteen = []
        let sixteen = []
        let seventeen = []
        let eighteen = []
        let lanth = []
        let actin = []


        this.props.atoms.map((atom, i) => {
            if (atom.symbol==="H" || atom.group_block==="Alkali metal") {
                one.push(atom)
            }
            if (atom.group_block==="Alkaline earth metal") {
                two.push(atom)
            }
            if (atom.symbol==="Sc" || atom.symbol==="Y") {
                three.push(atom)
            }
            if (atom.symbol==="Ti" || atom.symbol==="Zr" 
            || atom.symbol==="Hf" || atom.symbol==="Rf") {
                four.push(atom)
            }
            if (atom.symbol==="V" || atom.symbol==="Nb" 
            || atom.symbol==="Ta" || atom.symbol==="Db") {
                five.push(atom)
            }
            if (atom.symbol==="Cr" || atom.symbol==="Mo" 
            || atom.symbol==="W" || atom.symbol==="Sg") {
                six.push(atom)
            }
            if (atom.symbol==="Mn" || atom.symbol==="Tc" 
            || atom.symbol==="Re" || atom.symbol==="Bh") {
                seven.push(atom)
            }
            if (atom.symbol==="Fe" || atom.symbol==="Ru" 
            || atom.symbol==="Os" || atom.symbol==="Hs") {
                eight.push(atom)
            }
            if (atom.symbol==="Co" || atom.symbol==="Rh" 
            || atom.symbol==="Ir" || atom.symbol==="Mt") {
                nine.push(atom)
            }
            if (atom.symbol==="Ni" || atom.symbol==="Pd" 
            || atom.symbol==="Pt" || atom.symbol==="Ds") {
                ten.push(atom)
            }
            if (atom.symbol==="Cu" || atom.symbol==="Ag" 
            || atom.symbol==="Au" || atom.symbol==="Rg") {
                eleven.push(atom)
            }
            if (atom.symbol==="Zn" || atom.symbol==="Cd" 
            || atom.symbol==="Hg" || atom.symbol==="Cn") {
                twelve.push(atom)
            }
            if (atom.symbol==="B" || atom.symbol==="Al" 
            || atom.symbol==="Ga" || atom.symbol==="In"
            || atom.symbol==="Tl" || atom.symbol==="Nh" ) {
                thirteen.push(atom)
            }
            if (atom.symbol==="C" || atom.symbol==="Si" 
            || atom.symbol==="Ge" || atom.symbol==="Sn"
            || atom.symbol==="Pb" || atom.symbol==="Fl" ) {
                fourteen.push(atom)
            }
            if (atom.symbol==="N" || atom.symbol==="P" 
            || atom.symbol==="As" || atom.symbol==="Sb"
            || atom.symbol==="Bi" || atom.symbol==="Mc" ) {
                fifteen.push(atom)
            }
            if (atom.symbol==="O" || atom.symbol==="S" 
            || atom.symbol==="Se" || atom.symbol==="Te"
            || atom.symbol==="Po" || atom.symbol==="Lv" ) {
                sixteen.push(atom)
            }
            if (atom.symbol==="F" || atom.symbol==="Cl" 
            || atom.symbol==="Br" || atom.symbol==="I"
            || atom.symbol==="At" || atom.symbol==="Ts" ) {
                seventeen.push(atom)
            }
            if (atom.symbol==="He" || atom.symbol==="Ne" 
            || atom.symbol==="Ar" || atom.symbol==="Kr"
            || atom.symbol==="Xe" || atom.symbol==="Rn"
            || atom.symbol==="Og" ) {
                eighteen.push(atom)
            }
            if (atom.group_block === "Lanthanide" ) {
                lanth.push(atom)
            }
            if (atom.group_block === "Actinide" ) {
                actin.push(atom)
            }
        })
        const width = 60
        const height = 65
        const fontSizeNum = 15
        const fontSizeSym = 25
        const delta = 5
        const card = 75
        
        
        return (
            
            <Stage width={window.innerWidth} height={window.innerHeight}>
            {/* // <Stage width={window.innerWidth} height={window.innerHeight} scaleX={scale} scaleY={scale}> */}
                <Layer>
                {one.map((atom, i) => {
                    let xr = 10
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr}
                    width={width}
                    height={height}
                    stroke="black"
                    opacity={this.state.opacity}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={height/2}
                    y={yr+delta}
                    fill={"#C8C8C8"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={height/2-delta}
                    y={yr+width/2}
                    fill={"#C8C8C8"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {two.map((atom, i) => {
                    let xr = 10
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={card+delta}
                    y={yr+card}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={height/2+card}
                    y={yr+card+delta}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={height/2+card-delta*3}
                    y={yr+card+width/2}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {three.map((atom, i) => {
                    let xr = 150
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+card*3}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card*3+width/2}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {four.map((atom, i) => {
                    let xr = 150+70
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75*3}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card*3+width/2}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {five.map((atom, i) => {
                    let xr = 150+70+70
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75*3}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card*3+width/2}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {six.map((atom, i) => {
                    let xr = 150+70+70+70
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75*3}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card*3+width/2}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {seven.map((atom, i) => {
                    let xr = 150+70+70+70+70
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75*3}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card*3+width/2}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {eight.map((atom, i) => {
                    let xr = 150+70+70+70+70+70
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75*3}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                     <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card*3+width/2}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {nine.map((atom, i) => {
                    let xr = 150+70+70+70+70+70+70
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75*3}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card*3+width/2}
                    fill={"black"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {ten.map((atom, i) => {
                    let xr = 150+70+70+70+70+70+70+70
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75*3}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card*3+width/2}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {eleven.map((atom, i) => {
                    let xr = 150+70+70+70+70+70+70+70+70
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75*3}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card*3+width/2}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {twelve.map((atom, i) => {
                    let xr = 150+70+70+70+70+70+70+70+70+70
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75*3}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card*3+width/2}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {thirteen.map((atom, i) => {
                    let xr = 150+70*10
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card+delta}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card+width/2}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {fourteen.map((atom, i) => {
                    let xr = 150+70*11
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card+delta}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card+width/2}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {fifteen.map((atom, i) => {
                    let xr = 150+70*12
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card+delta}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card+width/2}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {sixteen.map((atom, i) => {
                    let xr = 150+70*13
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card+delta}
                    fill={"gray"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card+width/2}
                    fill={"gray"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {seventeen.map((atom, i) => {
                    let xr = 150+70*14
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr+75}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card+delta}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+card+width/2}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {eighteen.map((atom, i) => {
                    let xr = 150+70*15
                    let yr = i*75+1
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+height/2-delta*2}
                    y={yr+delta}
                    fill={"#C8C8C8"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+width/2}
                    fill={"#C8C8C8"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {lanth.map((atom, i) => {
                    let xr = 70*i+70*3+10
                    let yr = 75*7+20
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+height/2-delta*2}
                    y={yr+delta}
                    fill={"gray"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+width/2}
                    fill={"gray"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                {actin.map((atom, i) => {
                    let xr = 70*i+70*3+10
                    let yr = 75*7+20+75
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={xr}
                    y={yr}
                    width={width}
                    height={height}
                    stroke="black"
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {
                        this.props.routerProps.history.push(`/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+height/2-delta*2}
                    y={yr+delta}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*3}
                    y={yr+width/2}
                    fill={"white"}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={() => {this.props.routerProps.history.push(`/atoms/${atom.id}`)}}
                    />
                    </>
                    })}
                
                </Layer>
            </Stage>


        );
    }
}