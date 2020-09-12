import React from "react";
import LocationAddress from "../LocationAddress";
import "./styles.css";

function LocationContainer() {
  return (
    <div className="location-main">
      <div className="location-container">
        {"      "}
        <LocationAddress />
      </div>
    </div>
  );
}

export default LocationContainer;
