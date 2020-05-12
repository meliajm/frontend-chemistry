import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/userAuth'
import Header from './Header'

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
          <Header title={'Sign up for Up and Atom Lab'} />
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                    className="input"
                    type="text"
                    onChange={(event) => this.handleOnChange(event)}
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    />
                    <input 
                    className="input"
                    type="password"
                    onChange={(event) => this.handleOnChange(event)}
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    />
                    <input className="button" type="submit" value="Sign Up"/>

                </form>
                
            </>
        )
    }
}

export default connect(null, { signup })(Signup)
