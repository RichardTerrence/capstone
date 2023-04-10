import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/Navibar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FlexBox from "./components/FlexBox";


const App = () => {
    
    return (
        <BrowserRouter>
            <Navibar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/services" element={<FlexBox/>}/>
                {/*</Routes><Route path="/experts" element={</>}/>
                <Route path="/loginA" element={</>}/> */}
                {/* for other pages 404 */}
                <Route path="*" element={<h1 style={{textAlign: "center"}}>Error 404 - Page Not Found!</h1>}/>
            </Routes>
           
        </BrowserRouter>
    );
};

export default App;
