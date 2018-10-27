import React from "react";
import "./FalloutCard.css";

const FalloutCard = props => (
  <div className="card" value={props.id} onClick={() => props.handleClickCard(props.id)}>
    <img className="card-img-top" src={props.image} alt={props.name}/>
    </div>
   

);

export default FalloutCard;