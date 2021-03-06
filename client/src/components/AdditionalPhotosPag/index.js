import React from "react";

function AdditionalPhotosPag() {
  return (
    <div className="uk-pagination">
      <li>
        {" "}
        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          uk-slidenav-previous="true"
          uk-slider-item="previous"
        ></a>
      </li>
      <li>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          uk-slidenav-next="true"
          uk-slider-item="next"
        ></a>
      </li>
    </div>
  );
}

export default AdditionalPhotosPag;
