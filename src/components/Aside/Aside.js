import React from "react";
import "./Aside.css";

const Aside = props =>
    <div class="aside">
        <div class="header">
            <p>My Profile</p>
        </div>
        <div class="matches">
            {props.children}
        </div>
    </div>;

export default Aside;