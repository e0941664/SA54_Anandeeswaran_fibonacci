import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import FibonacciNumeric from "./FibonacciNumeric";
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
          <Route path="/fibonacci/1" exact={true} component={FibonacciComponent} />
          <Route path="/fibonacci/:fibnumber" exact={true} component={FibonacciComponent} />

          <Redirect to="/fibonacci/1" />
        </Switch>
      </div>
    );
  }
}

export default Main;
