import React from "react";
import data from "./data.json";
import "./UserList.css";

function UserName() {
    return (
        <div className="container">
            {data.map((item) => {
                return (
                    <div key={item._id} className="card">
                        <h3>{item.name.first}</h3>
                        <h4>{item.name.last}</h4>
                    </div>
                );
            })}
        </div>
    );
}

export default UserName;
