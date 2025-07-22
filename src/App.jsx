<<<<<<< HEAD
import React from 'react';
import Chat from './chat.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/chat.css'; // Your existing Chat CSS
import './app.css';  // Optional if you want extra global styles
=======
import React, { useState } from 'react';
import ChatWindow from './components/chatwindow';
import ChatList from './components/chatlist';
import Sidebar from './components/Sidebar';
import './components/ChatPage.css';
>>>>>>> 1690d804ececedf9c9baefa1b3b7baaf09e070af

function App() {
    return (
        <Chat />
    );
}

export default App;
