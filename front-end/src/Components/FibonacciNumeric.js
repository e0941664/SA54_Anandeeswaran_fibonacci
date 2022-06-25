import React, { useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function FibonacciNumeric() {
  const [number, setNumber] = useState(1);

  const valueChangeHandler = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };

  const keyPressPreventHandler = (event) => {
    return false;
  };

  return (
    <div>
      <h2 className="text-center mb-3">Print Fibanacci upto: </h2>
      <hr></hr>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    step="1"
                    value={number}
                    onKeyPress={keyPressPreventHandler}
                    onChange={valueChangeHandler}
                  />
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <div>
      <Button color="primary" type="submit" >Print Fibonacci</Button>
      <Button color="success" tag={Link} to={"fibonacci/" + number}>Print Fibonacci</Button>
      </div>
    </div>
  );
}

export default FibonacciNumeric;
