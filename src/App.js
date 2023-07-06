import './App.css'
import Welcome from './Welcome'

function App() {
  return (
    <div className='App'>
      <Welcome name='Sara' age={22} />
      <Welcome name='Helen' age={21} />
      <Welcome name='Alex' age={20} />
    </div>
  )
}

export default App
