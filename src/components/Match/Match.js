import React from "react";
import './Match.css';

const Match = props =>
    <div className="match-card">
        <div className="img-container">
            <img src={props.image} alt="" />
        </div>
        <div className="match-name">
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseMatch" aria-expanded="false" aria-controls="collapseExample">
                {props.name}
            </button>
        </div>
        <div class="collapse" id="collapseMatch">
            <div class="mCard card-block">
                <strong> Breed: </strong>{props.breed} | 
  </div>
        </div>
    </div>;

export default Match;