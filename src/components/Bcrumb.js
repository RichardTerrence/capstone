import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./Bcrumb.css";

const Bcrumb =()=> {
  return (
    <Breadcrumb className='bcrumb'>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Bcrumb;