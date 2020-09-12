import React from "react";
import LocationContainer from "../../components/LocationContainer";
import LocationHeader from "../../components/LocationHeader";

function Location() {
  return (
    <div className="uk-container">
      <LocationHeader />
      <LocationContainer />
    </div>
  );
}

export default Location;
