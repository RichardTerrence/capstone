import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import applewatch from './images/applewatch.png';
import mbpspacegray from './images/mbpspacegray.png';
import samsungfold from './images/samsungfold.png';
import "./Cardmap.css";

const  Cardmap =()=> {
  return (
    <>
    <div className="cardmapp" style={{background:'#DFD3C3'}}>
    <Card className='crdimg' style={{ width: '22rem', }}>
      <Card.Img variant="top" src={applewatch} />
      <Card.Body>
        <Card.Title>Apple Watch Ultra</Card.Title>
        <Card.Text>
        <div className="columns">
          <ul className="price">
            <li className="grey">$ 9.99</li>
          </ul>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='crdimg' style={{ width: '22rem', }}>
      <Card.Img variant="top" src={mbpspacegray} />
      <Card.Body>
        <Card.Title>MacBook Pro with M2 chip</Card.Title>
        <Card.Text>
        <div className="columns">
          <ul className="price">
            <li className="grey">$ 9.99 </li>
          </ul>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='crdimg' style={{ width: '22rem', }}>
      <Card.Img variant="top" src={samsungfold} />
      <Card.Body>
        <Card.Title>Samsung Galaxy Fold 4</Card.Title>
        <Card.Text>
        <div className="columns">
          <ul className="price">
            <li className="grey">$ 9.99</li>
          </ul>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Cardmap;