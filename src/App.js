import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/Navibar";
import ItemList from "./components/ItemList";
import Postcard from "./components/Postcard";
const App = () => {
    const greetings = <h1>Welcome KodeBrewer in React using JSX!</h1>; 
    return (
        <>
            
            <Navibar/>
            <Postcard/>
            <ItemList/>
            <div>
                {greetings}
            </div>
        </>
    );
};

export default App;
