import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Button from "./components/Button";
import Section01 from "./components/Section01";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        {/* put in here the components */}
        <App/>
        <Button/>
        <Section01/>
       
    </div>
);