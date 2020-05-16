import React, { Component } from 'react'
// import currentUser from '../reducers/currentUser'
import { addQuestion } from '../actions/questionActions'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'

export class QuestionInput extends Component {

    state = {
        content: "",
        // user: the current User
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleOnSubmit = event => {
        console.log('submit', this.state)
        event.preventDefault()
        if (!this.state.content) {
            console.log('hey you gotta enter your question, no blanks')
        }
        this.props.addQuestion(this.state, this.props.routerProps)
            .then(response => {
                // if (!response.error) {
                //     console.log('no error?')
                    this.resetForm()
                    // this.props.history.push('/questions')
                // }
            })
    }

    resetForm = () => {
        this.setState({
            content: ""
        })
    }

    render() {
        return (
            <>
            <h4>Input your question</h4>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                    type="text"
                    onChange={(event) => this.handleOnChange(event)}
                    name="content"
                    value={this.state.content}
                    placeholder="What is your question?"
                    />
                    <input type="submit"/>
                </form>
                
            </>
        )
    }
}

export default (connect(null, { addQuestion })(QuestionInput))
