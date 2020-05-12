import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout'

const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <nav className="nav">
           
            
            { loggedIn ? <><h3 className="logout"> Welcome to your lab, {currentUser.email}!</h3> <Logout/></> :
            
             <>
             <h3 className="logout">
             <Link to='/signup'>Sign Up</Link>
             </h3>
             <h3 className="logout">
             <Link to='/login'>Log In</Link>
             </h3>
             </>
            }
            
            <h3 className="home"><Link to='/'>Home</Link></h3>
            <h3 className="intro"><Link to='/intro'>Intro</Link></h3>
            <h3 className="users"><Link to='/users'>Users</Link></h3>
        
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