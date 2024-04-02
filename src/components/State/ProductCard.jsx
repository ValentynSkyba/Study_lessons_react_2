import React from "react";
import s from "./Products.module.css";

export const ProductCard = ({ item, handleAddToCart }) => {
  return (
    <li className={s.card}>
      <img src={item.thumbnail} />
      <div className={s.content}>
        <h2>{item.title}</h2>
        <div>
          <span>{item.price}$</span>
          <button onClick={() => handleAddToCart(item)}>Add to card</button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
