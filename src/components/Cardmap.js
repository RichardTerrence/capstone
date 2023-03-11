//import Button from 'react-bootstrap/Button';
import Statelessbutton from './Statelessbutton';
import Card from 'react-bootstrap/Card';
import sun from '../components/images/sun.jpg';
import sky from '../components/images/sky.jpg';
import cloud from '../components/images/cloud.jpg';
import { useState } from 'react';

const Cardmap=()=> {
    // const data = [
    //     {   
    //         id:1,
    //         icon: swimming,
    //         title: "Swimming Activity",
    //         description:"Swimming, in recreation and sports, the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body. Swimming as an exercise is popular as an ..."
    //     },
    //     {
    //         id:2,
    //         icon: hopping,
    //         title: "Island Hopping",
    //         description:"Island Hopping, n recreation and sports, the propulsion of the body..."
    //     },
    //     {
    //         id:3,
    //         icon: swimming,
    //         title: "Swimming Activity",
    //         description:"Swimming, in recreation and sports, the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body. Swimming as an exercise is popular as an ..."
    //     },
        

    // ];

    //using useState
    const [activities, setActivities]= useState([
        {   
            id:1,
            icon: sun,
            title: "Amazing Sunrise in the Morning",
            description:"Swimming, in recreation and sports, the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body. Swimming as an exercise is popular as an ..."
        },
        {
            id:2,
            icon: sky,
            title: "Awesome Beautiful Sunset",
            description:"Island Hopping, n recreation and sports, the propulsion of the body..."
        },
        {
            id:3,
            icon: cloud,
            title: "Cool Cloudy",
            description:"Swimming, in recreation and sports, the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body. Swimming as an exercise is popular as an ..."
        },
        

    ]);
   
  return (
    <>
    {activities.map((activity)=>{
        return (
            <Card style={{ width: '18rem', display:'flex', flexDirection:'column', padding:5, margin:5 }} key={activity.id}>
                {/* {console.log(activity)} */}
            <Card.Img style={{height:200}} variant="top" src={activity.icon}/>
            <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                <Card.Text style={{height:150}} >{activity.description}</Card.Text>
                <Statelessbutton color="primary" label={activity.title} display="inline-block" margin={5}/>
            </Card.Body>
            </Card>
        );
    })}
   
    </>
    
  );
} 

export default Cardmap;