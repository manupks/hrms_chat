import React from 'react';
import ChatWindow from './components/chatwindow';
import './style/ChatPage.css';

function App() {
    return (
        <div className="app-container">
            <div className="sidebar"></div>
            <div className="chat-list"></div>
            <ChatWindow />
        </div>
    );
}

export default App;

