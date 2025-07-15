// ChatWindow.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import Message from './Message';
import InputBox from './InputBox';
import '../style/ChatPage.css';

const ChatWindow = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hey Eric, have you collaborated with Fred yet?\nNot yet    Yes",
            sender: "other",
            specialReply: true,
            time: "10:30 AM",
        },
        {
            id: 2,
            text: "So... question. How long has server been unconscious?",
            sender: "other",
            time: "10:32 AM",
        },
        {
            id: 3,
            text: "Oh my god, Chris. The server is not working and it is showing some problem indication...",
            sender: "me",
            time: "10:34 AM",
        },
        {
            id: 4,
            text: "Y fear when Chris is here... I’ve taught you well. You have the right instincts...",
            sender: "other",
            time: "10:35 AM",
        },
    ]);

    const [showMenu, setShowMenu] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [contextMenu, setContextMenu] = useState(null);
    const menuRef = useRef(null);
    const chatBodyRef = useRef(null);

    const toggleMenu = () => setShowMenu(!showMenu);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
            setContextMenu(null);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = (newMessage) => {
        if (!newMessage.trim()) return;

        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });

        const newMsg = {
            id: Date.now(),
            text: newMessage,
            sender: 'me',
            time: formattedTime,
        };

        setMessages([...messages, newMsg]);
    };

    const handleContextMenu = (event, sender) => {
        event.preventDefault();
        const rect = event.currentTarget.getBoundingClientRect();

        if (sender === 'me') {
            setContextMenu({
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX - 160,
            });
        } else {
            setContextMenu({
                top: rect.top + window.scrollY,
                left: rect.right + window.scrollX + 10,
            });
        }
    };

    return (
        <>
            <div className="chat-window">
                <div className="chat-window-inner">
                    <div className="chat-header">
                        <div className="user-info" onClick={() => setShowProfile(true)} style={{ cursor: 'pointer' }}>
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
                        <div ref={menuRef} className="dots-wrapper">
                            <ThreeDotsVertical className="three-dots" onClick={toggleMenu} />
                            {showMenu && (
                                <div className="dropdown-float">
                                    <button className="dropdown-btn">Mute</button>
                                    <button className="dropdown-btn">Block</button>
                                    <button className="dropdown-btn">Report</button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="chat-body" ref={chatBodyRef}>
                        {messages.map((msg) => (
                            <Message
                                key={msg.id}
                                text={msg.text}
                                sender={msg.sender}
                                specialReply={msg.specialReply}
                                time={msg.time}
                                onContextMenu={handleContextMenu}
                            />
                        ))}
                    </div>

                    <InputBox onSend={handleSend} />
                </div>
            </div>

            {contextMenu && (
                <ul
                    className="context-menu"
                    style={{
                        top: `${contextMenu.top}px`,
                        left: `${contextMenu.left}px`,
                        position: 'absolute',
                    }}
                >
                    <li>Reply</li>
                    <li>Copy</li>
                    <li>Forward</li>
                    <li>Select</li>
                    <li>Delete</li>
                    <li>Pin</li>
                </ul>
            )}

            <Modal show={showProfile} onHide={() => setShowProfile(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>User Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <img
                        src="https://randomuser.me/api/portraits/women/1.jpg"
                        alt="Profile"
                        style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '1rem' }}
                    />
                    <h5>Meg Griffin</h5>
                    <p>@mmmmeg</p>
                    <p>Web Developer, Django Guy</p>
                    <p>Status: Z476 is aware and is waiting for instructions...</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowProfile(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ChatWindow;
