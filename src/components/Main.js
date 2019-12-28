import React, { Component } from "react";
import data from "../utils/db";
import Header from "./Header";
import Search from "./Search";
import Content from "./Content";
import Footer from "./Footer";
import Add from "./Add";

class Main extends Component {
  state = {
    stocks: [],
    category: []
  };

  getCategory = data => {
    const category = [];
    data.forEach(e => {
      category.push(e.category);
    });
    return Array.from(new Set(category));
  };

  componentDidMount() {
    console.log("componentDidMount : ", data);
    this.setState({
      stocks: data,
      category: this.getCategory(data)
    });
  }

  handleRemove = id => {
    this.setState({
      stocks: this.state.stocks.filter(stock => stock.id !== id)
    });
  };

  render() {
    console.log("render");
    console.log("my stocks : ", this.state.stocks);
    const { stocks, category } = this.state;
    console.log("category", category);
    return (
      <div>
        <div className="container-fluid header mb-3">
          <Header />
        </div>
        <div className="container">
          <Search category={category} />
          <Add />
          <Content stocks={stocks} handleRemove={this.handleRemove} />
        </div>
        <div className="container-fluid footer mb-3">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
