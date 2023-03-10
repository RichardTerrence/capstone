import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/Navibar";
import Carousels from "./components/Carousels";
import Postcard from "./components/Postcard";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Bcrumb from "./components/Bcrumb";
const App = () => {
    
    return (
        <>
            
            <Navibar/>
            <Bcrumb/>
            <Carousels/>
            <Section/>
            <Postcard/>
            <Footer/>
           
        </>
    );
};

export default App;
