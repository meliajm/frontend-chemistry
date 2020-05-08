import React, { Component } from 'react'
import User from './User'

// export class Users extends Component { render() {
const Users = (props) => {

    // const {users} = props.users
    console.log('users', props) 
    return (
        <>
            User List
            {props.users.map( user => <User user={user}
            key={user.id}
            />)}  
        </>
    )
}

export default Users
