import React from 'react'
import { Link } from 'react-router-dom'
// import Header from './Header'
export default function IonicBondMain() {
    return (
        <p>
            {/* <Header title={"Ionic Bond"}/> */}
            <h4>Ionic Bonding</h4>
            We did a bunch of learning about atoms, orbitals, electrons! 
            Now it is time to see how we can use this information in forming bonds.
            <br/>
            <br/>
            Let's go over ionic bonding.
            <br/>
            <br/>
            <strong>First, what is an ion?</strong>
            <br/>
            An ion is an atom with a charge.
            <br/>
            <br/>
            <strong>How does an atom get a charge? I thought the charge of an
                atom is 0?
            </strong>
            <br/>
            Before bonding, the charge of an atom is 0 when the atom still has an equal number of 
            protons and electrons. So how does the charge change? Transfer of electrons!
            <br/>
            <br/>
            <strong>Okay, so what is an ionic bond?</strong>
            <br/>
            Chemical bond where transfer of electrons occurs to <i>glue</i> atoms together and IONS are formed
            . This is why it is called an ion-ic bond because ions are formed. Get it ion, ionic?

            <br/>
            <br/>
            <strong>Key takeaways</strong>
            <li>Once electron(s) are transferred and ions are formed, the ions of opposite charge
                will be attracted to each other forming the <i>glue</i>.
            </li>
            <li>
                Ionic bonds occur between a metal and a nonmetal.
            </li>

            <br/>
            <strong>Future topics</strong>
            <li>acids and base in relation to pH and pOH</li>
            <li>Metals versus nonmetals</li>
            <li>How to use periodic chart</li>

            <br/>
            Next we are going to form an <Link to='/ionicbond1'>Ionic Bond</Link> using 2 atoms! Wow, that is so cool!
            <br/>
            

            
        </p>
    )
}
