import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Boxes from "./Boxes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Boxes titleSize={10} label="First box" cssClass="small" />
        <Boxes titleSize={20} label="Second box" cssClass="medium" />
        <Boxes titleSize={30} label="Third box" cssClass="big" />
    </React.StrictMode>,
);
