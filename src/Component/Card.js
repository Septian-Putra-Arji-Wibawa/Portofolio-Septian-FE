import React from 'react';
import Card from 'react-bootstrap/Card';
import Dummy from '../DummyData/Exp';
import {API} from '../config/api';
import {useQuery} from 'react-query';


export default function CardExp() {
  let { data: pengalamans } = useQuery("pengalamansCache", async () => {
    const response = await API.get("/pengalamans");
    return response.data.data;
  });

  return (
    <row>
    {pengalamans.map((item, index) => (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.keterangan}</Card.Text>
      </Card.Body>
    </Card>
    ))}
    </row>
  );
}

