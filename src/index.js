import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import atomsReducer from './reducers/atomsReducer';
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import usersReducer from './reducers/usersReducer'
import questionsReducer from './reducers/questionsReducer'

import {BrowserRouter as Router} from 'react-router-dom'

// const store = createStore(atomsReducer,
//   applyMiddleware(thunk),
//   )



const reducer = combineReducers({
  currentUser,
  loginForm,
  atomsReducer,
  signupForm,
  usersReducer,
  questionsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
