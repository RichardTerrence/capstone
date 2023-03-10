import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import rexx from "../components/images/rexx.jpg";
import "./Postcard.css";


const Postcard =()=> {
  return (
    <div>
    <Card className="postcard" style={{ width: '34rem' }}>
      <Card.Img variant="top" src={rexx} />
      <Card.Body>
        <Card.Title>KodeBrewer</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">So Blend</Button>
      </Card.Body>
    </Card>
    <Card className='postcardd' style={{ width: '34rem' }}>
      <Card.Img variant="top" src={rexx} />
      <Card.Body>
        <Card.Title>KodeBrewer</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">So Blend</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Postcard;