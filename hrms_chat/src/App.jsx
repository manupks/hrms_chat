import Message from './components/message.jsx'
import Chats from './components/chatlist.jsx'
import './App.css'

function App() {

  return (
    <>
    <Message/>
    <div className='chats'>
      <Chats name="Monish" mess="Sent you a message" time="30min"/>
      <Chats name="Avinash" mess="Liked your post" time="1hr"/>
      <Chats name="Harshini" mess="Sent you a message" time="2hr"/>
      <Chats name="Samuel" mess="Reacted to your story" time="2hr 30min"/>
      <Chats name="Sharath" mess="Uploaded to thier story" time="hr"/>
    </div>
    
    </>
  )
}

export default App
