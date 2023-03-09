//import the css file
import "./Section01.css";

const Section01 = () => {
    return (
        <div style={{backgroundColor: "coral", color: "gold" }}>
            <h1 style={{fontSize: 40}}>Section 01 : HTML</h1>
            <p className="title">This is html description </p>
        </div>
    );
};

export default Section01;
//expression and statement
let age = 40;
let sum = 20+20;

if (sum === age){
    console.log("it's a coincidence");
}