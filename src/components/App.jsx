import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import Navbar from "./layout/navbar/Navbar";
import BackToTop from "./layout/BackToTop";
import Cart from "./layout/cart/Cart";
import Footer from "./layout/Footer";

import { products } from "../test_response/products";
import LoadingSign from "./elements/LoadingSign";

import Home from "./pages/Home";
const About = React.lazy(() => import("./pages/About"));
const ProductList = React.lazy(() => import("./pages/ProductList"));
const BlogWrapper = React.lazy(() => import("./pages/blog/BlogWrapper"));
const Blog = React.lazy(() => import("./pages/blog/Blog"));
const Post = React.lazy(() => import("./pages/blog/Post"));

function App() {
  const [cart, setCart] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

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
          <Route
            path="about"
            element={
              <React.Suspense fallback={<LoadingSign />}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="products"
            element={
              <React.Suspense fallback={<LoadingSign />}>
                <ProductList
                  all_products={products}
                  handleDelete={(id) => handleDelete(id)}
                  incCartQuant={(id) => incCartQuant(id)}
                  decCartQuant={(id) => decCartQuant(id)}
                  cart={cart}
                />
              </React.Suspense>
            }
          />
          <Route
            path="blog"
            element={
              <React.Suspense fallback={<LoadingSign />}>
                <BlogWrapper />
              </React.Suspense>
            }
          >
            <Route
              path=""
              element={
                <React.Suspense fallback={<LoadingSign />}>
                  <Blog />
                </React.Suspense>
              }
            />
            <Route
              path=":postSlug"
              element={
                <React.Suspense fallback={<LoadingSign />}>
                  <Post />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </main>
      <Cart
        open={cartSideBar}
        cart={cart}
        all_products={products}
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
