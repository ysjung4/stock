import React from "react";
import StockItem from "./StockItem";

const renderData = data => {
  return data.map(e => (
    <tr>
      <StockItem name={e.name} price={e.price} />
    </tr>
  ));
};

const StockList = ({ stocks }) => {
  return (
    <>
      {renderData(stocks)

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
