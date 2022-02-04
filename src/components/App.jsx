import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/Footer";
import { Home, About } from "./pages";
import { Blog } from "./pages/blog";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="w-full mt-32 md:mt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
