import React from "react";
import headerPhoto from "./images/luxuryocean.jpg";
import "./styles.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div class="uk-position-relative header-nav" id="home">
      <div class="header-nav-photo-container">
        <img src={headerPhoto} class="header-nav-photo" />
      </div>
      <div class="uk-position-top">
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav header-nav-list">
              <li class="uk-active">
                <Link
                  activeClass="active"
                  className="header-nav-link"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="header-nav-link"
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
                  className="header-nav-link"
                  to="construction-management"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Construction Management
                </Link>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li class="uk-active">
                      <a href="#">Active</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li class="uk-nav-header">Header</li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li class="uk-nav-divider"></li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="header-nav-link"
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
