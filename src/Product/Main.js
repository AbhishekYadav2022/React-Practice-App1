import React from "react";
import Products2 from "./Products";

function Main() {
  const products = [
    {
      id: 1,
      title: "Yellow Pail",
      description: "On-demand sand castle construction expertise.",
      url: "#",
    },
  ];
  const product = products[0];
  return (
    <div>
      <Products2 id={product.id} title={product.title} description={product.description} url={product.url}/>
    </div>
  );
}

export default Main;