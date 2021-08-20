import React, { Component, Fragment } from "react";

class Section2 extends Component {
  render() {
    return (
      <Fragment>
        {/*Section 2*/}
        <section id={"sec2"} className={"container-fluid px-0"}>
          <div className="row">
            <div
              className="col-md-6 d-flex justify-content-center align-items-center"
              id={"grid1"}
            >
              <div className="container text-center">
                <h1 className={"display-1 text-white"}>Mobile Development</h1>
              </div>
            </div>
            <div
              className="col-md-6 d-flex justify-content-center align-items-center"
              id={"grid2"}
            >
              <div className="container text-center">
                <h1 className={"display-1 text-primary"}>Photography</h1>
              </div>
            </div>
            <div
              className="col-md-6 d-flex justify-content-center align-items-center"
              id={"grid3"}
            >
              <div className="container text-center">
                <h1 className={"display-1 text-primary"}>Graphic Design</h1>
              </div>
            </div>
            <div
              className="col-md-6 d-flex justify-content-center align-items-center"
              id={"grid4"}
            >
              <div className="container text-center">
                <h1 className={"display-1 text-white"}>Web Development</h1>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Section2;
