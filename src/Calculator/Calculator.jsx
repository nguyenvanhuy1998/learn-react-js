import React, { useState } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8
}
const toFahrenheit = (celsius) => {
  return celsius * 1.8 + 32
}
const tryCovert = (temperature, convertFunc) => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  let output = convertFunc(input)
  output = Math.round(output * 1000) / 1000
  return String(output)
}
function Calculator() {
  const [temperature, setTemperature] = useState('')
  const [scale, setScale] = useState('c')
  const celsius = scale === 'f' ? tryCovert(temperature, toCelsius) : temperature
  const fahrenheit = scale === 'c' ? tryCovert(temperature, toFahrenheit) : temperature
  const handleChange = (scale) => (value) => {
    setScale(scale)
    setTemperature(value)
  }
  return (
    <div>
      <TemperatureInput title={scaleNames.c} temperature={celsius} onTemperatureChange={handleChange('c')} />
      <TemperatureInput title={scaleNames.f} temperature={fahrenheit} onTemperatureChange={handleChange('f')} />
      <BoilingVerdict celsius={Number(celsius)} />
    </div>
  )
}

export default Calculator
