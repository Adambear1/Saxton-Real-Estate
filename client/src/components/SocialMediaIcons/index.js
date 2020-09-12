import React from "react";
import "./styles.css";

function SocialMediaIcons() {
  return (
    <ul className="social-media-container">
      <li id="facebook">
        <span uk-icon="facebook"></span>
      </li>
      <li id="twitter">
        <span uk-icon="twitter"></span>
      </li>
      <li id="instagram">
        <span uk-icon="instagram"></span>
      </li>
      <li id="linkedin">
        <span uk-icon="linkedin"></span>
      </li>

      <li id="youtube">
        <span uk-icon="youtube"></span>
      </li>
    </ul>
  );
}

export default SocialMediaIcons;
