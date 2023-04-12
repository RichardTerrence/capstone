import { useState} from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import ContentFooter from './ContentFooter';
import Cardmap from './Cardmap';
import ViVdeo from './ViVdeo';
import Form from './Form';








const Home = () => {
  function myTerrence() {
    document.getElementById('rexter').innerHTML = "LANDING PAGE TEMPLATE";
  }

  return (
    <>
      <div className='bgbody'>
            <div className='wrapper'>
                <div className='content'> 
                      <h1>
                        CAPSTONE
                        <span> WIREFRAME </span> 
                        PROJECT
                      </h1>
                    <div>
                      <p>  
                        that aims to make it easier 
                        for customers to leave their items for 
                        services such as laundry, car wash, auto 
                        garage, and more.
                      </p>
                    </div>
                      <button className='batons' type="button" onClick={myTerrence}>Luck Me!</button>
                </div>
            </div>  
        </div>
                  <ViVdeo/> 
                  <Cardmap/>
                  <ContentFooter/>
                  <Form/>
                 
                 
                  
                  

    </>  
  )
};

export default Home;