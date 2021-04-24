import React from "react";
import Item from "../components/Item";

function List({ items }) {
  return (
    <div className="List">
      {items.map((itemDetails, index) => (
        <Item itemDetails={itemDetails} key={index}></Item>
      ))}
    </div>
  );
}

export default List;
