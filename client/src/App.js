import React, { Component } from "react";
import "./App.css";
import Image from "./Image";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/images/:id" component={Image} />
          <Route path="/images" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
