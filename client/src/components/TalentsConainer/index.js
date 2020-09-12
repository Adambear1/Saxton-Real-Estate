import React from "react";
import TalentsCard from "../TalentsCard";
import "./styles.css";

function TalentsContainer() {
  let talents = [
    {
      name: "Project Management",
    },
    {
      name: "Mergers and Acquisitions",
    },
    {
      name: "Real Estate",
    },
  ];
  return (
    <div
      class="uk-grid-column-small uk-grid-row-large uk-child-width-1-2@s uk-text-center talent-card-container"
      uk-grid="true"
    >
      {talents.map((item) => {
        return <TalentsCard name={item.name} />;
      })}
    </div>
  );
}

export default TalentsContainer;
