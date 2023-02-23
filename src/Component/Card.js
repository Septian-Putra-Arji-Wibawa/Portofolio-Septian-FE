import React from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


class CardExp extends React.Component{
constructor(){
  super();
  this.state = {
    riwayats: []
  }
}
  componentDidMount(){
    // console.log('-----------ini akan dipasang')
    const url =  'http://localhost:5000/api/v1/pengalamans'

    axios.get(url)
    .then( riwayats => {
      // console.log(riwayats.data)

    this.setState({
        riwayats: riwayats.data.riwayat
      })
    })
  }

  render(){
    // console.log('-----------ini sedang dipasang')
    return (
      <>
      { this.state.riwayats.map((riwayat,index) => {
        return(
            <Card className='cardMain' style={{backgroundColor:'#1B1A17', height:'80vh'}}>
              <Card.Img variant="top" key={index} src={riwayat.image} className='cardImg' />
              <Card.Body>
                <Card.Title key={index} className='cardTitle'>{riwayat.judul}</Card.Title>
                <Card.Text key={index} className='cardText'>{riwayat.keterangan}</Card.Text>
              </Card.Body>
            </Card> 
        )
      })}
      </>
    )
  }
}

export default CardExp;