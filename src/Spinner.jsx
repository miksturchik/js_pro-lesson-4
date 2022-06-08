import { useState } from "react";
import "./Spinner.css";

function Spinner({ animation }) {
    const cssClass = `loaderr ${animation ? "loaderr-animated" : ""}`;
    return <div className={cssClass}></div>;
}

function SpinnerControl() {
    const [animation, setAnimation] = useState(false);

    const SpinnerState = () => {
        setAnimation(!animation);
    };

    return (
        <div className="wrapper">
            <button onClick={SpinnerState}>
                {animation ? "Stop" : "Play"}
            </button>
            <Spinner animation={animation} />
        </div>
    );
}
export default SpinnerControl;
