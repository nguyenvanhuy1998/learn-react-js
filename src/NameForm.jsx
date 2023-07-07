import React, { useState } from 'react'

export default function NameForm() {
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('grapefruit')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
    console.log(value2)
    console.log(value3)
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleChangeArea = (e) => {
    setValue2(e.target.value)
  }
  const handleChangeSelected = (e) => {
    setValue3(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={value} onChange={handleChange} />
      </label>
      <textarea value={value2} onChange={handleChangeArea}>
        Hello there, this is some text in a text area
      </textarea>
      <select value={value3} onChange={handleChangeSelected}>
        <option value='grapefruit'>Grapefruit</option>
        <option value='lime'>Lime</option>
        <option value='coconut'>Coconut</option>
        <option value='mango'>Mango</option>
      </select>
      <input type='submit' value='Submit' />
    </form>
  )
}
