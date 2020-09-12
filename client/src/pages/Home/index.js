import React from "react";
import TalentsHeader from "../../components/TalentsHeader";
import TalentsPhoto from "../../components/TalentsPhoto";
import TalentsContainer from "../../components/TalentsConainer";
import AboutHeader from "../../components/AboutHeader";
import AboutSliderContainer from "../../components/AboutSliderContainer";
import LocationHeader from "../../components/LocationHeader";
import LocationContainer from "../../components/LocationContainer";
import SocialMediaIcons from "../../components/SocialMediaIcons";

function Home() {
  return (
    <div className="uk-container">
      {/* talents */}
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
      {/* about */}
      <div className="uk-margin-top" id="about">
        <AboutHeader />
        <AboutSliderContainer />
      </div>
      {/* location */}
      <div id="location">
        <LocationHeader />
        <LocationContainer />
      </div>
      {/* social media */}
      <div id="socialmedia">
        <SocialMediaIcons />
      </div>
    </div>
  );
}

export default Home;
