import React from 'react';
import './Carousell.css';


const Carousell = () => {
 
  
 
  return (
    <>
      <div className='bckground'>
        <form className='form-container'>
          <h1>SEND MAIL</h1>
          <input type='text' placeholder='Enter Email' name='email' required/>
          <input type='password' placeholder='Enter Password' name='password' required/>
          <label for="message"><b>Message</b></label>
          <input className='txtmessages' type='text' placeholder='Enter Message' name='message'/>
          <button type='submit' class="btn">Submit</button>
        </form>
      </div>

    
    </>
 
  )
}

export default Carousell;