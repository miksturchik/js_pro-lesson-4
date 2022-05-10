import React from "react";

function Counter() {
    const [count, setCount] = React.useState(1);

    const clickPlus = () => {
        setCount(count + 1);
    };

    const clickMinus = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Functional component</h2>
            <button onClick={clickMinus}>-</button>
            {count} <button onClick={clickPlus}>+</button>
        </div>
    );
}

export default Counter;
