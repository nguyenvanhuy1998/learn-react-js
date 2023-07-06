import React, { Component } from 'react'

const list = ['BMW', 'Toyota', 'Honda']
const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(list)
    }, 1000)
  })
}
export default class Clock extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      list: [],
      darkMode: false
    }
    this.getTime = this.getTime.bind(this)
  }
  componentDidMount() {
    console.log('componentDidMount')
    // Truy cập đến DOM node
    const seconds = document.getElementById('seconds')
    // Call API
    fetchApi().then((res) => {
      this.setState((prevState) => ({
        ...prevState,
        list: res
      }))
    })
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
    if (this.state.darkMode) {
      const value = document.querySelector('input').value
      console.log('Value in Input', value)
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  getTime() {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.setState(newState)
  }
  toggleDarkMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }))
  }
  render() {
    console.log('render')

    const { time, seconds, darkMode } = this.state
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {time.created}</h2>
        <h3 id='seconds'>Seconds: {seconds.created}</h3>
        <button onClick={this.getTime}>Get Time</button>
        <button onClick={this.toggleDarkMode}>Toggle</button>
        {darkMode && <input type='text' name='' id='' value={darkMode} />}
      </div>
    )
  }
}
