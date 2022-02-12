import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/Footer";
import { Home, About, ProductList } from "./pages";
import { Blog } from "./pages/blog";

function App() {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    console.log("useEffect was called");
  });

  const incCartTotal = () => {
    setCartTotal(cartTotal + 1);
  };

  const decCartTotal = () => {
    if (cartTotal > 0) {
      setCartTotal(cartTotal - 1);
    }
  };

  return (
    <Fragment>
      <Navbar cartTotal={cartTotal} />
      <main className="w-full mt-32 md:mt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="products"
            element={
              <ProductList
                incCartTotal={() => incCartTotal()}
                decCartTotal={() => decCartTotal()}
              />
            }
          />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
