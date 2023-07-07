import React, { Component } from 'react'
import Greeting from './Greeting'

export default class LoginControl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }
  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }
  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    })
  }
  render() {
    const { isLoggedIn } = this.state
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        <div>
          The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
        {button}
      </div>
    )
  }
}

function LoginButton({ onClick }) {
  return <button onClick={onClick}>Login</button>
}
function LogoutButton({ onClick }) {
  return <button onClick={onClick}>Logout</button>
}
