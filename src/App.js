import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
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
    //TODO: stocked data from create.js
    //TODO: category dropbox fixing
    data.id = this.state.stocks.length + 1;
    data.price = "$" + data.price;
    data.removed = false;
    data.stocked = data.stock;
    this.setState({
      stocks: [...this.state.stocks, data],
      category: this.getCategory([...this.state.stocks, data]),
    });
  };

  /*  const newItem = [];
    data.forEach(e => {
      newItem.push(e.newItem);
    });
  };
*/
  componentDidMount() {
    console.log("componentDidMount : ", data);
    this.setState({
      stocks: data,
      category: this.getCategory(data),
    });
  }

  handleStocked = (isStock) => {
    // TODO: this works partially, make it work perfectly.
    this.setState({
      stocks: isStock ? data.filter((e) => e.stocked === isStock) : data,
    });
  };

  handleSelect = (category) => {
    // TODO: this works partially, make it work perfectly.
    this.setState({
      stocks:
        category !== "All" ? data.filter((e) => e.category === category) : data,
    });
  };

  handleSearch = (filteredData) => {
    console.log(filteredData);
    if (filteredData !== "") {
      // null, undefined, ""
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
    console.log(stocks);
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            isLogin ? (
              <Main
                stocks={stocks}
                category={category}
                handleSearch={this.handleSearch}
                handleSelect={this.handleSelect}
                handleStocked={this.handleStocked}
                handleRemove={this.handleRemove}
              />
            ) : (
              <Login />
            )
          }
        />
        <Route path="/add" render={() => <Create additem={this.additem} />} />
      </Switch>
    );
  }
}

export default App;
