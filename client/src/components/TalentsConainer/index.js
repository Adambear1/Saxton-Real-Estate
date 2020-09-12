import React from "react";
import TalentsCard from "../TalentsCard";
import "./styles.css";

function TalentsContainer() {
  let talents = [
    {
      name: "Project Management",
      about:
        "Pellentesque consequat viverra pellentesque. Maecenas nisi erat, euismod ut lectus id, sagittis mollis nisi. Aliquam erat volutpat. Mauris orci libero, imperdiet in vestibulum sed, accumsan at nisi. Proin hendrerit a urna eu lobortis. Etiam sed gravida turpis, non aliquet nulla. Phasellus ullamcorper odio nulla, in tincidunt sem dignissim ut.",
    },
    {
      name: "Mergers and Acquisitions",
      about:
        "Suspendisse at ullamcorper diam. Duis laoreet ex et quam semper feugiat. Vivamus sodales vitae elit eu aliquam. Ut nisi dolor, rutrum et diam non, semper ultrices enim. Donec a augue at velit sollicitudin dignissim ut in dolor. In ut sem nulla. Vestibulum in leo scelerisque, semper lacus ac, vulputate sem. Donec blandit sapien in ex aliquam, at laoreet urna dapibus.",
    },
    {
      name: "Real Estate",
      about:
        "In eget nulla et sapien finibus consequat. Mauris eu ex sit amet velit ultricies suscipit. Donec bibendum quis nunc sed euismod. Nunc quis neque vitae odio tincidunt porttitor vel sed diam. Vivamus lacinia ligula eu lorem consectetur auctor. Donec feugiat scelerisque sapien, id gravida neque tempus at. Suspendisse at ullamcorper diam. Duis laoreet ex et quam semper feugiat. Vivamus sodales vitae elit eu aliquam. ",
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

        <ul class="uk-switcher uk-margin talent-description">
          {talents.map((item) => {
            return (
              <p>
                <b className="talent-description-name">{item.name}: </b>
                {item.about}
              </p>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TalentsContainer;
