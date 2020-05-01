import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header'
import BondsList from './components/BondsList'
import AtomsList from './components/AtomsList'


import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <NavBar />
          <Header title={'Chemistry'} />
          <Switch>
            <Route
              exact path="/api/v1/atoms"
              component={AtomsList}
              />
              {/* <Route
                exact path=""
              /> */}
          </Switch>
      </Router>
    )
  }

}

