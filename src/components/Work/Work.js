import React from 'react';
import Modal from './Modal';
import '/Projects/portfolio/src/App.css';
import { useState } from 'react';



function Work(){
  return (
    <div className = 'gridDiv'>
        <div className = 'gridSection'>
          <div className = 'gridboxOne'>
           <img className = 'imageDefault' src="images/VirusAppImg.png" alt=""/>
          </div>
          
        
        </div>
        <div className = 'gridSection'>
        <div className = 'gridboxOne'></div>
         
        </div>
        <div className = 'gridSection'>
        <div className = 'gridboxTwo'></div>
          <div className = 'gridboxOne'></div>
        </div>
        <div className = 'gridSection'>
        <div className = 'gridboxOne'></div>
          <div className = 'gridboxThree'></div>
        </div>


      </div>
      
      
      
      

        
        
      
      
    
  );
}

export default Work;