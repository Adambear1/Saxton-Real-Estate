import React from "react";
import "./styles.css";

function AboutSliderCard(props) {
  return (
    <li>
      <div className="uk-card uk-card-default slider-card-container about-card">
        <div className="uk-card-media-top slider-image-overlay">
          <img src={props.image} alt="" className="slider-image" />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title slider-text-header uk-text-center">
            ~ {props.name} ~
          </h3>
          <p className="uk-text-center">{props.about}</p>
        </div>
      </div>
    </li>
  );
}

export default AboutSliderCard;
