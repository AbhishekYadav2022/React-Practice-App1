import React, { Component } from "react";
import "./App_2.css";
import upvote from "../images/upvote.svg";

class Product extends Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    this.props.onVote(this.props.id);
  }

  render(props) {
    return (
      <div className="item">
        <div className="description">
          <a>{this.props.title}</a>
          <p>
            <img onClick={this.handleUpVote} className="upvote" src={upvote} />{" "}
            {this.props.vote}
          </p>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Product;
