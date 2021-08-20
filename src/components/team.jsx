import React, { Component, Fragment, useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const TeamModal = (props) => {
  const modal = props.stuff.map((m) => (
    <Modal animation={false} {...props} key={m.id}>
      <Modal.Header closeButton onClick={props.onHide}>
        <Modal.Title>{m.name + " " + m.lastName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{m.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  ));

  return <Fragment>{modal}</Fragment>;
};

const TeamCards = (props) => {
  // Modal 1
  const [modalShow, setModalShow] = useState(false);
  const val = (id) => {
    props.teamInfo.map((item) => {
      if (item.id === id) {
        window.alert(
          item.name + " " + item.lastName + "\n\n" + item.description
        );
      }
    });
  };

  const cols = props.teamInfo.map((row) => {
    return (
      <div className="col" key={row.id}>
        <div className="card mb-4 border-0">
          <div className="card-body p-4">
            {row.image}
            <div className={"pt-3 pb-3 bio"}>
              <h3 className="card-title pb-0 mb-0">
                {row.name + " " + row.lastName}
              </h3>
              <p className={"pt-0 mt-0 lead text-muted"}>{row.description}</p>
            </div>
            <button
              type={"button"}
              className={"w-100 btn btn-lg btn-outline-primary p-2"}
              onClick={(e) => {
                /*setModalShow(true);*/
                val(row.id);
              }}
            >
              {row.name}
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <Fragment>
      <div className="mt-5">
        <div className="row rows-cols-1 row-cols-md-3 mb-3 text-center">
          {cols}
        </div>
      </div>
      <TeamModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        stuff={props.teamInfo}
      />
    </Fragment>
  );
};

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      team: [
        {
          id: 1,
          name: "Lawrence",
          lastName: "Afriyie",
          description:
            "Graphic Designer, Photographer and Web Developer in practice",
          image: (
            <img
              src="../images/20170714_133440.jpg"
              className={"img-fluid rounded-circle img-thumbnail"}
              alt="20170714_133440.jpg"
            />
          ),
        },
        {
          id: 2,
          name: "David",
          lastName: "Hagemann",
          description:
            "Graphic Designer, Photographer and Web Developer in practice",
          image: (
            <img
              src="../images/IMG-20210602-WA0004.jpg"
              className={"img-fluid rounded-circle img-thumbnail"}
              alt="20170714_133440.jpg"
            />
          ),
        },
        {
          id: 3,
          name: "Juliet",
          lastName: "Doe",
          description: "Accountant, Model, Public Relations Manager",
          image: (
            <img
              src="../images/pexels-putera-danial-2733614.jpg"
              className={"img-fluid rounded-circle img-thumbnail"}
              alt="20170714_133440.jpg"
            />
          ),
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <section id="team">
          <div className="container text-center pt-5">
            <h1 className={"display-1"}>Check out the team</h1>
            <TeamCards teamInfo={this.state.team} />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Team;
