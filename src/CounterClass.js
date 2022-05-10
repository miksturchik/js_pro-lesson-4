import { Component } from "react";

class CounterClass extends Component {
    state = {
        count: 1,
    };

    clickPlus = () => {
        this.setState({ count: this.state.count + 1 });
    };

    clickMinus = () => {
        this.setState({ count: this.state.count - 1 });
    };
    render() {
        const {
            clickMinus,
            clickPlus,
            state: { count },
        } = this;
        return (
            <div>
                <h2>Сlass component</h2>
                <button onClick={clickMinus}>-</button>
                {count} <button onClick={clickPlus}>+</button>
            </div>
        );
    }
}

export default CounterClass;
