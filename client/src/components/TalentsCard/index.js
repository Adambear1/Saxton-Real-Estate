import React from "react";
import "./styles.css";
function TalentsCard(props) {
  return (
    <li className="uk-card uk-card-secondary uk-card-body talent-card uk-animation-fade">
      <p className="talent-card-text">{props.name}</p>
    </li>
  );
}

export default TalentsCard;
