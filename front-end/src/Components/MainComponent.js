import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import FibonacciComponent from "./FibonacciComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/fibonacci" exact={true} component={FibonacciComponent} />
          <Route path="/fibonacci/:fibnumber" exact={true} component={FibonacciComponent} />

          <Redirect to="/fibonacci" />
        </Switch>
      </div>
    );
  }
}

export default Main;
