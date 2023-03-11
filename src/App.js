import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/Navibar";
import Cardmap from "./components/Cardmap";
import Statefulcomponent from "./components/Statefulcomponent";
import Eventhandler from "./components/Eventhandler";
import Reacthooks from "./components/Reacthooks";
import Statelessbutton from "./components/Statelessbutton";
import { Container } from "react-bootstrap";
const App = () => {

    return (
        <>
            <Navibar />
            <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Cardmap />
            </Container>
            <Statelessbutton color="success" label="Message Us" display="inline-block" margin={5}/>
            <Container>
                <Statefulcomponent/>
                <Eventhandler />
                <Reacthooks />
            </Container>
        </>
    );
};

export default App;
