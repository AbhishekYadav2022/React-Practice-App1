import React, { Component } from "react";
import Product from "./App_2";
import { products } from "./Seed";

class ProductList extends Component {
  render() {
    const myProducts = products.sort((a, b) => (
        b.vote - a.vote
        ));        

    const productComponents = myProducts.map((product) => (
      <Product
        key={"product-" + product.id}
        id={product.id}
        vote={product.vote}
        title={product.title}
        description={product.description}
      />
    ));

    return <>{productComponents}</>;
  }
}

export default ProductList;
