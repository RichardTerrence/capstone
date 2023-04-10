import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navibar.css';


const Navibar =()=> {
  return (
    <>
    
      <Navbar style={{background: 'rgba(0, 0, 0, 0.1)', height:'100px'}} className="navbar fixed-top p-md-2">
        <Container className='contain'>
          <Navbar.Brand className='fant' href="#home" style={{color:'#4B4453', fontWeight:'bold', fontFamily:'Noto Serif, serif'}}>FinalCapstone</Navbar.Brand>
          <Nav className="me-auto" style={{gap:'20px', fontFamily:'Prompt, sans-serif'}}>
            <Nav.Link><Link to="/" style={{color:'#C34A36'}} className='nabar'>HOME</Link></Nav.Link>
            <Nav.Link><Link to="/services" style={{color:'#C34A36'}} className='nabar'>SERVICES</Link></Nav.Link>
            <Nav.Link><Link to="/accord" style={{color:'#C34A36'}} className='nabar'>PRODUCTS</Link></Nav.Link>
            <Nav.Link><Link to="/login" style={{color:'#C34A36'}} className='nabar'>LOGIN</Link></Nav.Link>
          </Nav>
            <Navbar.Brand className='srch'>
            <div className="search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"><i className="fa fa-search"></i></button>
              </form>
            </div>
            </Navbar.Brand>
        </Container> 
      </Navbar>
      
    </>
  );
}

export default Navibar;
