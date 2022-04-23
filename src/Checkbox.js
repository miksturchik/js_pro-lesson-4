import { useState } from "react";
import "./Checkbox.css";

function Checkbox() {
    const [box, setBox] = useState("V");

    return (
        <div className="checkbox">
            <div
                onClick={() => {
                    if (box === "V") {
                        return setBox("X");
                    }
                    setBox("V");
                }}
            >
                {box}
            </div>
        </div>
    );
}

export default Checkbox;
