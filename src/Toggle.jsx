import React, { Component } from 'react'

export default class Toggle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this) // Cach 1
  }
  //   handleClick() {
  //     this.setState((prevState) => ({
  //       isToggleOn: !prevState.isToggleOn
  //     }))
  //   }
  // Cach 2
  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render() {
    const { isToggleOn } = this.state
    return (
      <>
        <button onClick={this.handleClick}>{isToggleOn ? 'ON' : 'OFF'}</button>
      </>
    )
    // return <button onClick={() => this.handleClick()}>{isToggleOn ? 'ON' : 'OFF'}</button>
  }
}
