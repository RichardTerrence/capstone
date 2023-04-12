import React from 'react';
import Card from 'react-bootstrap/Card';
import metaquest from './images/metaquest.png';
import dronex from './images/dronex.png';
import googlepixel7 from './images/googlepixel7.png';
import nothingphone from './images/nothingphone.png';
import hyperX from './images/hyperX.png';
import "./ContentFooter.css";

const ContentFooter = () => {
  return (
    <>
    <div className='cardcontent'>
        <h1 style={{marginLeft:'5rem', color:'#C34A36'}}>Suggested for you</h1>
    <div className='firstrow'>
    <Card className='cardcontent1' style={{display:'flex', flexDirection:'row'}}>
      <Card.Img variant="top" src={googlepixel7} />
      <Card.Body>
        <Card.Title style={{fontSize:'14px'}}>Google Pixel 7 Pro </Card.Title>
        <Card.Text className='txt' style={{width:'10rem', fontSize:'8px'}}>
        But in our Google Pixel 7 Pro review, it was the device's software
        that we were most impressed by. Able to translate voice notes to text, 
        cut photo-bombers out of your pictures, and even screen calls so you 
        can see if it is spam or not, the device offers a huge variety of ways 
        to make your phone experience better
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='cardcontent2' style={{display:'flex', flexDirection:'row'}}>
      <Card.Img variant="top" src={dronex} />
      <Card.Body>
        <Card.Title style={{position:'relative', left:'3rem', fontSize:'14px'}}>DJI Mini 3 Pro</Card.Title>
        <Card.Text className='txt' style={{width:'10rem', fontSize:'8px', position:'relative', left:'3rem' }}>
        But with all those improvements, comes an eye-watering price, and an increasing fear for your financial 
        status if you crash it. It offers advanced obstacle avoidance features, a rotating lens so you can film 
        portrait or landscape, 4K video, smart flying features like automatic tracking and the ability to follow 
        a subject.
        </Card.Text>
      </Card.Body>
    </Card> 
      
    <Card className='cardcontent3' style={{display:'flex', flexDirection:'row'}}>     
    <Card.Img variant="top" src={metaquest} />
     <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text className='txt' style={{width:'10rem', fontSize:'14px'}}>  
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='secondrow'>
    <Card className='cardcontent4' style={{display:'flex', flexDirection:'row'}} >
      <Card.Img variant="top" src={nothingphone} />
      <Card.Body>
        <Card.Title style={{fontSize:'14px'}}>Nothing Phone 1</Card.Title>
        <Card.Text className='txt' style={{width:'10rem', fontSize:'10px'}}>
        The brand Nothing (best known for headphones so far) has had the world 
        of tech enthusiasts patiently waiting for the reveal of their new smartphone. 
        They promised something a little bit different, and they delivered on that.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='cardcontent5'  style={{display:'flex', flexDirection:'row'}}>
      <Card.Img variant="top" src={hyperX} />
      <Card.Body>
        <Card.Title style={{fontSize:'14px'}}>HyperX wireless gaming setup</Card.Title>
        <Card.Text className='txt' style={{width:'10rem', fontSize:'8px'}}>
        First up you’ll need 7.1 headphones, and the HyperX Cloud Fight S ­­headset has 
        some seriously good surround sound. You can control chat/audio balance from the 
        headset itself, ideal for those vital mission strategy briefings without interrupting 
        play, and the swivelling ear cups on the headset allows them to sit comfortably around 
        your neck for when you need a breather (or snack).
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </> 
  )
}

export default ContentFooter;