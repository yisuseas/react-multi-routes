import React from "react";

import ContRes from "../elements/ContRes";

function ProductList(props) {
  const { incCartTotal, decCartTotal } = props;

  return (
    <ContRes>
      <h1>This is the product List</h1>
      <button className="btn btn-coral mr-2" onClick={() => decCartTotal()}>
        <i className="fas fa-minus"></i>
      </button>
      <button className="btn btn-leaf" onClick={() => incCartTotal()}>
        <i className="fas fa-plus"></i>
      </button>
    </ContRes>
  );
}

export default ProductList;
