import React from 'react'; 
import '/Projects/portfolio/src/App.css';



function Home(){

  // logica

  return(
  <div className = 'aroundAbout'>
  <div className = 'aboutBox'>
    <div className = 'textBoxMain'>
          <div className = 'aboutTextFirst'>
              <p class = 'hi'>Hi, i'm Rens van Driel.</p>
              <p class = 'hi insert'>{'<p> insert title of future job </p>'}</p>
          </div>
          <div className = 'aboutTextSecond'>
              <p >I’m an allround designer based in the Netherlands. I’ve always had a passion for graphic design, 
              but my interest have shifted over the years. I dropped out of artschool after a year of graphic design 
              to study biology because I wanted to learn more about how things worked, in a theoretical sense. 
              But my passion for design has never left me, and I felt that even in biology, I was constantly looking to 
              transform the things I was learning in something that was more interesting to look at, something that made 
              other people interested in the things I was learning, or simply for my own enjoyment. Recently, I’ve started 
              to learn how to code. And ever since I started I’ve been hooked. Take a look at my work and find out for yourself. </p>
          </div>
          
          
    </div>
    <div className = 'faceBox'></div>
  </div>
      
    </div>

    
  );
}

export default Home;