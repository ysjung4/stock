import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    stock: false,
    category: ""
  };

  handleChange = e => {
    let value = e.target.value;
    console.log(value);
    if (e.target.name === "stock") {
      value = e.target.checked;
      this.props.handleStocked(value);
    } else {
      // TODO : makes if condition dynamic - 2020-01-15
      if (this.props.category.includes(value) || value === "All") {
        console.log("category:", value);
        this.props.handleSelect(value);
      } else if (Boolean(value)) {
        this.props.handleSearch(value);
      } else {
        this.props.handleSearch("");
      }
    }
    this.setState({
      [e.target.name]: value
    });
  };

  handleClick = e => {
    console.log(this.state.search);
    this.props.handleSearch(this.state.search);
  };

  render() {
    console.log(this.state);
    const { category } = this.props;
    // const { filteredList } = name.filter(name => {
    //   return name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    // });

    return (
      <div id="search-box">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="search"
            id="search"
            placeholder="Search..."
            onChange={this.handleChange}
          />
          <button className="btn btn-danger" onClick={this.handleClick}>
            Search
          </button>
        </div>
        <div className="input-group mb-3">
          <div className="custom-control custom-checkbox mr-sm-2">
            <input
              type="checkbox"
              className="custom-control-input"
              id="stock"
              name="stock"
              checked={this.state.stock}
              onChange={this.handleChange}
            />
            <label className="custom-control-label" htmlFor="stock">
              Only show products in stock
            </label>
          </div>
        </div>
        <div className="input-group mb-3">
          <select id="category" name="category" onChange={this.handleChange}>
            <option key={"All"} value="All">
              All
            </option>
            {category.map(e => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="row">
          {filteredList.map(name => {
            return this.name(name);
          })}
        </div> */}
      </div>
    );
  }
}

export default Search;
