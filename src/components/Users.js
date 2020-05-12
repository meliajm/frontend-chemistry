import React from 'react'
import User from './User'

const Users = (props) => {

    console.log('users', props) 
    return (
        <p>
            <strong>User List</strong>
            {props.users.map( user => <User user={user}
            key={user.id}
            />)}  
        </p>
    )
}

export default Users
