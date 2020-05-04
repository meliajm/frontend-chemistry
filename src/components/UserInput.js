import React, { Component } from 'react'

export class UserInput extends Component {

    state = {
        email: "",
        password: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addUser(this.state)
        // might be redirecting so don't need this???
        this.setState({
            email: "",
            password: ""
        })
    }
    render() {
        return (
            <>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                    type="text"
                    onChange={(event) => this.handleOnChange(event)}
                    name="email"
                    value={this.state.email}
                    />
                    <input 
                    type="password"
                    onChange={(event) => this.handleOnChange(event)}
                    name="password"
                    value={this.state.password}
                    />
                    <input type="submit"/>

                </form>
                
            </>
        )
    }
}

export default UserInput
