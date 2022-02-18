import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/Footer";
import { Home, About, ProductList } from "./pages";
import { Blog } from "./pages/blog";
import BackToTop from "./layout/BackToTop";
import Cart from "./layout/cart/Cart";

function App() {
  const [cart, setCart] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  const all_products = {
    0: {
      title: "product zero",
      price: "0001",
    },
    1: {
      title: "product one",
      price: "1000",
    },
    2: {
      title: "product two",
      price: "2000",
    },
    3: {
      title: "product three",
      price: "3000",
    },
    4: {
      title: "product four",
      price: "4000",
    },
  };

  const incCartQuant = (id) => {
    const cart_copy = { ...cart };
    if (id in cart_copy) {
      cart_copy[id] += 1;
    } else {
      cart_copy[id] = 1;
    }
    setCart(cart_copy);
    setCartTotal(cartTotal + 1);
  };

  const decCartQuant = (id) => {
    if (id in cart) {
      const cart_copy = { ...cart };
      if (cart_copy[id] > 1) {
        cart_copy[id] -= 1;
      } else {
        delete cart_copy[id];
      }
      setCart(cart_copy);
      setCartTotal(cartTotal - 1);
    }
  };

  const handleDelete = (id) => {
    if (id in cart) {
      const cart_copy = { ...cart };
      const quant = cart_copy[id];
      delete cart_copy[id];
      setCart(cart_copy);
      setCartTotal(cartTotal - quant);
    }
  };

  const [cartSideBar, setCartSideBar] = useState(false);

  const toggleCartSideBar = () => {
    setCartSideBar(!cartSideBar);
  };

  const closeCartSideBar = () => {
    setCartSideBar(false);
  };

  return (
    <Fragment>
      <Navbar
        cartTotal={cartTotal}
        toggleCartSideBar={() => toggleCartSideBar()}
        closeCartSideBar={() => closeCartSideBar()}
      />
      <main className="w-full mt-32 lg:mt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="products"
            element={
              <ProductList
                all_products={all_products}
                handleDelete={(id) => handleDelete(id)}
                incCartQuant={(id) => incCartQuant(id)}
                decCartQuant={(id) => decCartQuant(id)}
                cart={cart}
              />
            }
          />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </main>
      <Cart
        open={cartSideBar}
        cart={cart}
        all_products={all_products}
        handleDelete={(id) => handleDelete(id)}
        incCartQuant={(id) => incCartQuant(id)}
        decCartQuant={(id) => decCartQuant(id)}
      />
      <BackToTop />
      <Footer />
    </Fragment>
  );
}

export default App;
