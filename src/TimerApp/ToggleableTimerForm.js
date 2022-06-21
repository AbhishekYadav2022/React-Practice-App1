import React, { Component } from 'react'
import './Timer.css'
import add from '../images/add.svg'
import addPng from '../images/addPng.png'
import addRoundButton from '../images/addRoundButton.svg'

export class ToggleableTimerForm extends Component {
  render() {
    return (
      <div>
          <img className='plusIcon' src={addPng}  />
      </div>
    )
  }
}

export default ToggleableTimerForm