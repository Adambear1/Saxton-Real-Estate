import React from "react";
import "./styles.css";
function TalentsCard(props) {
  return (
    <div class="uk-card uk-card-secondary uk-card-body talent-card ">
      {props.name}
    </div>
  );
}

export default TalentsCard;
