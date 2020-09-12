import React from "react";
import image from "./images/luxurydiningroom.jpg";
import "./styles.css";

function TalentsPhoto() {
  return (
    <div className="talents-image-container">
      <img src={image} uk-img="true" className="talents-image" />
    </div>
  );
}

export default TalentsPhoto;
