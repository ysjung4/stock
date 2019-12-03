import React, { Component } from "react";
import data from "./utils/db";

class App extends Component {
  state = {
    stock: []
  };

  componentDidMount() {
    console.log("componentDidMount : ", data);
    this.setState({
      stocks: data
    });
  }

  render() {
    console.log("render");
    console.log("my stocks : ", this.state.stocks);
    return <div>App</div>;
  }
}

export default App;
