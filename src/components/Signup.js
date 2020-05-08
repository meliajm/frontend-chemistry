import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/userAuth'

export class Signup extends Component {

    state = {
        email: "",
        password: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log('ui', this.props)
    }
    
    handleOnSubmit = event => {
        event.preventDefault()
        if (!this.state.email || !this.state.password) {
            console.log('hey you gotta enter your creds')
        } 
        console.log("user input submit", this.props.routerProps)
        this.props.signup(this.state, this.props.routerProps)
    }


    render() {
        return (
            <>
            <h3>Sign Up</h3>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                    type="text"
                    onChange={(event) => this.handleOnChange(event)}
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    />
                    <input 
                    type="password"
                    onChange={(event) => this.handleOnChange(event)}
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    />
                    <input type="submit" value="Sign Up"/>

                </form>
                
            </>
        )
    }
}

export default connect(null, { signup })(Signup)
