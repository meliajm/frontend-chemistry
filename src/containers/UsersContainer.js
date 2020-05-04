import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInput from '../components/UserInput'

export class UsersContainer extends Component {
    render() {
        return (
            <div>
                <UserInput addUser={this.props.addUser} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return (
        {addUser: user => dispatch({type: 'ADD_USER', user})}
    )
}

//will use this in different context???
const mapStateToProps = ({ users}) => ({
    users
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
