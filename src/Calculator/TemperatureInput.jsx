import React from 'react'
import PropTypes from 'prop-types'
function TemperatureInput({ title, temperature, onTemperatureChange }) {
  const handleChange = (event) => {
    onTemperatureChange(event.target.value)
  }
  return (
    <fieldset>
      <legend>Enter temperature in {title}</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  )
}
TemperatureInput.propTypes = {
  onTemperatureChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  temperature: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default TemperatureInput
