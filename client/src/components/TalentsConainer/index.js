import React from "react";
import TalentsCard from "../TalentsCard";
import TalentsPhotoPag from "../TalentsPhotoPag";
import "./styles.css";

function TalentsContainer() {
  let talents = [
    {
      name: "Project Management",
      about:
        "Construction project management for residential and commercial real estate development projects. Allow ____ to advocate for the best outcome on your commercial or residential project. Services include planning, contract and bidding negotiation, subcontractor management, operations management, and more. ",
    },
    {
      name: "Mergers and Acquisitions",
      about:
        "Representation and facilitation of private business mergers and acquisitions. Allow an experienced M&A professional guide you through your business merger or acquisition. ",
    },
    {
      name: "Real Estate",
      about:
        " Residential and commercial real estate sales professionals with the knowledge to navigate the always-changing real estate market. ",
    },
  ];
  return (
    <div>
      <div
        class="uk-grid-column-small uk-grid-row-large uk-child-width-1-2@s uk-text-center talent-card-container"
        uk-grid="true"
      >
        <ul
          class="uk-subnav uk-subnav-pill talent-name"
          uk-switcher="true; animation: uk-animation-fade; mode: hover "
        >
          {talents.map((item) => {
            return <TalentsCard name={item.name} />;
          })}
        </ul>

        <ul class="uk-switcher uk-margin talent-description animate__animated animate__zoomInLeft">
          {talents.map((item) => {
            return (
              <p>
                <b className="talent-description-name">{item.name}: </b>
                {item.about}
              </p>
            );
          })}
          <TalentsPhotoPag />
        </ul>
      </div>
    </div>
  );
}

export default TalentsContainer;
