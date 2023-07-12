import logo from './logo.svg'
import './App.css'
import User from './User'
import { useState } from 'react'

function App() {
  const [isShow, setIsShow] = useState(true)
  return (
    <div className='App'>
      {isShow && <User />}
      <button onClick={() => setIsShow((prevState) => !prevState)}>Change isShow</button>
    </div>
  )
}

export default App
