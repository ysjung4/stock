import React from "react";

const Search = () => {
  return (
    <div id="search-box">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          name="search"
          id="search"
          placeholder="Search..."
        />
        <button className="btn btn-danger">Search</button>
      </div>
      <div className="input-group mb-3">
        <div className="custom-control custom-checkbox mr-sm-2">
          <input
            type="checkbox"
            className="custom-control-input"
            id="stock"
            name="stock"
          />
          <label className="custom-control-label" htmlFor="stock">
            Only show products in stock
          </label>
        </div>
      </div>
    </div>
  );
};

export default Search;
