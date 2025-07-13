import React from 'react';
import ChatWindow from './components/chatwindow';
import './style/ChatPage.css';
import ChatList from './components/chatlist.jsx'

function App() {
    return (
        <div className="app-container">
            <div className="sidebar"></div>
            <div className="chat-list">
                <ChatList/>
            </div>
            <ChatWindow />
        </div>
    );
}

export default App;
