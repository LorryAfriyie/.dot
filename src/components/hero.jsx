import React, { Component, Fragment } from "react";

class Hero extends Component {
  render() {
    return (
      <Fragment>
        {/*Hero Section*/}
        <section
          id={"hero"}
          className={"d-flex justify-content-center align-items-center"}
        >
          <div id="overlay" />
          <div className="container text-center text-white">
            <h1 className={"display-1 mb-0 pb-0"}>Welcome to DOT.</h1>
            <h3 className={"display-5 mt-0 pt-0"}>
              A random site with colors and whatnot.
            </h3>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Hero;
