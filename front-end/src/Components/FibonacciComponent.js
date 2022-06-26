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
      if (i !== fibonacci.length - 1) {
        return <div key={i}>{number}, </div>;
      } else {
        return <div key={i}>{number}</div>;
      }
    });

    const sortedList = sorted.map((number, i) => {
      if (i !== sorted.length - 1) {
        return <div key={i}>{number}, </div>;
      } else {
        return <div key={i}>{number}</div>;
      }
    });

    return (
      <div>
        <Container className="mt-5">
          <form onSubmit={this.onfibanacciSubmitHandler}>
            <div className="float-end">
              <div className="float-end">
                <h4>Enter limit to get the fibonacci sequence: </h4>
              </div>
              <input
                type="number"
                min="1"
                max="100"
                step="1"
                value={this.state.number}
                onChange={this.onNumberChangeHandler}
              />
              <div className="float-end">
                <Button color="primary" type="submit">
                  Print Fibonacci
                </Button>
              </div>
            </div>
          </form>
          <br />
          <br />
          <div style={{ display: "inline-block" }}>
            <div
              style={{
                display: "inline-block",
                paddingRight: "300px",
                paddingLeft: "100px",
              }}
            >
              Fibonacci List: [{fibList}]
            </div>
            <div style={{ display: "inline-block" }}>
              Sorted List: [{sortedList}]
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default FibonacciComponent;
