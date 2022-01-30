import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Home, About } from "./pages";
import { Blog } from "./pages/blog";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container mx-auto my-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
