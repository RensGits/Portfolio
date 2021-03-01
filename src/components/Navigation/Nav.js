import React from 'react'; 
import '/Projects/portfolio/src/App.css';
import {Link} from 'react-router-dom'


function Nav(){

  // logica

  return(
    
    <nav className = 'navigation'>
        
          
            <Link to = '/' class = 'navitems'>
              <div >ABOUT</div>
            </Link>
            <Link to = '/About' class = 'navitems'>
              <div >WORK</div>
            </Link>
            <Link to = '/Contact' class = 'navitems'>
              <div >CONTACT</div>
            </Link>
          
    </nav>
    
  );
}

export default Nav;