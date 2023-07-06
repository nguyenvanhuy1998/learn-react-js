import './App.css'
import BareInput from './BareInput'
import Layout from './Layout'

function App() {
  return (
    <div className='App'>
      <Layout>
        <h1>Hello</h1>
        <BareInput type='password' value='100' autoFocus className='input-control' onChange={() => {}} />
      </Layout>
    </div>
  )
}

export default App
