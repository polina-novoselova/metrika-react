import React from "react";
import "./ServiceCard.css";

function ServiceCard(props) {
  return (
    <div className="service__block">
      <img 
        className="service__img" 
        src={props.src} 
        alt="" 
      />
      <p className="service__price">{props.sum}</p>
      <p className="service__name">{props.text}</p>
    </div>
  );
}

export default ServiceCard;
