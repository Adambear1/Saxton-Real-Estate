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
        "Fusce mi enim, tincidunt vel lectus sed, blandit consequat mi. Vestibulum tristique ante felis, ut varius odio imperdiet vitae. Cras massa massa, hendrerit rutrum erat ac, luctus pulvinar felis. Praesent id varius enim. Integer cursus, eros in sollicitudin fringilla, eros mi bibendum turpis, a rhoncus mauris nisi eu sapien. ",
      image: image,
    },
    {
      name: "Vision",
      about:
        "Phasellus mattis gravida egestas. Aliquam sed molestie orci. Donec vel dolor eu diam pellentesque varius. Vivamus neque velit, accumsan ac semper nec, pulvinar id enim. Nunc nec pulvinar libero, ut ornare enim. ",
      image: image1,
    },
    {
      name: "Passion",
      about:
        "Integer pretium mollis ante, sit amet tincidunt urna eleifend eu. Quisque porttitor ac ante vel tempus. Quisque posuere, leo vitae venenatis tincidunt, sapien sem maximus dolor, sed auctor justo lacus at turpis. Morbi vel volutpat est. ",
      image: image2,
    },
    {
      name: "Experience",
      about:
        "Donec vel dolor eu diam pellentesque varius. Quisque porttitor ac ante vel vuisque posuere, leo vitae venenatis posuere, leo vitae venenatis tincidunt, orbi vel volutpat est. Ipien sem maximus dolor, sed auctor justo lacus at turpis. M ",
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
