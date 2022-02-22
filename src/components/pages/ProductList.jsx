import React from "react";
import Currency from "../elements/Currency";

function Product(props) {
  const { incCartQuant } = props;
  const { title, price, image } = props.product;

  return (
    <li className="flex flex-col gap-2 ">
      <h2 className="mx-auto font-enfasis font-extrabold text-lg">{title}</h2>
      <img src={image} alt={title} srcSet="" className={"w-full"} />
      <div className="text-center">
        <Currency>{price}</Currency>
      </div>
      <button className="btn btn-leaf" onClick={incCartQuant}>
        Agregar al carrito
      </button>
    </li>
  );
}

function ProductList(props) {
  const { all_products, incCartQuant, decCartQuant, handleDelete } = props;

  const renderProduct = (p) => {
    const { id } = p;
    return (
      <Product
        key={id}
        product={p}
        handleDelete={() => handleDelete(id)}
        incCartQuant={() => incCartQuant(id)}
        decCartQuant={() => decCartQuant(id)}
      />
    );
  };

  const product_list = all_products.map((p) => {
    return renderProduct(p);
  });

  return (
    <div className="container-res mx-auto mb-44">
      <h1 className="text-center font-display text-5xl font-extrabold capitalize ">
        productos
      </h1>
      <hr className="border-coral-400 border-2 my-12" />
      <ul className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
        {product_list}
      </ul>
    </div>
  );
}

export default ProductList;
