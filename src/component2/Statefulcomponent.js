import { useState } from "react";
import styled from "styled-components";

const Statefulcomponent = () => {
  //internal state
  const [userData, setUserData]=useState({
    username: "John Klein",
    age: 35,
    emailadd:"johnklein@gmail.com"
  });
  return (
    <Divcontent>
        <h1>Search Record-Stateful</h1>
        <p className="userp">Account name: {userData.username}</p>
        <p>Age: {userData.age}</p>
        <p>Email Address: {userData.emailadd}</p>
    </Divcontent>
  )
};
//declare a style component
const Divcontent = styled.div`
    background-color: #ECF2FF;
    border-radius: 20px;
    padding: 50px;
    p{
      margin: 0px;
      font-size: 18px;
    }
`;
export default Statefulcomponent;