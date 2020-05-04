import React from 'react'
import { Stage, Layer, Text, Circle, Rect } from 'react-konva';
import { Link } from 'react-router-dom'

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
        
        
        // console.log('2', two)
        // const colOne = this.props.atoms.filter( atom => atom.symbol==="H" ||
        // atom.group_block==="Alkali metal")

        // const colTwo = this.props.atoms.filter( atom => 
        // atom.group_block==="Alkaline earth metal")
        // console.log(colTwo)
        return (
           
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                {one.map((atom, i) => {
                    return <>
                    <Rect
                    // draggable
                    fill={`#${atom.cpk_hex_color}`}
                    x={10}
                    y={i*75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    {/* <Link to={`/api/v1/atoms/${atom.id}`}>{atom.name}<br/></Link> */}

                    <Text 
                    align={"center"}
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={10}
                    y={i*75}
                    fill={"#555"}
                    />
                    </>
                    })}
                {two.map((atom, i) => {
                    return <>
                    <Rect
                    
                    fill={`#${atom.cpk_hex_color}`}
                    x={80}
                    y={i*75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={80}
                    y={i*75+75}
                    />
                    </>
                    })}
                {three.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150}
                    y={i*75+75+75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150}
                    y={i*75+75+75+75}
                    />
                    </>
                    })}
                {four.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70}
                    y={i*75+75+75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70}
                    y={i*75+75+75+75}
                    />
                    </>
                    })}
                {five.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70}
                    y={i*75+75+75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70}
                    y={i*75+75+75+75}
                    />
                    </>
                    })}
                {six.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70+70}
                    y={i*75+75+75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70+70}
                    y={i*75+75+75+75}
                    />
                    </>
                    })}
                {seven.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70+70+70}
                    y={i*75+75+75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70+70+70}
                    y={i*75+75+75+75}
                    />
                    </>
                    })}
                {eight.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70+70+70+70}
                    y={i*75+75+75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70+70+70+70}
                    y={i*75+75+75+75}
                    />
                    </>
                    })}
                {nine.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70+70+70+70+70}
                    y={i*75+75+75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70+70+70+70+70}
                    y={i*75+75+75+75}
                    />
                    </>
                    })}
                {ten.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70+70+70+70+70+70}
                    y={i*75+75+75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70+70+70+70+70+70}
                    y={i*75+75+75+75}
                    fill={"#555"}
                    />
                    </>
                    })}
                {eleven.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70+70+70+70+70+70+70}
                    y={i*75+75+75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70+70+70+70+70+70+70}
                    y={i*75+75+75+75}
                    fill={"#555"}
                    />
                    </>
                    })}
                {twelve.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70+70+70+70+70+70+70+70}
                    y={i*75+75+75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70+70+70+70+70+70+70+70}
                    y={i*75+75+75+75}
                    fill={"#555"}
                    />
                    </>
                    })}
                {thirteen.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70+70+70+70+70+70+70+70+70}
                    y={i*75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70+70+70+70+70+70+70+70+70}
                    y={i*75+75}
                    fill={"#555"}
                    />
                    </>
                    })}
                {fourteen.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70+70+70+70+70+70+70+70+70+70}
                    y={i*75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70+70+70+70+70+70+70+70+70+70}
                    y={i*75+75}
                    fill={"#fff"}
                    />
                    </>
                    })}
                {fifteen.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70+70+70+70+70+70+70+70+70+70+70}
                    y={i*75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70+70+70+70+70+70+70+70+70+70+70}
                    y={i*75+75}
                    fill={"#555"}
                    />
                    </>
                    })}
                {sixteen.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70+70+70+70+70+70+70+70+70+70+70+70}
                    y={i*75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70+70+70+70+70+70+70+70+70+70+70+70}
                    y={i*75+75}
                    fill={"#555"}
                    />
                    </>
                    })}
                {seventeen.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70+70+70+70+70+70+70+70+70+70+70+70+70}
                    y={i*75+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70+70+70+70+70+70+70+70+70+70+70+70+70}
                    y={i*75+75}
                    fill={"#555"}
                    />
                    </>
                    })}
                {eighteen.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={150+70+70+70+70+70+70+70+70+70+70+70+70+70+70+70}
                    y={i*75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={150+70+70+70+70+70+70+70+70+70+70+70+70+70+70+70}
                    y={i*75}
                    fill={"#555"}
                    />
                    </>
                    })}
                {lanth.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={70*i+70*3+10}
                    y={75*7+20}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={70*i+70*3+10}
                    y={75*7+20}
                    fill={"#555"}
                    />
                    </>
                    })}
                {actin.map((atom, i) => {
                    return <>
                    <Rect
                    fill={`#${atom.cpk_hex_color}`}
                    x={70*i+70*3+10}
                    y={75*7+20+75}
                    width={60}
                    height={65}
                    stroke="black"
                    onClick={() => {
                        this.props.routerProps.history.push(`/api/v1/atoms/${atom.id}`)
                   }}
                    />
                    <Text 
                    fontSize={10}
                    text={`${atom.atomic_number} ${atom.name}`}
                    x={70*i+70*3+10}
                    y={75*7+20+75}
                    // fill={"#555"}
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
