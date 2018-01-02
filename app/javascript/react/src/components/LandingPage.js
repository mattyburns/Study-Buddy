import React from 'react';
import Books from '../images/books.png';

const LandingPage =(props) =>{
  return(
    <div>

      <h1>Welcom to Study Buddy! Please sign in to continue :)</h1>
      
      <img src={Books} alt="A stack of books"></img>
    </div>
  )
}


export default LandingPage;
