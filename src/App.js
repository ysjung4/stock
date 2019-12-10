import React, { Component } from "react";
import data from "./utils/db";
import Header from "./components/Header";
import Search from "./components/Search";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Add from "./components/Add";

class App extends Component {
  state = {
    stocks: []
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

    return (
      <div>
        <div className="container-fluid header mb-3">
          <Header />
        </div>
        <div className="container">
          <Search />
          <Add />
          <Content stocks={this.state.stocks} />
        </div>
        <div className="container-fluid footer mb-3">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
