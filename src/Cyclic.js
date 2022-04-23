import { useState } from "react";
import "./Cyclic.css";

function Cyclic() {
    const [count, setCount] = useState(0);
    const repeatArrey = ["⃙", "⃚ ", "⃘"];

    return (
        <div>
            <button
                onClick={() => {
                    if (count < 2) {
                        setCount(count + 1);
                    } else {
                        setCount(0);
                    }
                }}
            >
                {repeatArrey[count]}
            </button>
        </div>
    );
}

export default Cyclic;
