import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Text from "./Text";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
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
    </React.StrictMode>,
);
