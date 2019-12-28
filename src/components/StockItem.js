import React from "react";
import { Link } from "react-router-dom";

class StockItem extends React.Component {
  // const name = props.name;
  // const price = props.price;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    isReadOnly: false
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

  render() {
    const { id, name, price } = this.props;
    const { isReadOnly } = this.state;
    console.log(isReadOnly);
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
              <input type="text" value={name} />
            </td>
            <td>
              <input type="text" value={price} />
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
