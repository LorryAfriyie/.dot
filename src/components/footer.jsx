import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        {/*Footer*/}
        <section id="footer" className="p-3 text-white">
          <div className="container pt-4">
            <div className="row">
              <div className="col-md-6">
                <h1 className={"pb-1 mb-1"}>
                  <FontAwesomeIcon
                    icon={["fas", "bullseye"]}
                    className="me-1"
                    id={"main-title"}
                  />
                  DOT.
                </h1>
                <hr className={"w-25 pt-0 mt-0"} />
                <p className={"w-50"} id={"footer-text"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti eligendi expedita laudantium nam reiciendis. Animi
                  eaque exercitationem illo ipsum laborum magni minus, nulla
                  provident quae qui quia quis soluta suscipit.
                </p>
              </div>
              <div className="col-md-3">
                <h1 className={"pb-1 mb-1"}>Site Links</h1>
                <hr className={"w-25 pt-0 mt-0"} />
                <ul className={"list-unstyled"}>
                  <li>
                    <a aria-current="page" href="#hero">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#sec1">Sec 1</a>
                  </li>
                  <li>
                    <a href="#sec2">Sec 2</a>
                  </li>
                  <li>
                    <a href="#carousel">Carousel</a>
                  </li>
                  <li>
                    <a href="#cards">Cards</a>
                  </li>
                  <li>
                    <a href="#parallax">Parallax</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h1 className={"pb-1 mb-1"}>Contact Us</h1>
                <hr className={"w-25 pt-0 mt-0"} />
                <p>
                  <FontAwesomeIcon
                    icon={["fas", "inbox"]}
                    size="1x"
                    className="me-1"
                  />
                  - Lawrence@cyanfall.co.za
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={["fas", "phone"]}
                    size="1x"
                    className="me-1"
                  />
                  - (+27) 61 765 4657
                </p>
                <hr className={"w-25"} />
                <p>
                  <FontAwesomeIcon
                    icon={["fas", "inbox"]}
                    size="1x"
                    className="me-1"
                  />
                  - David@cyanfall.co.za
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={["fas", "phone"]}
                    size="1x"
                    className="me-1"
                  />
                  - (+27) 61 765 4657
                </p>
                <hr className={"w-25"} />
                <p>
                  <FontAwesomeIcon
                    icon={["fas", "inbox"]}
                    size="1x"
                    className="me-1"
                  />
                  - Juliet@cyanfall.co.za
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={["fas", "phone"]}
                    size="1x"
                    className="me-1"
                  />
                  - (+27) 61 765 4657
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Footer;
