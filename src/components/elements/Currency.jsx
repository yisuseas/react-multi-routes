import React from "react";

function Currency(props) {
  const { children } = props;
  const pesos = (children / 100).toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
  });

  return <span>{pesos}</span>;
}

export default Currency;
