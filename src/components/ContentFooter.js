import React from 'react';
import Card from 'react-bootstrap/Card';
import road1 from './images/road1.png';
import road2 from './images/road2.png';
import "./ContentFooter.css";

const ContentFooter = () => {
  return (
    <>
    <div className='cardcontent'>
        <h1 style={{marginLeft:'5rem', color:'#C34A36'}}>COMPANY ADVANTAGE</h1>
    <div className='firstrow'>
    <Card className='cardcontent1' style={{display:'flex', flexDirection:'row'}}>
      <Card.Img variant="top" src={road1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='txt' style={{width:'10rem', fontSize:'14px'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='cardcontent2' style={{display:'flex', flexDirection:'row'}}>
      <Card.Img variant="top" src={road1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='txt' style={{width:'10rem', fontSize:'14px'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='cardcontent3' style={{display:'flex', flexDirection:'row'}}>
    <Card.Img variant="top" src={road1} />
    <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text className='txt' style={{width:'10rem', fontSize:'14px'}}>
          
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='secondrow'>
    <Card className='cardcontent4' style={{display:'flex', flexDirection:'row'}} >
      <Card.Img variant="top" src={road2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='txt' style={{width:'10rem', fontSize:'14px'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='cardcontent5'  style={{display:'flex', flexDirection:'row'}}>
      <Card.Img variant="top" src={road2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='txt' style={{width:'10rem', fontSize:'14px'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </> 
  )
}

export default ContentFooter;