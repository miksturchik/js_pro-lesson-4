import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Checkbox from "./Checkbox";

import Text from "./Text";
import Boxes from "./Boxes";
import SayHi from "./SayHi";
import UserName from "./UserList";
import Cyclic from "./Cyclic";
<<<<<<< HEAD:src/index.tsx
import Login from "./Login";
=======
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";

>>>>>>> 020316900712491bcc02d7e9d59c23c18c28b1cd:src/index.js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <SayHi />
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
<<<<<<< HEAD:src/index.tsx
        <Login />
=======
>>>>>>> 020316900712491bcc02d7e9d59c23c18c28b1cd:src/index.js
    </React.StrictMode>,
);
