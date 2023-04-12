import React from 'react'
import "./FlexBox.css";
import samsungfold from './images/samsungfold.png';
import northface from './images/northface.png';
import garmin from './images/garmin.png';



const FlexBox = () => {
  return (
  <div className='container'>
  <div className='mygrid'>
  <div className="row">
  <div className="column">
    <img src={northface} alt='...'/>
    <img src={garmin} alt='...'/>
    <img src={samsungfold} alt='...'/>
    <img src={samsungfold} alt='...'/>
    <img src={samsungfold} alt='...'/>
    <img src={samsungfold} alt='...'/>
    <img src={samsungfold} alt='...'/>
    <img src={samsungfold} alt='...'/>
  </div>
  </div>
  </div>
  </div>
  )
}

export default FlexBox;