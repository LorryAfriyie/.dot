import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavigationMenu extends Component {
  render() {
    return (
      <Fragment>
        {/*Navigation Menu*/}
        <nav
          className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top"
          id={"navigation-bar"}
        >
          <div className="container">
            <a className="navbar-brand" href="#hero" id={"nav-title"}>
              <FontAwesomeIcon
                icon={["fas", "bullseye"]}
                className="me-1"
                id={"main-title"}
              />
              DOT.
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#hero">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sec1">
                    Sec 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sec2">
                    Sec 2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#carousel">
                    Carousel
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#cards">
                    Cards
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#parallax">
                    Parallax
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavigationMenu;
