import React from "react";
import headerPhoto from "./images/luxuryocean.jpg";
import "./styles.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="uk-position-relative header-nav" id="home">
      {/* <div className="animate__animated animate__zoomIn"> */}
      <div className=" header-nav-photo-container ">
        <img src={headerPhoto} className="header-nav-photo" />
      </div>
      {/* </div> */}
      <div className="uk-position-top">
        <nav
          className="uk-navbar-container uk-navbar-transparent"
          uk-navbar="true"
        >
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav header-nav-list">
              <li className="uk-active">
                <a
                  className="animate__animated animate__fadeIn"
                  disabled="true"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="header-nav-link animate__animated animate__fadeInLeft"
                  to="real-estate"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="header-nav-link animate__animated animate__fadeInUp"
                  to="construction-management"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Construction Management
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="header-nav-link animate__animated animate__fadeInRight"
                  to="mergers-and-acquisitions"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Mergers & Acquisitions
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
