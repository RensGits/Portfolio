import React from 'react'; 
import '/Projects/portfolio/src/App.css';
import {Link} from 'react-router-dom'


function Nav(){

  // logica

  return(
    <nav>
        <p class = 'rens'>RENS VAN DRIEL</p>
        <ul class = 'navitems'>
            <Link to = '/'>
            <li>HOME</li>
            </Link>
            <Link to = '/About'>
            <li>ABOUT</li>
            </Link>
            <Link to = '/Contact'>
            <li>CONTACT</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;