import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import Content from "./Content";
import Footer from "./Footer";
import Add from "./Add";

import Nav from "./Nav";

class Main extends Component {
  render() {
    const {
      stocks,
      category,
      handleSearch,
      handleSelect,
      handleStocked,
      handleRemove
    } = this.props;
    return (
      <div>
        <div className="container-fluid header mb-3">
          <Header />
        </div>
        {/* <Login /> */}

        <div className="container">
          <Nav />
          <Search
            category={category}
            handleSearch={handleSearch}
            handleStocked={handleStocked}
            handleSelect={handleSelect}
          />

          <Add additem={this.additem} />
          <Content stocks={stocks} handleRemove={handleRemove} />
        </div>
        <div className="container-fluid footer mb-3">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
