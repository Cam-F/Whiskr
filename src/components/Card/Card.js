import React from "react";
import CardBtn from '../CardBtn';
import './Card.css';

const Card = props =>
    <div class="card"
        style={{
            backgroundImage: props.image ? `url(${props.image})` : "none"
        }}
    >
        <CardBtn
            style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="pass"
        />
        <CardBtn
            style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="info"
        />
        <CardBtn
            style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="pick"
        />
    </div >;

export default Card;