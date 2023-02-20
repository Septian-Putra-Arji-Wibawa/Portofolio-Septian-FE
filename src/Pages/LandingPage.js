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
    
      <h1>What Have i made?</h1>

      <div className='BodyContainer' id='section2'>
        <div className='BodyLeft'>
        <CardExp />

        </div>

        <div className='BodyRight'>
        {/* <img src="img/UIPIC.png" alt="PNGPrOf" /> */}
          
        </div>
      </div>

    </div>
  </div>
    
  )
}

export default LandingPage