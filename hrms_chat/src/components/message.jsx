import React from 'react';

const Message = ({ text, sender, specialReply }) => {
    const lines = text.split('\n');
    return (
        <div className={`message ${sender === 'me' ? 'sent' : 'received'}`}>
            <div className={`bubble ${sender === 'me' ? 'gray' : 'purple'}`}>
                <div>{lines[0]}</div>
                {specialReply && (
                    <div className="reply-options">Not yet &nbsp;&nbsp; Yes</div>
                )}
                {!specialReply && lines[1] && <div className="timestamp">{lines[1]}</div>}
            </div>
        </div>
    );
};

export default Message;
