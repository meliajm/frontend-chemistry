import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header'
// import BondsList from './components/BondsList'
import AtomsList from './components/AtomsList'
import AtomsIntro from './components/AtomsIntro'
import Atom from './components/Atom'
import { connect } from 'react-redux'
import { fetchAtoms } from './actions/atomActions'
// import { Stage, Layer, Text, Circle, Rect } from 'react-konva';
// import RectCard from './components/RectCard'
import RectsList from './components/RectsList'
import IonicBond from './components/IonicBond'
import CovalentBond from './components/CovalentBond'

// import Konva from 'konva';
// import { Stage, Layer, Rect, Text, Circle, Line, Group } from 'react-konva';


import AtomsShow from './components/AtomsShow'

import './App.css';
import UsersContainer from './containers/UsersContainer';

class App extends React.Component {


  componentDidMount() {
    // console.log('p', this.props)
    this.props.fetchAtoms()
  } 

  render() {
    return (
      <Router>
        <NavBar />
          <Header title={'Up and Atom Lab'} />
          <Switch>
            <Route
              exact path="/api/v1/atoms"
              render={ routerProps => <AtomsList atoms={this.props.atoms}/>}
              />
            <Route 
              exact path="/api/v1/atoms/:id" 
              component={AtomsShow} />
            {/* <Route 
              exact path="/api/v1/atoms/:id" 
              component={RectsList} /> */}
            <Route 
              exact path="/intro" 
              component={AtomsIntro} />
            <Route 
              exact path="/theatom" 
              component={Atom} />
            <Route 
              exact path="/login"
              render={routerProps => <UsersContainer {...routerProps}/>} />
            <Route 
              exact path="/" 
              render={ routerProps => <RectsList atoms={this.props.atoms} routerProps={routerProps} />}
              />
            <Route 
              exact path="/ionicbond" 
              render={ routerProps => <IonicBond atoms={this.props.atoms} />}
              />
            <Route 
              exact path="/covalentbond" 
              component={CovalentBond} />
              {/* {this.yellowRect()} */}
              <div>
              <p>info about atoms</p>
              find your state of flow eaiser
              <p>periodic chart</p>
             
              </div>
          </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    atoms: state.atoms,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAtoms: () => dispatch(fetchAtoms())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

// yellowRect() {
//   return (

//     <Stage width={window.innerWidth} height={window.innerHeight}>
//     <Layer>
//       {/* <Group 
//       x={700/2}
//       y={70}
//       draggable

//       /> */}
//       <Rect 
//       draggable
//       x={700/2}
//       y={70}
//       width={20} height={20} fill="yellow" 
//       dragBoundFunc={
//         function(pos) {
          
//           const x = 700/2
//           const y = 70
//           const radius = 50
//           let scale = 
//           radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
//           if (scale < 1) {
//             return {
//               y: Math.round((pos.y - y) * scale + y),
//               x: Math.round((pos.x - x) * scale + x)
//             }
//           }
//           else {
//             return pos
//           }
          
//         }
//       }
//       />
//     </Layer>
//   </Stage>
//       )
// }