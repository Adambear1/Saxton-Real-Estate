import React from "react";

function AdditionalPhotosPag() {
  return (
    <>
      <a
        class="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous="true"
        uk-slider-item="previous"
      ></a>
      <a
        class="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next="true"
        uk-slider-item="next"
      ></a>
    </>
  );
}

export default AdditionalPhotosPag;
