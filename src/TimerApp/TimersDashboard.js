import React, { Component } from "react";
import "./Timer.css";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

class TimersDashboard extends Component {
  render() {
    return (
      <>
        <div className="appName">
          <h1>Timers</h1>
        </div>
        <div className="main">
          <EditableTimerList />
          <ToggleableTimerForm isOpen={true} />
        </div>
      </>
    );
  }
}

export default TimersDashboard;
