import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Newsletter extends Component {
  render() {
    return (
      <Fragment>
        {/*Newsletter*/}
        <section className="bg-dark shadow" id={"newsletter"}>
          <div className="container text-white text-center py-5">
            <p className={"lead"}>
              JOIN OUR NEWSLETTER FOR MORE DEALS AND UPDATES
            </p>
            <div className="row justify-content-center">
              <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                <form action="" className="form-inline">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={"Enter your email"}
                    />
                    <div className="input-group-append">
                      <button type={"button"} className="btn btn-primary">
                        Join Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="container pt-4" id={"social-media"}>
              <h1 className={"mb-0 pb-0"}>Follow us in social media</h1>
              <div className="container pt-3" id={"social"}>
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  id={"facebook"}
                  size="2x"
                  className="me-4"
                />
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  id={"instagram"}
                  size="2x"
                  className="me-4"
                />
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  id={"twitter"}
                  size="2x"
                  className="me-4"
                />
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  id={"twitter"}
                  size="2x"
                />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Newsletter;
