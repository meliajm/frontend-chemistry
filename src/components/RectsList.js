import React from 'react'
import { Stage, Layer, Text, Rect } from 'react-konva';

// import RectCard from './RectCard'

export default class RectsList extends React.Component {

    render() {
        
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
                // console.log(atom, i)
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={height/2}
                    y={yr+delta}
                    fill={"#C8C8C8"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={height/2-delta}
                    y={yr+width/2}
                    fill={"#C8C8C8"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={height/2+card}
                    y={yr+card+delta}
                    fill={"black"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={height/2+card-delta*2}
                    y={yr+card+width/2}
                    fill={"black"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card*3+width/2}
                    fill={"black"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card*3+width/2}
                    fill={"black"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card*3+width/2}
                    fill={"black"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card*3+width/2}
                    fill={"black"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card*3+width/2}
                    fill={"black"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                     <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card*3+width/2}
                    fill={"black"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"black"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card*3+width/2}
                    fill={"black"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"white"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card*3+width/2}
                    fill={"white"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"white"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card*3+width/2}
                    fill={"white"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card*3+delta}
                    fill={"white"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card*3+width/2}
                    fill={"white"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card+delta}
                    fill={"white"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card+width/2}
                    fill={"white"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card+delta}
                    fill={"white"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card+width/2}
                    fill={"white"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card+delta}
                    fill={"white"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card+width/2}
                    fill={"white"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card+delta}
                    fill={"gray"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card+width/2}
                    fill={"gray"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+width/2-delta}
                    y={yr+card+delta}
                    fill={"white"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+card+width/2}
                    fill={"white"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+height/2-delta*2}
                    y={yr+delta}
                    fill={"#C8C8C8"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+width/2}
                    fill={"#C8C8C8"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+height/2-delta*2}
                    y={yr+delta}
                    fill={"gray"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+width/2}
                    fill={"gray"}
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
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeNum}
                    text={`${atom.atomic_number}`}
                    x={xr+height/2-delta*2}
                    y={yr+delta}
                    fill={"white"}
                    />
                    <Text 
                    align={"center"}
                    fontSize={fontSizeSym}
                    text={`${atom.symbol}`}
                    x={xr+height/2-delta*2}
                    y={yr+width/2}
                    fill={"white"}
                    />
                    </>
                    })}
                
                </Layer>
            </Stage>


        );
    }
}
// export default RectsList
  
    // render() {

    //     const colOne = this.props.atoms.filter( atom => atom.symbol==="H" ||
    //         atom.group_block==="Alkali metal")
        
    //     const colOneX = 10
    //     const colOneY = 10

    //     const colTwo = this.props.atoms.filter( atom => atom.symbol==="H" ||
    //         atom.group_block==="Alkaline earth metal")
        
    //     const colTwoX = 15
    //     const colTwoY = 10
        
    //     console.log('2', colTwo)

    //     const rectsRenderOne = colOne.map((atom, i) => (
    //         <RectCard key={i} atom={atom} colX={colOneX} colY={colOneY}/>
    //     ))

    //     const rectsRenderTwo = colTwo.map((atom, i) => (
    //         <RectCard key={i} atom={atom} colX={colTwoX} colY={colTwoY}/>
    //     ))
    //     return (
    //         <>
    //           <h3>Rects</h3>
    //           {rectsRenderOne}  
    //           {rectsRenderTwo}
    //         </>
    //     )
    // }
// 
