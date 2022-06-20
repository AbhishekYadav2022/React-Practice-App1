import React, { Component } from "react";
import "./App_2.css";
import upvote from "../images/upvote.svg";

class Product extends Component {
  render(props) {
    return (
      <div className="item">
        <div className="description">
          <a>{this.props.title}</a>
          <p>
            <img className="upvote" src={upvote} /> {this.props.vote}
          </p>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Product;
