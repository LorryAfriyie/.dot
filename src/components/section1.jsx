import React, { Component, Fragment } from "react";

class Section1 extends Component {
  render() {
    return (
      <Fragment>
        {/*Section 1*/}
        <section id={"sec1"}>
          <div className="container pt-lg-4">
            <h1 className="display-1 text-center pt-lg-5">About us</h1>
            <div className="row">
              <div
                className="col-md-6 d-flex align-items-center"
                id={"about-1"}
              >
                <img
                  src="../images/pexels-ivan-bertolazzi-2681319.jpg"
                  className={"img-fluid rounded-circle shadow img-thumbnail"}
                  alt="20170714_133440.jpg"
                />
              </div>
              <div
                className="col-md-6 d-flex align-items-center"
                id={"about-2"}
              >
                <h3 className="lead fs-5" id={"about-text"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  assumenda blanditiis eligendi illo libero magnam magni
                  molestias similique sunt velit. Adipisci animi consectetur
                  maxime molestias quod repudiandae saepe, voluptatum? Iste!
                </h3>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Section1;
