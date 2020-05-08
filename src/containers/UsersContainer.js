import React, { Component } from 'react'
import Users from '../components/Users'
import { connect } from 'react-redux'
// import { addUser } from '../actions/atomActions'
import { fetchUsers } from '../actions/userActions'

class UsersContainer extends Component {

  componentDidMount() {
    console.log('uc p', this.props)
    this.props.fetchUsers()
  }
  render() {
      console.log('uc', this.props)
    return (
      <div>
        {/* <UserInput routerProps={this.props.history} addUser={this.props.addUser}/> */}
        <Users users={this.props.users} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state mstp', state)
  return {
    users: state.usersReducer.users,
  }
}

// const mapDispatchToProps = dispatch => {addUser: user => dispatch(addUser)}
// { addUser: user => dispatch({ type: "ADD_USER", user }) }

// const mapDispatchToProps = dispatch => ({
//     addUser: (email, password ) => dispatch({type: 'ADD_USER', email, password}),
//   })

// const mapDispatchToProps = dispatch => {
//     return {
//         addUser: (user) => dispatch(addUser(user))
//         // console.log('uc', user)
//     }
//   }

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)