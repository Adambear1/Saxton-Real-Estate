import React from "react";
import TalentsCard from "../TalentsCard";

function TalentsContainer() {
  return (
    <div
      class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center"
      uk-grid="true"
    >
      <TalentsCard />
    </div>
  );
}

export default TalentsContainer;
