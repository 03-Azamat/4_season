import React from "react";
import ReactDOM from "react-dom";

import "./burger.css";
import SideBar from "./sidebar";

function Burger() {
    return (
        <div id="App">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

            <div id="page-wrap">
                <h1>Cool Restaurant 🍔🍕</h1>
                <h2>Check out our offerings in the sidebar!</h2>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Burger />, rootElement);
