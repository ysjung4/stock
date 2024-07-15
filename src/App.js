import React, { Component } from "react";
import { Route } from "react-router-dom";
import data from "./utils/db";
import Main from "./components/Main";
import Create from "./components/Create";
import Login from "./components/Login";

class App extends Component {
  state = {
    isLogin: true,
    stocks: [],
    category: [],
  };

  getCategory = (data) => {
    const category = [];
    data.forEach((e) => {
      category.push(e.category);
    });
    return Array.from(new Set(category));
  };

  additem = (data) => {
    data.id = this.state.stocks.length + 1;
    data.price = "$" + data.price;
    data.removed = false;
    data.stocked = data.stock;
    this.setState({
      stocks: [...this.state.stocks, data],
      category: this.getCategory([...this.state.stocks, data]),
    });
  };

  componentDidMount() {
    console.log("componentDidMount : ", data);
    this.setState({
      stocks: data,
      category: this.getCategory(data),
    });
  }

  handleStocked = (isStock) => {
    this.setState({
      stocks: isStock ? data.filter((e) => e.stocked === isStock) : data,
    });
  };

  handleSelect = (category) => {
    this.setState({
      stocks:
          category !== "All" ? data.filter((e) => e.category === category) : data,
    });
  };

  handleSearch = (filteredData) => {
    if (filteredData !== "") {
      this.setState({
        stocks: this.state.stocks.filter(
            (e) => e.name.indexOf(filteredData) !== -1
        ),
      });
    } else {
      this.setState({
        stocks: data,
      });
    }
  };

  handleRemove = (id) => {
    this.setState({
      stocks: this.state.stocks.filter((stock) => stock.id !== id),
    });
  };

  render() {
    const { isLogin, stocks, category } = this.state;
    return (
        <Main
            stocks={stocks}
            category={category}
            handleSearch={this.handleSearch}
            handleSelect={this.handleSelect}
            handleStocked={this.handleStocked}
            handleRemove={this.handleRemove}
        />

    );

  }
}

export default App;
