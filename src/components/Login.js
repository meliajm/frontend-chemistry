import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm, login } from '../actions/userAuth'
// import { login } from '../actions/userAuth'

const Login = ({ loginFormData, updateLoginForm, login, routerProps }) => {
    
    const handleOnChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        login(loginFormData, routerProps)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input 
            type="text" 
            onChange={handleOnChange}
            name="email"
            value={loginFormData.email}
            placeholder="email"
            />
            <input 
            type="password" 
            onChange={handleOnChange}
            name="password"
            value={loginFormData.password}
            placeholder="password"
            />
            <input
            type="submit"
            value="Log In"
            />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login})(Login)
