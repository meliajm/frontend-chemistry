import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header'
import AtomsList from './components/AtomsList'
import AtomIntro from './components/AtomIntro'
import Atom from './components/Atom'
import { connect } from 'react-redux'
import { fetchAtoms } from './actions/atomActions'
import RectsList from './components/RectsList'
import IonicBond from './components/IonicBond'
import IonicBondTest from './components/IonicBondTest'
import CovalentBond from './components/CovalentBond'
import AtomsShow from './components/AtomsShow'
import Signup from './components/Signup'
// import UserInput from './components/UserInput'
import UsersContainer from './containers/UsersContainer';
import { getCurrentUser } from './actions/userAuth'
import Login from './components/Login'
import './App.css';

class App extends React.Component {

  componentDidMount() {
    // console.log('p', this.props)

    this.props.fetchAtoms()
    this.props.getCurrentUser()
  }

  render() {
    // const sodium = this.props.atoms.find(atom => atom.symbol==="Na")
    // const chlorine = this.props.atoms.find(atom => atom.symbol==="Cl")

    // console.log("app", sodium)
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
              exact path="/ionicbond" 
              render={ (routerProps) => {
                // this.props.atoms && <IonicBond sodium={sodium} chlorine={chlorine}/>}}
                const sodium = this.props.atoms.find( atom => atom.symbol === "Na")
                const chlorine = this.props.atoms.find( atom => atom.symbol === "Cl")
                  return (
                    sodium && chlorine &&
                    <IonicBond 
                    sodium={sodium}
                    chlorine={chlorine}/>
                  )
              }}
              />
            <Route 
              exact path="/intro" 
              component={AtomIntro} />
            
            <Route 
              exact path="/theatom" 
              component={Atom} />
            <Route 
              exact path="/signup"
              render={ routerProps => <Signup routerProps={routerProps} />}/>
            <Route
              exact path="/login"
              render={ routerProps => <Login routerProps={routerProps}/>} />
            <Route 
              exact path="/" 
              render={ routerProps => this.props.atoms && <RectsList atoms={this.props.atoms} routerProps={routerProps} />}
              />
            <Route 
              exact path="/covalentbond" 
              component={CovalentBond} />
            <Route 
              exact path="/ionicbondtest" 
              component={IonicBondTest} />
            <Route 
              exact path="/users" 
              component={UsersContainer} />

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
    loggedIn: !!state.currentUser
  }
}

// a user is added to store during sign up, when App mounts fetch all users so they are in store
// best practice here? will this cause problems when a user signs up? i think not because i am redirecting to home page
const mapDispatchToProps = dispatch => {
  return {
    fetchAtoms: () => dispatch(fetchAtoms()),
    // fetchUsers: () => dispatch(fetchUsers()),
    getCurrentUser: () => dispatch(getCurrentUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

