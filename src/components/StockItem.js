import React from "react";
import { Link } from "react-router-dom";

class StockItem extends React.Component {
  // const name = props.name;
  // const price = props.price;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
  }

  handleRemove = id => {
    this.props.handleRemove(id);
  };

  render() {
    const { id, name, price } = this.props;
    return (
      <>
        <th scope="row">
          <input type="checkbox" className="input-control" name="stock" />
        </th>

        <td>{name}</td>

        <td>{price}</td>
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
