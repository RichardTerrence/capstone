import {Container, Navbar}from 'react-bootstrap';
import './Footer.css';


const Footer =()=> {
  return (
    <>
      <Navbar style={{background:'#4B4453', height:'200px'}}>
        <Container className='iconfooter'>
          <Navbar.Brand>
            <div className='container' style={{display:'flex', flexDirection:'row', position:'relative', left:'23rem', zIndex:'3'}}>
            <div className='iconfooter'>
            <i className="fa fa-facebook-official" style={{fontSize:"36px", marginRight:'50px'}}></i>
            </div>
            <div className='iconfooter'>
            <i className="fa fa-google" style={{fontSize:"36px", marginRight:'50px'}}></i>
            </div>
            <div className='iconfooter'>
            <i className="fa fa-instagram" style={{fontSize:"36px", marginRight:'50px'}}></i>
            </div>
            <div className='iconfooter'>
            <i className="fa fa-linkedin" style={{fontSize:"36px", marginRight:'50px'}}></i>
            </div>
            <div className='iconfooter'>
            <i className="fa fa-telegram" style={{fontSize:"36px", marginRight:'50px'}}></i>
            </div>
            </div>
            <div className='iconfooter'> 
              <p style={{position:'relative', left:'27rem', marginTop:'30px'}}>Copyright <span>&copy;</span> 2023 Tem Pakyaw</p>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
export default Footer;