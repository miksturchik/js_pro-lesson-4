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

interface Name {
    name: string;
    id: number;
}

const Names: FC = () => {
    const [state, setState] = useState<Name[]>([
        {
            name: "James",
            id: 1,
        },
        {
            name: "Oliver",
            id: 2,
        },
        {
            name: "Benjamin",
            id: 3,
        },
    ]);

    const addingName = () => {
        const index = Math.floor(Math.random() * 13);
        const newArray = [
            ...state,
            { name: data[index], id: state.length + 1 },
        ];
        setState(newArray);
    };

    return (
        <div className="list-wrapper">
            <ul>
                {state.map((user) => {
                    return <li key={user.id}>{user.name}</li>;
                })}
                <button className="list-btn" onClick={addingName}>
                    Add Name
                </button>
            </ul>
        </div>
    );
};

export default Names;
