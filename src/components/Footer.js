import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import coffeecode from "../components/images/coffeecode.jpg";
import "./Footer.css";

const Footer =()=> {
  return (
    <div className='navss'>
      <Navbar bg="gray" variant="gray">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={coffeecode}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
           
            <div className='conss1'>
                    <h4>PROVIDERS</h4>
                    <p>Links</p>
                    <p>Services</p>
                    <p>Creativity</p>
                    <p>Your Accounts</p>    
            </div>
            <div className='conss'>
                    <h4>Contact</h4>
                    <p>Philippines,PH</p>
                    <p>avengers@gmail.com</p>
                    <p>+63 9123456789</p>
                    <p>FB Pages</p>    
            </div>
            

          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;