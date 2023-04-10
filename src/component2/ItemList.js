import ListGroup from 'react-bootstrap/ListGroup';
import "./ItemList.css";
const ItemList =()=> {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  return (
    <div className="listgroup">
    <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" disabled>
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
        This one is a button
      </ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default ItemList;