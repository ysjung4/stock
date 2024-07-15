import React from "react";
import StockList from "./StockList";

const content = props => {
  const { stocks, handleRemove } = props;
  return (
    <div id="result">
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col" />
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <StockList stocks={stocks} handleRemove={handleRemove} />
        </tbody>
      </table>
    </div>
  );
};

export default content;
