import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import coffeecode from "../components/images/coffeecode.jpg";
import "./Navibar.css";

const Navibar =()=> {
  return (
    <div className='navs'>
      <Navbar bg="warning" variant="warning">
        <Container>
          <Navbar.Brand href="#home">
            <div className='herologo'>
            <img
              alt=""
              src={coffeecode}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Coffee Code
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navibar;
