import React from "react";
import LoadingSign from "../../elements/LoadingSign";
import Carousel from "./carousel/Carousel";

function Home() {
  return (
    <>
      <Carousel />
      <div className="container-res mx-auto">
        <h1>This is Home</h1>
        <LoadingSign />
      </div>
    </>
  );
}

export default Home;
