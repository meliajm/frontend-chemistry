import React, { Component } from 'react'
import User from './User'

export class Users extends Component {

    render() {
        
        const {users} = this.props
        console.log('users', users) // this has email as undefined
        return (
            <>
              User List
              {users.map( user => <User user={user}
              key={user.id}
              />)}  
            </>
        )
    }
}

export default Users
