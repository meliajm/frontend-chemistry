import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header'
import BondsList from './components/BondsList'
import AtomsList from './components/AtomsList'
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Circle, Line, Group } from 'react-konva';


import AtomsShow from './components/AtomsShow'

import './App.css';

export default class App extends React.Component {

  yellowRect() {
    return (

      <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {/* <Group 
        x={700/2}
        y={70}
        draggable

        /> */}
        <Rect 
        draggable
        x={700/2}
        y={70}
        width={20} height={20} fill="yellow" 
        dragBoundFunc={
          function(pos) {
            
            const x = 700/2
            const y = 70
            const radius = 50
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
        />
      </Layer>
    </Stage>
        )
  }

  render() {
    return (
      <Router>
        <NavBar />
          <Header title={'Chemistry'} />
          <p>info about atoms</p>
          
          <Switch>
            <Route
              exact path="/api/v1/atoms"
              component={AtomsList}
              />
              <Route 
              exact path="/api/v1/atoms/:id" 
              component={AtomsShow} />
              {this.yellowRect()}
          </Switch>
      </Router>
    )
  }

}

