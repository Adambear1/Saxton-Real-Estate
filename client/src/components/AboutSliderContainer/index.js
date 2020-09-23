import React from "react";
import AboutSliderCard from "../AboutSliderCard";
import AboutSliderPag from "../AboutSliderPag";

import image from "./images/insides2.jpg";
import image1 from "./images/luxurybar.jpg";
import image2 from "./images/luxuryinsides.jpg";
import image3 from "./images/insides1.jpg";

function AboutSliderContainer() {
  let sliderInfo = [
    {
      name: "About",
      about:
        "Owner and Principal, Lauren Saxton, is a talented environmentally/economically conscious construction management professional and skilled real estate broker with a dedication to philanthropic outcomes in the built environment. ",
      image: image,
    },
    {
      name: "Vision",
      about:
        "To serve the Tacoma and surrounding area with an energy that contributes to increased affordable housing opportunities and equity for all. As a multifaceted provider of real estate services, construction project management, mergers & acquisitions, and web development services, ____ is ready to help drive our community forward. ",
      image: image1,
    },
    {
      name: "Passion",
      about:
        "The company was formed to be a force for progressive change in the Tacoma community and is committed to contributing to affordable housing solutions for all. Always accepting requests for pro bono services on affordable housing projects.",
      image: image2,
    },
    {
      name: "Experience",
      about:
        " Lauren Saxton has built a well-rounded career that includes residential and commercial real estate sales, construction project management and real estate development. ",
      image: image3,
    },
  ];
  return (
    <div uk-slider="center: true" class="about-container-slider">
      <div
        class="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
      >
        <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
          {sliderInfo.map((item) => {
            return (
              <AboutSliderCard
                name={item.name}
                image={item.image}
                about={item.about}
              />
            );
          })}
        </ul>

        <AboutSliderPag />
      </div>

      <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
    </div>
  );
}

export default AboutSliderContainer;
