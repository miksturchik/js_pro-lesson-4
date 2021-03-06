import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Checkbox from "./Checkbox";

import Text from "./Text";
import Boxes from "./Boxes";
import SayHi from "./SayHi";
import UserName from "./UserList";
import Cyclic from "./Cyclic";

import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";
import Login from "./Login";
import Names from "./RandomName";

import TimePicker from "./TimePicker";
import SpinnerControl from "./Spinner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>

        <Names />

        <TimePicker />
        <SpinnerControl />

        <Login />

        <CounterClass />
        <CounterFunction />
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
        <SayHi />
    </React.StrictMode>,
);
