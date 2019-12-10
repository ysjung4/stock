import React from "react";

const handleClick = () => {
  console.log("clicked this item");
};

const StockItem = props => {
  // const name = props.name;
  // const price = props.price;
  const { name, price } = props;
  return (
    <>
      <th scope="row">
        <input type="checkbox" className="input-control" name="stock" />
      </th>
      <td>{name}</td>
      <td>${price}</td>
      <td>
        <i className="fas fa-edit" onClick={handleClick} />
        &nbsp;
        <i className="far fa-trash-alt" />
      </td>
    </>
  );
};

export default StockItem;
