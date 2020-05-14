import React, { Component } from 'react'
import currentUser from '../reducers/currentUser'

export class QuestionInput extends Component {

    state = {
        content: "",
        // user: the current User

    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log('ui', this.props)
    }
    
    handleOnSubmit = event => {
        event.preventDefault()
    }


    render() {
        return (
            <>
            <h3>Input your question</h3>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                    type="text"
                    onChange={(event) => this.handleOnChange(event)}
                    name="question"
                    value={this.state.answer}
                    />
                    
                    <input type="submit"/>

                </form>
                
            </>
        )
    }
}

export default QuestionInput
