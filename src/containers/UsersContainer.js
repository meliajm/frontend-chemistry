import React, { Component } from 'react'
import Users from '../components/Users'
import { connect } from 'react-redux'
import { addUser } from '../actions/atomActions'

class UsersContainer extends Component {
  render() {
      console.log('uc', this.props.history)
    return (
      <div>
        {/* <UserInput routerProps={this.props.history} addUser={this.props.addUser}/> */}
        <Users users={this.props.users} />
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })

// const mapDispatchToProps = dispatch => {addUser: user => dispatch(addUser)}
// { addUser: user => dispatch({ type: "ADD_USER", user }) }

const mapDispatchToProps = dispatch => ({
    addUser: (email, password ) => dispatch({type: 'ADD_USER', email, password}),
  })

// const mapDispatchToProps = dispatch => {
//     return {
//         addUser: (user) => dispatch(addUser(user))
//         // console.log('uc', user)
//     }
//   }

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)