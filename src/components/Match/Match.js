import React from "react";
import './Match.css';

const Match = props =>
    <div className="match-card">
        <div className="img-container">
            <img src={props.image} />
        </div>
        <div className="match-name">
            <p class="name">{props.name}</p>
        </div>
    </div>;

export default Match;