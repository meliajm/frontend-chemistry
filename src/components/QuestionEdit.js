import React, { Component } from 'react'
// import { updateQuestion } from '../actions/updateQuestion'
import { connect } from 'react-redux'

export class QuestionEdit extends Component {
    
    state = this.props.question ? {
        content: this.props.question.content
    } :
    { content: ""}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.updateQuestion(this.state)
            .then(response => {
                if (!response.error) {
                    this.resetForm()
                }
            })
    }

    resetForm = () => {
        this.setState({ content: ""})
    }
    
    render() {
        return (
            this.props.question ?
            <>
                <h4>Edit Question</h4>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                    type="text"
                    onChange={(event) => this.handleOnChange(event)}
                    name="content"
                    value={this.state.content}
                    placeholder="Edit your question"
                    />
                    <input type="submit"/>
                </form>  
            </> : <h4>Loading</h4>
        )
    }
}

export default QuestionEdit
