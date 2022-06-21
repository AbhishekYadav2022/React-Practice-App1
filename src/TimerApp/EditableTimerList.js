import React, { Component } from "react";
import EditableTimer from "./EditableTimer";

export class EditableTimerList extends Component {
  render() {
    return (
      <div>
        <EditableTimer
          title="Mow the lawn"
          project="House Chores"
          time="01:30:56"
          elapsed="3890985"
          runningSince={null}
          editFormOpen={true}
        />
        <EditableTimer
          title="Learn React"
          project="Web Domination"
          time="01:14:10"
          elapsed="3890985"
          runningSince={null}
          editFormOpen={true}
        />
      </div>
    );
  }
}

export default EditableTimerList;
