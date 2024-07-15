import React from "react";
import { Link } from "react-router-dom";
class Create extends React.Component {
  state = {
    category: "",
    name: "",
    price: "",
    stock: false
  };
  handleChange = e => {
    const { name } = e.target;
    let { value } = e.target;
    console.log(value);

    if (e.target.name === "stock") {
      value = e.target.checked;
    }

    if (name === "price") {
      if (!Number(value)) {
        return;
      }
    }
    this.setState({
      [name]: value
    });
  };
  handleClick = e => {
    e.preventDefault();
    console.log("create:", this.state);
    this.props.additem(this.state);
  };

  render() {
    const { category, name, price, stock } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <form
          className="form"
          style={{
            width: "600px",
            height: "600px"
          }}
        >
          <h1>Add Product</h1>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              onChange={this.handleChange}
              value={category}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              onChange={this.handleChange}
              value={price}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="stock"
              name="stock"
              checked={stock}
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="stock">
              Stocked
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            Add
          </button>
          <Link
            className="btn btn-success"
            to="/"
            style={{
              position: "fixed",
              marginRight: "15px"
            }}
          >
            <i className="fas fa-arrow-left"></i>
          </Link>
        </form>
      </div>
    );
  }
}

export default Create;
