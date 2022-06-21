import React, { Component } from "react";
import TrashGif from "../images/trash_gif.gif";
import Trash from "../images/trash.svg";
import Edit from "../images/edit.svg";

export class EditableTimer extends Component {
  render(props) {
    return (
      <>
        <div className="card">
          <div className="content">
            <h2>{this.props.title}</h2>
            <h3>{this.props.project}</h3>
            <p className="time">{this.props.time}</p>
            <div className="icons">
              <img src={Trash} />
              <img src={Edit} />
            </div>
          </div>
          <button>Start</button>
        </div>
      </>
    );
  }
}

export default EditableTimer;
