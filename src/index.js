import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
 Props_1
import Text from "./Text";
import Boxes from "./Boxes";
 main

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
 Props_1
        <Text
            text="Different text"
            textColor="red"
            textSize="50px"
            underline={false}
        />
        <Text
            text="Different color"
            textColor="yellow"
            textSize="40px"
            underline={false}
        />
        <Text
            text="Different size"
            textColor="green"
            textSize="35px"
            underline={false}
        />
        <Text
            text="Underlined"
            textColor="orange"
            textSize="30px"
            underline={true}
        />

        <Boxes titleSize={10} label="First box" cssClass="small" />
        <Boxes titleSize={20} label="Second box" cssClass="medium" />
        <Boxes titleSize={30} label="Third box" cssClass="big" />
 main
    </React.StrictMode>,
);
