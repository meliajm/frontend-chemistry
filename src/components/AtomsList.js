import React from 'react'
// import Header from './Header'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NavBar from './NavBar';
import AtomCard from './AtomCard'

class AtomsList extends React.Component {

    // state = {
    //     atoms: []
    // }

    // componentDidMount() {
    //     fetch('http://localhost:3001/api/v1/atoms')
    //         .then(response => response.json())
    //         .then(atoms => this.setState({ atoms }))
    // }

    render() {
        // console.log('atoms list', this.props)

        const atomsRender = this.props.atoms.map((atom, i) => (
            <AtomCard key={i} atom={atom} />
        ))
        return (
            <>
              <h3>Atoms</h3>
              {atomsRender}  
            </>
        )
    }
}

export default AtomsList
