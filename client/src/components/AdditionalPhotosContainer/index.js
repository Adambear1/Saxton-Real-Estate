import React from "react";
import AdditionalPhotosCard from "../AdditionalPhotosCard";
import AdditionalPhotosPag from "../AdditionalPhotosPag";

import image1 from "./images/pic1.jpg";
import image2 from "./images/pic2.jpg";
import image3 from "./images/pic3.jpg";
import image4 from "./images/pic4.jpg";
import image5 from "./images/pic5.jpg";

function AdditionalPhotosContainer() {
  let images = [image1, image2, image3, image4, image5];
  return (
    <div
      class="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider="true"
    >
      <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
        {images.map((item) => {
          return <AdditionalPhotosCard image={item} />;
        })}
      </ul>

      <AdditionalPhotosPag />
    </div>
  );
}

export default AdditionalPhotosContainer;
