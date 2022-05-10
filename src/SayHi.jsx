import { useState } from "react";
import "./SayHi.css";

function SayHi() {
    const [loading, setLoading] = useState(false);
    const [greeting, setGreeting] = useState("");

    const sayHi = () => {
        setLoading(!loading);

        setTimeout(() => {
            setGreeting("Hello!");
            setLoading((loading) => !loading);
        }, 3000);
    };

    return (
        <div>
            <button onClick={sayHi}> Say hi !</button>
            {loading && <div className="loader"></div>}
            <span>{greeting}</span>
        </div>
    );
}
export default SayHi;
