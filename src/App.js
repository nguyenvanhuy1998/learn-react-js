import Blog from './ Blog'
import './App.css'
import NumberList from './NumberList'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' }
]
function App() {
  return (
    <div className='App'>
      <NumberList numbers={numbers} />
      <Blog posts={posts} />
    </div>
  )
}

export default App
