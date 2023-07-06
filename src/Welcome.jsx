import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    const { name, age } = this.props
    return (
      <div>
        <h1>Hello, {name} </h1>
        <h2>You are {age}</h2>
      </div>
    )
  }
}
