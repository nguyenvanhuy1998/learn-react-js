import React, { useState } from 'react'

const initialAddress = () => {
  console.log('initialAddress')
  return {
    nation: 'Vietnam',
    city: {
      street: '200 Dien Bien Phu, Da Nang',
      house: 'Building'
    }
  }
}

function User() {
  const [firstName] = useState('Alex')
  const [age, setAge] = useState(24)
  const [address, setAddress] = useState(initialAddress)
  const [, forceRerender] = useState(0)

  const changeStreet = () => {
    // Cach 1
    // setAddress({
    //   nation: 'Vietnam',
    //   city: 'Hanoi'
    // })
    // Cach 2
    // setAddress((prevState) => ({ ...prevState, city: 'Hanoi' }))

    setAddress((prevState) => {
      const newCity = { ...prevState.city }
      newCity.street = '100 Dien Bien Phu, Da Nang'
      return {
        ...prevState,
        city: newCity
      }
    })
  }
  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1)
  }
  const reRender = () => forceRerender((prevState) => prevState + 1)
  console.log('Re-render')
  return (
    <div>
      <h1>User Functional Component</h1>
      <ul>
        <li>First Name: {firstName}</li>
        <li>Age: {age}</li>
        <li>Nation: {address.nation}</li>
        <li>Street: {address.city.street}</li>
        <li>House: {address.city.house}</li>
      </ul>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={reRender}>Rerender</button>
      <button onClick={changeStreet}>Change Street</button>
    </div>
  )
}

export default User
