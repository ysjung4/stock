import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Create from "./components/Create";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/add" component={Create} />
      </Switch>
    );
  }
}

export default App;
