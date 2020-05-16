import React, { Component } from 'react'
import Users from '../components/Users'
import { connect } from 'react-redux'
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

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)