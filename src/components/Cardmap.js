import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import road from "./images/road.png";
import "./Cardmap.css";

const  Cardmap =()=> {
  return (
    <>
    <div className="cardmapp" style={{background:'#FEF7FF'}}>
    <Card style={{ width: '22rem', }}>
      <Card.Img variant="top" src={road} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem', }}>
      <Card.Img variant="top" src={road} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem', }}>
      <Card.Img variant="top" src={road} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Cardmap;