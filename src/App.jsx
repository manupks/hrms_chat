import React, { useState } from 'react';
import ChatWindow from './components/chatwindow';
import ChatList from './components/chatlist';
import Sidebar from './components/Sidebar';
import './components/ChatPage.css';

function App() {
    const [selectedChat, setSelectedChat] = useState('Meg Griffin');

    return (
        <div className="app-container">
            <div className="sidebar" style={{ display: 'flex' }}>
                <Sidebar />
            </div>
            <div className="chat-list">
                <ChatList selectedChat={selectedChat} onSelectChat={setSelectedChat} />
            </div>
            <ChatWindow selectedChat={selectedChat} />
        </div>
    );
}

export default App;
