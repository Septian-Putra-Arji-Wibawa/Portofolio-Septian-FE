import React from 'react';
import './ModularStyle.css';
import Button from 'react-bootstrap/Button';
import CardExp from '../Component/Card';

function LandingPage() {
  return (
  <div>
    <div className='MainContainer' id='section1'>
      <div className='HeadContainer'>
        <div className='HeadLeft'>
          <img className="Profile" src="img/picProftrans.png" alt="profile" />
        </div>

        <div className='HeadRight'>
          <h1>- I'M SEPTIAN.</h1>
          <h3>WEB DEVELOPER & <b className='desain'> GRAPHIC DESIGN </b></h3>
          <p>i design and code beautifully simple things, and i love what i do</p>
          <Button variant="outline-warning" href='#section2'>More Info</Button>
        </div>
      </div>
    
      

      <div className='BodyContainer' id='section2'>
        <CardExp />

      </div>
          
    </div>
  </div>
  )
}

export default LandingPage