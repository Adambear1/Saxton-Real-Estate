import React from "react";
import TalentsContainer from "../../components/TalentsConainer";
import TalentsHeader from "../../components/TalentsHeader";
import TalentsPhoto from "../../components/TalentsPhoto";

function Talents() {
  return (
    <div className="uk-container">
      <TalentsHeader />
      <div class="uk-child-width-1-2 uk-text-center" uk-grid="true">
        <div>
          <TalentsPhoto />
        </div>
        <div>
          <TalentsContainer />
        </div>
      </div>
    </div>
  );
}

export default Talents;
