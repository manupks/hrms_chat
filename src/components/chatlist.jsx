import './ChatList.css';

const chatData = [
  { name: "Lois Griffin", status: "Sent you a message", time: "34m", unread: true },
  { name: "The Boyz", status: "joe68: sent a message", time: "34m", unread: true },
  { name: "Stewie Griffin", status: "Sent you a message", time: "17h", unread: true },
  { name: "Joe Swanson", status: "Sent you a message", time: "20h", unread: true },
  { name: "Glenn Quagmire", status: "The silence lmao", time: "20h", unread: false },
  { name: "Herbert", status: "Active", time: "6m ago", unread: false },
  { name: "Adam West", status: "Active", time: "today", unread: false },
  { name: "Philip J. Fry", status: "I feel like I was frozen for 1000...", time: "20h", unread: false },
  { name: "Cleveland Brown", status: "Active", time: "5h ago", unread: false },
  { name: "Chris Griffin", status: "Active", time: "today", unread: false },
//   { name: "Bonnie Swanson", status: "", time: "", unread: false }
];

function ChatList() {
  const unreadCount = chatData.filter(chat => chat.unread).length;

  return (
    <div className="chatlist">
      <h3 className="chatlist-heading">
        Messages
        {unreadCount > 0 && <span className="unread-badge">{unreadCount}</span>}
      </h3>
      <ul className="chatlist-items">
        {chatData.map((chat, index) => (
          <li className="chatlist-item" key={index}>
            <div className="icon">👤</div>
            <div className="chat-info">
              <div className="chat-name">{chat.name}</div>
              <div className="chat-status">
                {chat.status}
                {chat.time && <span className="chat-time"> · {chat.time}</span>}
              </div>
            </div>
            {chat.unread && <div className="dot"></div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
