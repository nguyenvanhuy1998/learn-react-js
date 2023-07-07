import React, { Component } from 'react'

export default class Reservation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
  }
  handleInputChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }
  render() {
    const { isGoing, numberOfGuests } = this.state
    return (
      <form>
        <label>
          Is going:
          <input type='checkbox' name='isGoing' checked={isGoing} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input type='number' name='numberOfGuests' value={numberOfGuests} onChange={this.handleInputChange} />
        </label>
      </form>
    )
  }
}
