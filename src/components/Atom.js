import React from 'react'
import { Link } from 'react-router-dom'
import Hydrogen from './Hydrogen'
import Lithium from './Lithium'
import Helium from './Helium'

export default function Atom(props) {
    return (
        <p>
            <h4><strong>Alright! Let's talk about the Atom!</strong>
            </h4>
       

            And let's start with the first element on the periodic table: hydrogen.
            <br/> 
            Hydrogen has 1 electron and 1 proton.
            <br/> 
            <br/> 
            <strong>What does this mean and why is it important?</strong>
            <br/> 
            <li>
            This means hydrogen has a charge of 0 because the charges of the electron and proton cancel each other out resulting in zero.
            (-1+1=0)
            </li>
            <li>
                Hydrogen has ONE electron for bonding!
            </li>
            <br/> 

            Okay, so the next question to ask is...what even is a bond?
            <br/>
            <br/>
                <li>
                The bond between atoms is how chemicals are formed. Let's think of a bond like glue that holds atoms together.   
                </li>
            <br/>
            Next, how do we form a bond?
            <br/>
            <p>
                This is the fun part and where the magic happens!
            </p>
            <br/> 
            First, we need to go over Atomic Orbitals!
            <br/> 
            <br/>      
            And back to hydrogen! 
            <br/>  
            We can see hydrogen's electron and it only has 1 electron. This 
            one electron is responsible for bonding. And it is important to note 
            that hydrogen has one outer electron or one bonding electron.     
            <Hydrogen 
            hydrogen={props.hydrogen}            
            />
            Next let's look at helium!
            Helium has two outer electrons, BUT in the first atomic orbital, 2 electrons is ideal.
            What does that mean? It means helium does not want to bond. It does not need any electrons
            to be stable. This is why it is called a Noble Gas.
            <br/>  
            <Helium 
            helium={props.helium}            
            />
            <br/>  
            Okay let's think about what this means for hydrogen. Hydrogen has one electron in the outer 
            orbital and either needs one electron to become stable (and Noble) at two electrons in the outer orbital 
            just like helium.
            OR,... lose it's outer electron and also become stable.
            <br/> 
            
            <br/>
            <br/> 

            <Lithium 
            lithium={props.lithium}
            />
            <br/> 
            Next is lithium. Lithium still has 2 electrons in the inner orbital. And one valence or bonding electron 
            in the outer orbitial.

            <br/> 
            Notice the electrons are more tightly bound to the nucleus if they are in the inner orbital or if 
            the electron orbital is stable as in helium. (You can interact with the electrons by moving them around).
            Also note that this pattern contiunes except the number of stable electrons per orbital changes. Instead of 2 being
            the stable number in the inner most orbital, the second orbital becomes stable at 8. This is another Noble Gas, Neon.
            
            <br/>
            <br/> 

           <h4>Key points</h4>
            <li>
                Atoms (before bonding) have an equal number of electrons and protons.
                So what is the net charge?
            </li>
            <li>
                Electrons and protons have opposite charges of the same size. And opposite charges attract.
                The protons in the nucleus attract the electrons to it.
            </li>
            <li>
                An atomic orbital has an ideal number of electrons where the atom will be most stable.
                Stabililty here means it will not react or form bonds because it has reached that stable number.
            </li>
            <br/>
            <strong>Again, who cares about any of this anyways?</strong> 
            <br/>
                <li>
                    Atoms are the building blocks of the world, right? How do we build with them? We need to 
                    form bonds and to form bond we need to understand about atomic orbitals and valence electrons.
                </li>
            <br/>
            Next up <Link to='/ionicbond'>Ionic Bonding</Link>
            <br/>
            
        </p>
    )
}
