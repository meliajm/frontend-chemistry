import React, { Component } from 'react'
import { updateQuestion } from '../actions/questionActions'
import { connect } from 'react-redux'

export class QuestionEdit extends Component {
    
    state = this.props.question ? {
        content: this.props.question.content,
        id: this.props.question.id
    } : { content: "", id: 0}

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
                    this.props.history.push('/questions')
                }
            })
    }

    resetForm = () => {
        this.setState({ content: ""})
    }
    
    render() {
        console.log('qe', this.props)
        return (
            
            this.props.question ?
            <div className="div">
                <h4>Edit Question</h4>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input 
                    type="text"
                    onChange={(event) => this.handleChange(event)}
                    name="content"
                    value={this.state.content}
                    placeholder="Edit your question"
                    />
                    <input type="submit"/>
                </form>  
            </div> : <h4>Loading</h4>
            )
    }
}

export default connect(null, {updateQuestion})(QuestionEdit)