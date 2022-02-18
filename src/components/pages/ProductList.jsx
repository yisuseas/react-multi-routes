import React from "react";
import Currency from "../elements/Currency";

function Product(props) {
  const { title, price, total, incCartQuant, decCartQuant, handleDelete } =
    props;

  return (
    <li className="flex flex-row gap-4">
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

function ProductList(props) {
  const { all_products, cart, incCartQuant, decCartQuant, handleDelete } =
    props;

  const renderProduct = (id) => {
    const t = id in cart ? cart[id] : 0;

    return (
      <Product
        key={id}
        title={all_products[id].title}
        price={all_products[id].price}
        total={t}
        handleDelete={() => handleDelete(id)}
        incCartQuant={() => incCartQuant(id)}
        decCartQuant={() => decCartQuant(id)}
      />
    );
  };

  const product_list = [];
  for (const id in all_products) {
    product_list.push(renderProduct(id));
  }

  return (
    <div className="container-res mx-auto">
      <h1 className="text-center ">This is the product List</h1>
      <ul className="flex flex-col gap-4">{product_list}</ul>
    </div>
  );
}

export default ProductList;
