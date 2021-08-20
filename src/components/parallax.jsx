import React, { Component, Fragment } from "react";

class Parallax extends Component {
  render() {
    return (
      <Fragment>
        {/*Parallax*/}
        <section id="parallax">
          <div id="overlay" />
          <div className="container">
            <div
              className={
                "d-flex justify-content-center align-items-center mb-5 pb-5"
              }
            >
              <h1 className={"display-1 pt-5 text-white"}>"Hello World"</h1>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Parallax;
