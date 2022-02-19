import React from "react";
import Currency from "../../elements/Currency";

function CartProduct(props) {
  const { total, incCartQuant, decCartQuant, handleDelete } = props;
  const { title, price, image } = props.product;

  return (
    <li className="flex flex-row justify-between gap-3">
      <button className="btn btn-coral" onClick={handleDelete}>
        <i className="fas fa-times"></i>
      </button>
      <h2 className="font-semibold">{title}</h2>
      <div className="font-thin">
        <Currency>{price}</Currency>
      </div>
      <div className="ml-auto flex flex-row gap-3">
        <button className="btn btn-coral" onClick={decCartQuant}>
          <i className="fas fa-minus"></i>
        </button>
        <span>{total}</span>
        <button className="btn btn-leaf" onClick={incCartQuant}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </li>
  );
}

export default CartProduct;
