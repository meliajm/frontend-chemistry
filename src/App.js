import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header'
import AtomsList from './components/AtomsList'
import AtomIntro from './components/AtomIntro'
import Atom from './components/Atom'
import { connect } from 'react-redux'
import { fetchAtoms } from './actions/atomActions'
import { fetchQuestions } from './actions/questionActions'
import RectsList from './components/RectsList'
import AtomsShow from './components/AtomsShow'

import IonicBond1 from './components/IonicBond'
import IonicBond2 from './components/IonicBond2'
import IonicBondTest from './components/IonicBondTest'
import CovalentBondMain from './components/CovalentBondMain'
import CovalentBond1 from './components/CovalentBond1'
import IonicBondMain from './components/IonicBondMain'

import Login from './components/Login'
import Signup from './components/Signup'

import QuestionsContainer from './containers/QuestionsContainer';
// import Questions from './component/Questions';
import Question from './components/Question'
import QuestionEdit from './components/QuestionEdit';

import UsersContainer from './containers/UsersContainer';
import { getCurrentUser } from './actions/userAuth'
import ScrollToTop from './components/ScrollToTop'
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchAtoms()
    this.props.getCurrentUser()
    this.props.fetchQuestions()
  }

  render() {
    return (
      <>
      { this.props.loggedIn ?  
      <>
        <NavBar />
        <ScrollToTop>

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
              exact path="/ionicbond1" 
              render={ (routerProps) => {
                // this.props.atoms && <IonicBond sodium={sodium} chlorine={chlorine}/>}}
                const sodium = this.props.atoms.find( atom => atom.symbol === "Na")
                const chlorine = this.props.atoms.find( atom => atom.symbol === "Cl")
                  return (
                    sodium && chlorine &&
                    <IonicBond1 
                    sodium={sodium}
                    chlorine={chlorine}/>
                  )
              }}
              />
            <Route 
              exact path="/ionicbond2" 
              render={ (routerProps) => {
                // this.props.atoms && <IonicBond sodium={sodium} chlorine={chlorine}/>}}
                const lithium = this.props.atoms.find( atom => atom.symbol === "Li")
                const oxygen = this.props.atoms.find( atom => atom.symbol === "O")
                  return (
                    lithium && oxygen &&
                    <IonicBond2 
                    lithium={lithium}
                    oxygen={oxygen}/>
                  )
              }}
              />

              <Route 
              exact path="/covalentbond1" 
              render={ (routerProps) => {
                const hydrogen = this.props.atoms.find( atom => atom.symbol === "H")
                const oxygen = this.props.atoms.find( atom => atom.symbol === "O")
                  return (
                    hydrogen && oxygen &&
                    <CovalentBond1 
                    hydrogen={hydrogen}
                    oxygen={oxygen}/>
                  )
              }}
              />

            <Route 
              exact path="/intro" 
              render={ routerProps => {
                const lithium = this.props.atoms.find( atom => atom.symbol === "Li")
                return (
                  lithium && 
                  <AtomIntro lithium={lithium}/>
                )
              }}
             />
            
            <Route 
              exact path="/theatom" 
              render={ routerProps => {
                const lithium = this.props.atoms.find( atom => atom.symbol === "Li")
                const hydrogen = this.props.atoms.find( atom => atom.symbol === "H")
                const helium = this.props.atoms.find( atom => atom.symbol === "He")

                return (
                  lithium &&
                  hydrogen && 
                  helium && 
                  <Atom 
                  lithium={lithium}
                  hydrogen={hydrogen}
                  helium={helium}
                  />
                )
              }}              />
            <Route 
              exact path="/ionicbond" 
              component={IonicBondMain} />
            {/* <Route 
              exact path="/signup"
              render={ routerProps => <Signup routerProps={routerProps} />}/>
            <Route
              exact path="/login"
              render={ routerProps => <Login routerProps={routerProps}/>} /> */}
            <Route 
              exact path="/" 
              render={ routerProps => this.props.atoms && <RectsList atoms={this.props.atoms} routerProps={routerProps} />}
              />
            <Route 
              exact path="/covalentbond" 
              component={CovalentBondMain} />
            <Route 
              exact path="/ionicbondtest" 
              component={IonicBondTest} />
            <Route 
              exact path="/users" 
              component={UsersContainer} />
            <Route 
              exact path="/questions" 
              render={routerProps => <QuestionsContainer questions={this.props.questions} />} />
            <Route exact path="/questions/:id" 
                render={(routerProps) => {
                    const question = this.props.questions.find(question => question.id === parseInt(routerProps.match.params.id))
                    return ( question &&
                    <Question {...routerProps} question={question} />)
                }}/>
            <Route exact path="/questions/:id/edit"
                render={(routerProps) => {
                    const question = this.props.questions.find(question => question.id === parseInt(routerProps.match.params.id))
                    return ( question &&
                       <QuestionEdit {...routerProps} question={question} />)
                }} />
              <div>

              {/* <p>info about atoms</p>
              find your state of flow eaiser
            <p>periodic chart</p> */}
                
             
              </div>
          </Switch>
          </ScrollToTop>
            {/* <QuestionsContainer questions={this.props.questions} /> */}
          </>
      : 
      <>
      <NavBar />
      <Route 
      exact path="/signup"
      render={ routerProps => <Signup routerProps={routerProps} />}/>
    <Route
      exact path="/login"
      render={ routerProps => <Login routerProps={routerProps}/>} /> 
    <p>Please log in or sign up to see your chem lab.</p>
      </>
      }
      </>

    )
  }
}

const mapStateToProps = state => {
  return {
    atoms: state.atomsReducer.atoms,
    loading: state.atomsReducer.loading,
    loggedIn: (Object.keys(state.currentUser).length === 0) ? false : true,
    questions: state.questionsReducer.questions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAtoms: () => dispatch(fetchAtoms()),
    getCurrentUser: () => dispatch(getCurrentUser()),
    fetchQuestions: () => dispatch(fetchQuestions()),
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(App))

