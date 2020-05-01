import React, { Component } from 'react'

export class AtomsShow extends Component {

    state= {
        atom: {}
    }

    componentDidMount() {
        let id = this.props.match.params.id

        fetch(`http://localhost:3001/api/v1/atoms/${id}`)
            .then(response=>response.json())
            .then(atom => this.setState({ atom }))
    }

    render() {
        return (
            <div>
                <h3>{this.state.atom.name}</h3>
                <p>{this.state.atom.symbol}</p>
                <p>Atomic number: {this.state.atom.atomic_number}</p>
            </div>
        )
    }
}

export default AtomsShow
