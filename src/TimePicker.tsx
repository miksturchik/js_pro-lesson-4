import "./TimePicker.css";
import { useState, useEffect, FC } from "react";

const TimePicker: FC = () => {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);

    const takeAnHour = () => {
        setHours(hours - 1);
    };

    const giveAnHour = () => {
        setHours(hours + 1);
    };

    const takeAminutes = () => {
        setMinutes(minutes - 1);
    };

    const giveAminutes = () => {
        setMinutes(minutes + 1);
    };

    useEffect(() => {
        if (hours < 0) {
            setHours(23);
        }

        if (hours > 23) {
            setHours(0);
        }

        if (minutes < 0) {
            setMinutes(59);
            setHours(hours - 1);
        }

        if (minutes > 59) {
            setMinutes(0);
            setHours(hours + 1);
        }
    }, [minutes, hours]);

    return (
        <div className="container">
            <div className="wrapper">
                <button onClick={takeAnHour}>-</button>
                <h2>{hours > 9 ? hours : `0${hours}`}</h2>
                <button onClick={giveAnHour}>+</button>
            </div>
            <div className="wrapper">:</div>
            <div className="wrapper">
                <button onClick={takeAminutes}>-</button>
                <h2>{minutes > 9 ? minutes : `0${minutes}`}</h2>
                <button onClick={giveAminutes}>+</button>
            </div>
        </div>
    );
};

export default TimePicker;
