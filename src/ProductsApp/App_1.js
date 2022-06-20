import React, { Component } from "react";
import Product from "./App_2";
import { products } from "./Seed";

class ProductList extends Component {
  handleProductUpVote(productId) {
    console.log(productId + " was upvoted.");
  }

  render() {
    const myProducts = products.sort((a, b) => b.vote - a.vote);

    const productComponents = myProducts.map((product) => (
      <Product
        key={"product-" + product.id}
        id={product.id}
        vote={product.vote}
        title={product.title}
        description={product.description}
        onVote={this.handleProductUpVote}
      />
    ));

    return <>{productComponents}</>;
  }
}

export default ProductList;
