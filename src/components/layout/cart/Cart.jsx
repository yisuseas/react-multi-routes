import React from "react";
import CartProduct from "./CartProduct";

/** Off-Canvas Sidebar.
 * Displays a list ot the products added to the cart with some functional buttons */
function Cart(props) {
  const { open, cart, all_products } = props;
  const { incCartQuant, decCartQuant, handleDelete } = props;

  const renderProduct = (id) => {
    return (
      <CartProduct
        key={id}
        title={all_products[id].title}
        price={all_products[id].price}
        total={cart[id]}
        handleDelete={() => handleDelete(id)}
        incCartQuant={() => incCartQuant(id)}
        decCartQuant={() => decCartQuant(id)}
      />
    );
  };

  const cart_list = [];
  for (const id in cart) {
    cart_list.push(renderProduct(id));
  }

  return (
    <div
      className={
        "flex flex-col z-[90] h-full px-8 pt-32 lg:pt-24 " +
        "bg-slate-50 w-full lg:max-w-md shadow-xl fixed " +
        "transition-all duration-500 " +
        (open ? "right-0 " : "right-[-100%] ")
      }
    >
      <h1 className="font-display text-3xl font-bold text-center">
        Carrito de Compras
      </h1>
      <hr className="my-8 border-red-500" />
      <ul className="flex flex-col gap-4">{cart_list}</ul>
    </div>
  );
}

export default Cart;
