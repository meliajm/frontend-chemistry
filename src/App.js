import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header'
import AtomsList from './components/AtomsList'
import AtomsIntro from './components/AtomsIntro'
import Atom from './components/Atom'
import { connect } from 'react-redux'
import { fetchAtoms, fetchUsers } from './actions/atomActions'
import RectsList from './components/RectsList'
import IonicBond from './components/IonicBond'
import CovalentBond from './components/CovalentBond'
import AtomsShow from './components/AtomsShow'
import UsersContainer from './containers/UsersContainer';
import { getCurrentUser } from './actions/userAuth'
import Login from './components/Login'
import './App.css';

class App extends React.Component {

  componentDidMount() {
    // console.log('p', this.props)

    this.props.fetchAtoms()
    this.props.fetchUsers()
    this.props.getCurrentUser()
  } 

  render() {
    console.log("app", this.props)
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
              render={(routerProps)=> {
                const atom = this.props.atoms.find( atom => atom.id === parseInt(routerProps.match.params.id))
                return( 
                  atom && 
                <AtomsShow {...routerProps} 
                atom={atom}/>)
              }}
              />
            <Route 
              exact path="/intro" 
              component={AtomsIntro} />
            <Route 
              exact path="/theatom" 
              component={Atom} />
            <Route 
              exact path="/signup"
              render={routerProps => <UsersContainer {...routerProps}/>} />
            <Route
              exact path="/login"
              component={Login} />

            <Route 
              exact path="/" 
              render={ routerProps => this.props.atoms && <RectsList atoms={this.props.atoms} routerProps={routerProps} />}
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
    atoms: state.atomsReducer.atoms,
    loading: state.atomsReducer.loading,
    users: state.users,
    loggedIn: !!state.currentUser
  }
}

// a user is added to store during sign up, when App mounts fetch all users so they are in store
// best practice here? will this cause problems when a user signs up? i think not because i am redirecting to home page
const mapDispatchToProps = dispatch => {
  return {
    fetchAtoms: () => dispatch(fetchAtoms()),
    fetchUsers: () => dispatch(fetchUsers()),
    getCurrentUser: () => dispatch(getCurrentUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

