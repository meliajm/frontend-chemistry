import React from 'react'
import Header from './Header'
import AtomsList from './AtomsList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';


class BondsList extends React.Component {
    
    render() {
        return (
            <div>
                Atoms
                <Router>
                    <Header title={'Bonds'} />
                    <Switch>
                        <Route
                        exact path="/api/v1/atoms/1"
                        component={AtomsList}
                        />
                        {/* <Route
                            exact path=""
                        /> */}
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default BondsList
