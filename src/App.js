import React from 'react'; 
import '/Projects/portfolio/src/App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Nav from './components/Navigation/Nav';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App(){

  // logica

  return(
    
    <body>
     
      <Router>
      <Nav />
          <Switch>
          <Route path = '/' exact component = {Home} />
          <Route path = '/About' component = {About} />
          <Route path = '/Contact' component = {Contact} />
          </Switch>
      </Router>
    </body> 
   
  );
}

export default App;
