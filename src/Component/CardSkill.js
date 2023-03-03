import React from 'react';
import Card from 'react-bootstrap/Card';
import DummySkill from '../DummyData/DummySKill'


function cardSkill () {
    return (
      
        DummySkill.map((item) => (
      <Card className='cardMain' style={{backgroundColor:'#1B1A17', height:'80vh'}}>
        <Card.Img variant="top" src={item.img} className='cardImg' />
          {/* <Card.Body>
              <Card.Title className='cardTitle'>{riwayat.judul}</Card.Title>
          </Card.Body> */}
      </Card>
      ))
    
    )
  }

export default cardSkill;