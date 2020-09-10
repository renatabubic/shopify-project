import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/images" component={App} />
      </Switch>
    );
  }
}

export default Routes;
