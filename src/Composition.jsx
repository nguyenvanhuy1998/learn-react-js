import React, { Component } from 'react'

class Button extends Component {
  handleClick = (event) => {
    console.log('event', event)
  }
  render() {
    const { className, name } = this.props
    return (
      <button className={`btn ${className}`} onClick={this.handleClick}>
        {name} Button
      </button>
    )
  }
}
class Layout extends Component {
  render() {
    const { left, right } = this.props
    return (
      <div className='layout'>
        <div className='layout-left'>{left}</div>
        <div className='layout-right'>{right}</div>
      </div>
    )
  }
}

export default class Composition extends Component {
  render() {
    return (
      <div>
        Composition
        <Button name='Yellow' className='btn-yellow' />
        <Layout
          left={<Button name='Green' className='btn-green' />}
          right={<Button name='Red' className='btn-red' />}
        />
      </div>
    )
  }
}
