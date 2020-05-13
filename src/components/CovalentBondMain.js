import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CovalentBond extends Component {
    render() {
        return (
            <div>
                <p>

                    <h4>Covalent Bonding</h4>
                We like questions:
                <br/>
                <br/>
            <strong>So what is covalent bond?</strong>
            <br/>
            Chemical bond where electrons are shared to <i>glue</i> atoms together. As opposite to ionic bonds where electrons are what? Oh 
            right, transferred! And no ions are formed in covalent bonding. And 

            <br/>
            <br/>
            <strong>Key takeaways</strong>
            <li>Sharing is caring in covalent bonding to <i>glue</i> atoms together.
            </li>
            <li>
                Covalent bonds occur between nonmetals.
            </li>

                </p>
                <p>
               Next let's take a look at <Link to='/covalentbond1'>Covalent Bonding</Link> in action.
            </p>
            </div>
        )
    }
}

export default CovalentBond
