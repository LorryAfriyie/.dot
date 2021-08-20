import React, { Component, Fragment } from "react";

class Carousel extends Component {
  render() {
    return (
      <Fragment>
        {/*Carousel*/}
        <section id={"carousel"}>
          <div id="overlay" />
          <div className="container-fluid px-0">
            <div
              id={"carouselFade"}
              className="carousel slide carousel-fade"
              data-bs-ride={"carousel"}
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouseFade"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselFade"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselFade"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div
                    id="color1"
                    className={
                      "d-flex justify-content-center align-items-center"
                    }
                  >
                    <img
                      src="../images/20170714_133440.jpg"
                      className={
                        "img-fluid rounded-circle shadow img-thumbnail"
                      }
                      alt="20170714_133440.jpg"
                    />
                  </div>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    id="color2"
                    className={
                      "d-flex justify-content-center align-items-center"
                    }
                  >
                    <img
                      src="../images/IMG-20210602-WA0004.jpg"
                      className={
                        "img-fluid rounded-circle shadow img-thumbnail"
                      }
                      alt="20170714_133440.jpg"
                    />
                  </div>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    id="color3"
                    className={
                      "d-flex justify-content-center align-items-center"
                    }
                  >
                    <img
                      src="../images/pexels-putera-danial-2733614.jpg"
                      className={
                        "img-fluid rounded-circle shadow img-thumbnail"
                      }
                      alt="20170714_133440.jpg"
                    />
                  </div>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Carousel;
