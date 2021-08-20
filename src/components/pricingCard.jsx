import React, { Component, Fragment } from "react";

// Simple Component
const SectionText = () => {
  return (
    <Fragment>
      <h1 className="display-1 text-center pt-5">What you'll get...</h1>
      <div className="p-3 pb-md-4 mx-auto text-center">
        <p className={"text-muted fs-5"} id={"pricing-card-text"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          consequuntur dolor doloremque ducimus ea harum ipsam iure modi
          molestiae natus nulla numquam perferendis, placeat, quae reprehenderit
          similique tempora vel vitae!
        </p>
      </div>
    </Fragment>
  );
};

const PricingCards = (props) => {
  let buttonPress = () => {
    window.alert("Hello World");
  };

  return (
    <Fragment>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 shadow-sm">
            <div className="card-header py-3">
              <h4 className={"my-0 fw-normal"}>Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title">
                R0<small className={"text-muted fw-light"}>/p.m</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-primary p-3"
                onClick={() => buttonPress()}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 shadow">
            <div className="card-header py-3">
              <h4 className={"my-0 fw-normal"}>Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title">
                R200
                <small className={"text-muted fw-light"}>/p.m</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className={props.btnColorChange}
                onClick={props.button}
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 shadow border-primary">
            <div className="card-header py-3 bg-primary">
              <h4 className={"my-0 fw-normal text-white"}>Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title">
                R0<small className={"text-muted fw-light"}>/p.m</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-primary p-3"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const Table = (props) => {
  const planInfo = props.info.map((row) => {
    return (
      <tr key={row.id}>
        <th scope="row" className={"text-start"}>
          {row.name}
        </th>
      </tr>
    );
  });

  const planCat = props.cat.map((row) => {
    return <th key={row.id}>{row.category}</th>;
  });

  return (
    <Fragment>
      <h1 className={"text-center display-4 pt-4"}>Compare Plan</h1>
      <div className="table-responsive pt-5 pb-3">
        <table className={"table text-center"}>
          <thead>
            <tr>
              <th />
              {planCat}
            </tr>
          </thead>
          <tbody>{planInfo}</tbody>
        </table>
      </div>
    </Fragment>
  );
};
// Class Component
class PricingCard extends Component {
  state = {
    random: "Wassup coder!",
    text: {},
    planDescription: [
      {
        id: 1,
        name: "Public",
      },
      {
        id: 2,
        name: "Private",
      },
      {
        id: 3,
        name: "Permission",
      },
      {
        id: 4,
        name: "Sharing",
      },
      {
        id: 5,
        name: "Unlimited members",
      },
      {
        id: 6,
        name: "Extra security",
      },
    ],
    planCategory: [
      {
        id: 1,
        category: "Free",
      },
      {
        id: 2,
        category: "Pro",
      },
      {
        id: 3,
        category: "Enterprise",
      },
    ],
  };

  Hello = () => {
    let { random } = this.state;
    this.setState({ random: null });
    if (random == null) return window.alert("This variable is empty");
    else return window.alert(random);
  };

  changeButtonColor = () => {
    let btnColor = "p-3 w-100 btn btn-lg btn-";
    if (this.state.random == null) btnColor += "primary";
    else btnColor += "secondary";
    return btnColor;
  };

  render() {
    return (
      <Fragment>
        {/*Cards*/}
        <section id={"cards"} className={"container px-5 py-5"}>
          <div className="container">
            <SectionText />
            <PricingCards
              button={this.Hello}
              btnColorChange={this.changeButtonColor()}
            />
            <Table
              info={this.state.planDescription}
              cat={this.state.planCategory}
            />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default PricingCard;
