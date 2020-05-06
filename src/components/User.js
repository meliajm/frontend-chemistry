import React from 'react'

const User = props => {
    return (
        <>
            <li>
                {console.log('user', props)}
                {props.user.email}
                <br />
                {props.user.id}
            </li>
        </>
    )
}

export default User