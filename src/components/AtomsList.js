import React from 'react'
import AtomCard from './AtomCard'

// const AtomsList = props => {

class AtomsList extends React.Component {

    state = {
        value: ""
    }

    
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
        console.log(this.state)
    }
    
    // handleSubmit = (event) => {
    //     alert('Your favorite flavor is: ' + this.state.value);
    //     event.preventDefault();
    //     // console.log('props in atoms list', this.props)
    //     // this.props.atoms.filter( atom => atom.group_block === this.state.value)
    // }
    render() {

        const atomsFilter = (this.state.value === "") ?  this.props.atoms : this.props.atoms.filter( atom => atom.group_block === this.state.value)
        const atomsRender = atomsFilter.map((atom) => (
            <AtomCard key={atom.atomic_number} atom={atom} />
            ))

   

        return (
            
            <>
            <form>
            <label>
            Pick your favorite group:
            <select
            onChange={this.handleChange}>
                <option value="">All</option>
                <option value="Alkali metal">Alkali metal</option>
                <option value="Alkaline earth metal">Alkaline earth metal</option>
                <option value="Metalloid">Metalloid</option>
                <option value="Nonmetal">Nonmetal</option>
                <option value="Transition metal">Transition metal</option>
                <option value="Noble gas">Noble gas</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
        

                <h3>Atoms</h3>
                {atomsRender}  
            </>
        )
    }
}


export default AtomsList