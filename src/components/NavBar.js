import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout'

const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <nav className="nav">
            { loggedIn ? <> Welcome, {currentUser.email}! to your chem lab <Logout/></> :
             <>
             <Link to='/signup'>Sign Up</Link>
             <br/>
             <Link to='/login'>Log In</Link>
             <br/>
             </>
            }

            <Link to='/'>Home</Link>
            <br/>
            <Link to='/intro'>Atom Intro</Link>
            <br/>
            <Link to='/users'>Users</Link>
            <br/>
            <Link to='/ionicbond1'>Ionic Bond</Link>
            <br/>
            <Link to='/ionicbond2'>Ionic Bond 2</Link>
            <br/>
            <Link to='/ionicbondtest'>Test</Link>
            <br/>
            

            {/* <br/>
            <Link to='/users'>Users</Link> */}
        </nav>
    )
}

const mapStateToProps = ({ currentUser }) =>{
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(NavBar)

// export default (props) => {
//     return (
//         <nav className="nav">
//             <Link to='/'>Home</Link>
//             <br/>
//             <Link to='/intro'>Atom Intro</Link>
//             <br/>
//             <Link to='/signup'>Sign Up</Link>
//             {/* <br/>
//             <Link to='/users'>Users</Link> */}
//         </nav>
//     )
// }