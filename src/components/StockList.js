import React from "react";
import StockItem from "./StockItem";

const renderData = props => {
  const { stocks, handleRemove } = props;
  return stocks.map(e => (
    <tr key={e.id}>
      <StockItem
        id={e.id}
        name={e.name}
        price={e.price}
        handleRemove={handleRemove}
      />
    </tr>
  ));
};

const StockList = props => {
  return (
    <>
      {renderData(props)

      /* <tr>
        <th colSpan={4} scope="row">
          Sporting Goods
        </th>
      </tr>
      <tr>
        <StockItem name="Football" price="49.99" />
      </tr>
      <tr>
        <StockItem name="Basketball" price="29.99" />
      </tr>
      <tr>
        <th colSpan={4} scope="row">
          Electronic
        </th>
      </tr>
      <tr>
        <StockItem name="ipodTouch" price="99.99" />
      </tr>
      <tr>
        <StockItem name="iphone 5" price="399.99" />
      </tr>
      <tr>
        <StockItem name="Nexus 7" price="199.99" />
      </tr> */
      }
    </>
  );
};

export default StockList;
