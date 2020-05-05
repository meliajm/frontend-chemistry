import React, { Component } from 'react'
import UserInput from '../components/UserInput';
import { connect } from 'react-redux'

class UsersContainer extends Component {
  render() {
      console.log('uc', this.props.history)
    return (
      <div>
        <UserInput routerProps={this.props.history} addUser={this.props.addUser}/>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })

const mapDispatchToProps = dispatch => ({ addUser: user => dispatch({ type: "ADD_USER", user }) })

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)