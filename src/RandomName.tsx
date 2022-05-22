import { useState, FC } from "react";
import "./RandomName.css";

const data = [
    "James",
    "Oliver",
    "Benjamin",
    "Emma",
    "Isabella",
    "Sophia",
    "Charlotte",
    "Mia",
    "Lucas",
    "Mason",
    "Evelyn",
    "Elijah",
    "Ava",
];

const Names: FC = () => {
    const [state, setState] = useState<string[]>([
        "James",
        "Oliver",
        "Benjamin",
    ]);

    const addingName = () => {
        const index = Math.floor(Math.random() * 13);
        const newPeople = data[index];
        const newArray = [...state, newPeople];
        setState(newArray);
    };

    return (
        <div className="list-wrapper">
            <ul>
                {state.map((name, index) => {
                    return (
                        <div key={index}>
                            <li className="name">{name}</li>
                        </div>
                    );
                })}
                <button className="list-btn" onClick={addingName}>
                    Add Name
                </button>
            </ul>
        </div>
    );
};

export default Names;
