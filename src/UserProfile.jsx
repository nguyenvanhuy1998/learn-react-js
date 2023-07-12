import React, { useContext } from 'react'
import Profile from './Profile'
import { UserContext } from './User'

function UserProfile() {
  const { increaseAge } = useContext(UserContext)
  return (
    <div>
      <Profile />
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  )
}

export default UserProfile
