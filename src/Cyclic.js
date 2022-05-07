import { useState } from "react";
import "./Cyclic.css";

const repeatArrey = ["⃙", "⃚ ", "⃘"];

function Cyclic() {
    const [count, setCount] = useState(0);

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
