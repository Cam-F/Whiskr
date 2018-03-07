import React from "react";
import CardBtn from '../CardBtn';
import './SwipeCard.css';

const SwipeCard = props =>
    <div>
        <div class="swipecard"
            style={{
                backgroundImage: props.image1 ? `url(${props.image1})` : "none"
            }}
        >
            <div className="nameBlock">
                <p>
                    <div className="text-center">
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            {props.name}
                        </button>
                        <div class="collapse" id="collapseExample">
                            <div class="card-block">
                                <strong> Breed: </strong>{props.breed} | <strong>Sex: </strong>{props.sex} | {props.age}<br />
                                <strong>City: </strong>{props.city} | {props.phone} <br />
                            </div>
                        </div>
                    </div>
                </p>
                <CardBtn
                    style={{ opacity: props.image ? 1 : 1 }}
                    onClick={props.handleBtnClick}
                    data-value="pass"
                />
                <CardBtn
                    style={{ opacity: props.image ? 1 : 1 }}
                    onClick={props.handleBtnClick}
                    data-value="pick"
                />
            </div>
        </div >
    </div>;

export default SwipeCard;