import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/userAuth'

const Logout = ({ logout, routerProps }) => {
    return (
        < form onSubmit={(event) => {
            event.preventDefault()
            logout()
            routerProps.push('/')
        }}>
            <input type="submit" value="Log Out" />
        </form>
    )
}

export default connect(null, { logout })(Logout)