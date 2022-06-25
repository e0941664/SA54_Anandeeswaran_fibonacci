import React, { Component } from "react";
import { Button, ButtonGroup, Table, Container } from "reactstrap";
import { Row, Col, ListGroup } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class FibonacciComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    this.onfibanacciSubmitHandler = this.onfibanacciSubmitHandler.bind(this);
    this.onNumberChangeHandler = this.onNumberChangeHandler.bind(this);
  }

  async componentDidMount() {}

  onNumberChangeHandler(event) {
    this.setState({ number: event.target.value });
  }

  async onfibanacciSubmitHandler(event) {
    event.preventDefault();
    const finalnumber = this.state.number;
    let fibonacciSequence = [];
    let sortedfibonacciSequence = [];

    await fetch("/fibonacci/" + finalnumber, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(function (data) {
        fibonacciSequence = data.fibonacci;
        sortedfibonacciSequence = data.sorted;
      });

    console.log(fibonacciSequence);
    console.log(sortedfibonacciSequence);

    alert("Fibonacci Sequence: \n" + fibonacciSequence);
    alert("Sorted fibonacci Sequence: \n" + sortedfibonacciSequence);
    this.props.history.push("/fibonacci");
  }

  render() {
    return (
      <div>
        <Container>
          <form onSubmit={this.onfibanacciSubmitHandler}>
            <div>
              <div>
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
              <div>
                <Button color="primary" type="submit">
                  Print Fibonacci
                </Button>
              </div>
            </div>
          </form>
        </Container>
      </div>
    );
  }
}

export default FibonacciComponent;
