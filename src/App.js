import './App.css'
import LoginControl from './LoginControl'
import Mailbox from './Mailbox'
const messages = ['React', 'Re: React', 'Re:Re: React']

function App() {
  return (
    <div className='App'>
      <LoginControl />
      <Mailbox unreadMessages={messages} />
    </div>
  )
}

export default App
