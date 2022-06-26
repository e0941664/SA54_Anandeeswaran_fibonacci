import React, { Component } from "react";
import { Button, Container } from "reactstrap";

class FibonacciComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      fibonacci: [],
      sorted: [],
      isSubmitted: false,
    };
    this.onfibanacciSubmitHandler = this.onfibanacciSubmitHandler.bind(this);
    this.onNumberChangeHandler = this.onNumberChangeHandler.bind(this);
  }

  onNumberChangeHandler(event) {
    this.setState({ number: event.target.value });
  }

  async onfibanacciSubmitHandler(event) {
    event.preventDefault();
    const finalnumber = this.state.number;
    const response = await (
      await fetch("/fibonacci/" + finalnumber, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
    ).json();
    this.setState({ isSubmitted: true });
    this.state.fibonacci = response.fibonacci;
    this.state.sorted = response.sorted;
  }

  render() {
    const { fibonacci, sorted, isSubmitted } = this.state;
    const fibList = fibonacci.map((number, i) => {
      return (
        <div
          key={i}
          className=" rounded-10 mb-7 block-example border border-green"
          style={{ textAlign: "center" }}
        >
          {number}{" "}
        </div>
      );
    });

    const sortedList = sorted.map((number, i) => {
      return (
        <div
          key={i}
          className="rounded-10 mb-7 block-example border border-green"
          style={{ textAlign: "center" }}
        >
          {number}{" "}
        </div>
      );
    });

    return (
      <div>
        <Container className="p-3 mb-7 mt-3 bg-info text-dark">
          <form onSubmit={this.onfibanacciSubmitHandler}>
            <div>
              <div
                style={{
                  paddingTop: "50px",
                  paddingBottom: "50px",
                  textAlign: "left",
                }}
              >
                <h4>ENTER LIMIT TO GET FIBONACCI SEQUENCE </h4>
              </div>
              <div className="row">
                <div
                  className="form-outline col-md-3 col-md-offset-2"
                  style={{ display: "inline-block" }}
                >
                  <input
                    className="form-control"
                    id="typeNumber"
                    type="number"
                    min="1"
                    max="100"
                    step="1"
                    value={this.state.number}
                    onChange={this.onNumberChangeHandler}
                  />
                </div>
                <div
                  className="form-outline col-md-2 col-md-offset-3"
                  style={{ display: "inline-block" }}
                >
                  <Button color="success" type="submit">
                    Print Fibonacci
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Container>
        <br />
        <br />
        <div>
          <Container>
            <div style={{ display: "inline-block", fontWeight: "bold" }}>
              <div
                style={{
                  paddingRight: "300px",
                  paddingLeft: "100px",
                  paddingBottom: "10px",
                  fontSize: "1.7rem",
                }}
              >
                FIBONACCI LIST
              </div>
              <div
                style={{
                  paddingRight: "300px",
                  paddingLeft: "100px",
                  paddingBottom: "20px",
                }}
              >
                {fibList}
              </div>
            </div>
            <div style={{ display: "inline-block", fontWeight: "bold" }}>
              <div style={{ paddingBottom: "10px", fontSize: "1.7rem" }}>
                SORTED LIST
              </div>
              <div style={{ paddingBottom: "20px" }}>{sortedList}</div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default FibonacciComponent;
