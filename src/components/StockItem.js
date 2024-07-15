import React from "react";
import * as validate from "./Validate";
class StockItem extends React.Component {
  // const name = props.name;
  // const price = props.price;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    isReadOnly: false,
    name: this.props.name,
    price: this.props.price
  };

  handleClick() {
    console.log(this.state.isReadOnly);
    this.setState({
      isReadOnly: !this.state.isReadOnly
    });
  }

  handleRemove = id => {
    this.props.handleRemove(id);
  };

  handleChange = e => {
    console.log(e.target.name + ", " + e.target.value);
    const { name, value } = e.target;
    switch (name) {
      case "name":
        this.setState({
          [name]: value
        });
        break;
      case "price":
        if (validate.isValidate(value)) {
          this.setState({
            [name]: "$" + Math.round(Number(value.substr(1)) * 100) / 100
          });
        }
        break;
      default:
    }
  };

  render() {
    const { id } = this.props;
    const { isReadOnly, name, price } = this.state;
    console.log(isReadOnly);
    console.log(this.state);
    return (
      <>
        <th scope="row">
          <input type="checkbox" className="input-control" name="stock" />
        </th>
        {!isReadOnly ? (
          <>
            <td>{name}</td>

            <td>{price}</td>
          </>
        ) : (
          <>
            <td>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="price"
                value={price}
                onChange={this.handleChange}
              />
            </td>
          </>
        )}
        <td>
          <i className="fas fa-edit" onClick={this.handleClick} />
          &nbsp;
          <i
            className="far fa-trash-alt"
            onClick={() => this.handleRemove(id)}
          />
        </td>
      </>
    );
  }
}

export default StockItem;
