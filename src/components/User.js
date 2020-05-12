import React from 'react'

const User = props => {
    return (
        <>
            <li>
                {console.log('user', props)}
                {props.user.id}. {props.user.email}
                <br />
                
            </li>
        </>
    )
}

export default User