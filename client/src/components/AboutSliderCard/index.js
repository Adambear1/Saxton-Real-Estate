import React from "react";
import "./styles.css";

function AboutSliderCard(props) {
  return (
    <li>
      <div class="uk-card uk-card-default slider-card-container about-card">
        <div class="uk-card-media-top slider-image-overlay">
          <img src={props.image} alt="" class="slider-image" />
        </div>
        <div class="uk-card-body">
          <h3 class="uk-card-title slider-text-header uk-text-center">
            ~ {props.name} ~
          </h3>
          <p>{props.about}</p>
        </div>
      </div>
    </li>
  );
}

export default AboutSliderCard;
