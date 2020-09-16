import React from "react";
import "./styles.css";
import TalentsContainer from "../../components/TalentsConainer";
import TalentsHeader from "../../components/TalentsHeader";
import TalentsPhoto from "../../components/TalentsPhoto";

function Talents() {
  return (
    <div id="talents">
      <TalentsHeader />
      <div
        class="uk-child-width-1-2 uk-text-center talents-body"
        uk-grid="true"
      >
        <TalentsPhoto />
        <TalentsContainer />
      </div>
    </div>
  );
}

export default Talents;
