import React from "react";
import "./styles.css";

function LocationAddress() {
  return (
    <div className="location-address">
      <span
        uk-icon="icon: location; ratio: 1 "
        className="uk-margin-bottom uk-margin-top"
      ></span>
      <br />
      <a
        href="https://www.google.com/maps/place/221+S+28th+St+%23103,+Tacoma,+WA+98402/data=!4m2!3m1!1s0x5490557cb06f7a21:0x34649a3210c73bad?sa=X&ved=2ahUKEwjw0NzPteTrAhUuJTQIHSOyAOcQ8gEwAHoECAsQAQ"
        target="_blank"
      >
        221 S 28th St Suite 103, Tacoma, WA 98402
      </a>
    </div>
  );
}

export default LocationAddress;
