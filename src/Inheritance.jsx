import React, { Component } from 'react'

class Button extends Component {
  handleClick = (event) => {
    console.log(event)
  }
  render() {
    return (
      <button className='btn' onClick={this.handleClick}>
        Button
      </button>
    )
  }
}
class YellowButton extends Button {
  render() {
    return (
      <button className='btn btn-yellow' onClick={this.handleClick}>
        Yellow Button
      </button>
    )
  }
}
export default class Inheritance extends Component {
  render() {
    return (
      <div>
        Inheritance
        <YellowButton />
      </div>
    )
  }
}
