import React from "react";
import { Outlet } from "react-router-dom";

function BlogWrapper() {
  return (
    <>
      <h1>This is the blog wrapper, and that is the child:</h1>
      <hr />
      <Outlet />
    </>
  );
}

export default BlogWrapper;
