import React from 'react'; 
import '/Projects/portfolio/src/App.css';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App(){

  // logica

  return(
    
    
    <body>
      
    
    <Router>
      <div class = 'above'>
        first commit 1
      </div>
      <Nav />
      <Switch>
      <Route path = '/' exact component = {Home} />
      <Route path = '/About' component = {About} />
      <Route path = '/Contact' component = {Contact} />
      </Switch>
      
      <div class = 'beneath'>footer</div>
      </Router>
      </body>
   
    
    
    
    
    
  );
}

export default App;
