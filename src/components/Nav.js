import React from "react";

class Nav extends React.Component {
  state = {};

  render() {
    return (
      <div id="search-box" className="d-flex justify-content-end mb-3">
        <button className="btn btn-info" onClick={this.handleClick}>
          Logout
        </button>
      </div>
    );
  }
}

export default Nav;
