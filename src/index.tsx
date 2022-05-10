import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Checkbox from "./Checkbox";

import Text from "./Text";
import Boxes from "./Boxes";
import UserName from "./UserList";
import Cyclic from "./Cyclic";
import Login from "./Llogin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <UserName />
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

        <Cyclic />
        <Checkbox boxSize={30} />
        <Login />
    </React.StrictMode>,
);
