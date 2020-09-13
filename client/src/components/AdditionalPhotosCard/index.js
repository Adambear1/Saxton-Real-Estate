import React from "react";
import "./styles.css";

function AdditionalPhotosCard(props) {
  return (
    <li>
      <img class="additional-photo-card-photos" src={props.image} alt="" />
      <div class="uk-position-center uk-panel">{/* <h1>1</h1> */}</div>
    </li>
  );
}

export default AdditionalPhotosCard;
