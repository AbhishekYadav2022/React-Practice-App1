import React, { Component } from "react";
import "./TextMessage.css";

export class TextMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "This is default message",
    };
  }
  onChangeHandler = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  onClickHandler = () => {
    console.log("Hello World")
  }
  render() {
    return (
      <>
        <div>
          <textarea
            value={this.state.message}
            onChange={this.onChangeHandler}
          />
        </div>
        <h3 id="heading"></h3>
        <button onClick={this.onClickHandler}>Click Me</button>
      </>
    );
  }
}

export default TextMessage;
