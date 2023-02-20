import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dummy from '../DummyData/Exp';

function CardExp() {
  return (
    <row>
    {Dummy.map((exp) => (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{exp.title}</Card.Title>
        <Card.Text>{exp.desc}</Card.Text>
      </Card.Body>
    </Card>
    ))}
    </row>
  );
}

export default CardExp;