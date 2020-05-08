// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { signup } from '../actions/userAuth'

// export class UserInput extends Component {

//     state = {
//         email: "",
//         password: ""
//     }

//     handleOnChange = event => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//         console.log('ui', this.props)
//     }
    
//     handleOnSubmit = event => {
//         event.preventDefault()
//         if (!this.state.email || !this.state.password) return 
//         console.log("user input submit", this.props.history)
//         signup(this.state, this.props.history)
//         // if (!this.state.email || !this.state.password) return 
//         // this.props.addUser(this.state.email, this.state.password)
//         // let strongParams = {
//         //     user: {
//         //         email: this.state.email,
//         //         password: this.state.password
//         //     }
//         // }

//         // fetch("http://localhost:3001/api/v1/users", {
//         //     method: "POST",
//         //     headers: {
//         //         "Accept": "application/json",
//         //         "Content-Type": "application/json"
//         //     },
//         //     body: JSON.stringify(strongParams)
//         // })
//         // .then(response => response.json())
//         // .then(user => {
//         //     this.props.routerProps.push('/')
//         // })
       
//     }


//     render() {
//         return (
//             <>
//             <h3>Sign Up</h3>
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <input 
//                     type="text"
//                     onChange={(event) => this.handleOnChange(event)}
//                     name="email"
//                     value={this.state.email}
//                     />
//                     <input 
//                     type="password"
//                     onChange={(event) => this.handleOnChange(event)}
//                     name="password"
//                     value={this.state.password}
//                     />
//                     <input type="submit" value="Sign Up"/>

//                 </form>
                
//             </>
//         )
//     }
// }

// export default UserInput
