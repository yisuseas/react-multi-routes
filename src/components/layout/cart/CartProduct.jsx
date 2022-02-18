import React from "react";
import Currency from "../../elements/Currency";

function CartProduct(props) {
  const { title, price, total } = props;
  const { incCartQuant, decCartQuant, handleDelete } = props;

  return (
    <li className="flex flex-row justify-between">
      <button className="btn btn-coral" onClick={handleDelete}>
        <i className="fas fa-times"></i>
      </button>
      <h2>{title}</h2>
      <Currency>{price}</Currency>
      <button className="btn btn-coral" onClick={decCartQuant}>
        <i className="fas fa-minus"></i>
      </button>
      <span>{total}</span>
      <button className="btn btn-leaf" onClick={incCartQuant}>
        <i className="fas fa-plus"></i>
      </button>
    </li>
  );
}

export default CartProduct;
