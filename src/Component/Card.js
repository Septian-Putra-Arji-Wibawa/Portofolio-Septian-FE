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
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" key={index} src={riwayat.image} />
              <Card.Body>
                <Card.Title key={index}>{riwayat.title}</Card.Title>
                <Card.Text key={index}>{riwayat.keterangan}</Card.Text>
              </Card.Body>
            </Card> 
        )
      })}
      </>
    )
  }
}

export default CardExp;