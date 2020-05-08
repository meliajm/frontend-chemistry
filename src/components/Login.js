import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/userAuth'

export class Login extends React.Component {

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
        if (!this.state.email || !this.state.password) {
            console.log('hey you gotta enter your creds')
        } 
        console.log("user input submit", this.props.routerProps)
        this.props.login(this.state, this.props.routerProps)
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <input 
            type="text" 
            onChange={(event) => this.handleOnChange(event)}
            name="email"
            value={this.state.email}
            placeholder="email"
            />
            <input 
            type="password" 
            onChange={(event) => this.handleOnChange(event)}
            name="password"
            value={this.state.password}
            placeholder="password"
            />
            <input
            type="submit"
            value="Log In"
            />
        </form>
        )
    }
}

export default connect(null, { login })(Login)
