import React from 'react';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import Message from './Message';
import InputBox from './InputBox';
import '../style/ChatPage.css';

const ChatWindow = () => {
    const messages = [
        { id: 1, text: "Hey Eric, have you collaborated with Fred yet?\nNot yet    Yes", sender: "other", specialReply: true },
        { id: 2, text: "So... question. How long has server been unconscious?", sender: "other" },
        { id: 3, text: "Oh my god, Chris. The server is not working and it is showing some problem indication...", sender: "me" },
        { id: 4, text: "Y fear when Chris is here... I’ve taught you well. You have the right instincts...", sender: "other" },
    ];

    return (
        <div className="chat-window">
            <div className="chat-window-inner">
                <div className="chat-header">
                    <div className="user-info">
                        <img
                            src="https://randomuser.me/api/portraits/women/1.jpg"
                            alt="Profile"
                            className="user-avatar"
                        />
                        <div>
                            <div className="user-name">Meg Griffin @mmmmeg</div>
                            <div className="user-status">Web dev, Django Guy</div>
                            <div className="user-note">Z476 is aware and is waiting for instructions...</div>
                        </div>
                    </div>
                    <ThreeDotsVertical className="three-dots" />
                </div>

                <div className="chat-body">
                    {messages.map(msg => (
                        <Message key={msg.id} text={msg.text} sender={msg.sender} specialReply={msg.specialReply} />
                    ))}
                </div>

                <InputBox />
            </div>
        </div>
    );
};

export default ChatWindow;
