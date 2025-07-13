import profile from '../assets/profile.png';

function Chats({name="Unknown", mess="Message", time="0 min"}) {
  return (
    <div className="chathead">
      <img src={profile} style={{ width: '4rem' }} alt="profile" />
      <div className="chattext">
        <p className="chatname">{name}</p>
        <div className="chatmeta">
          <span className="chatmessage">{mess}</span>
          <span className="chattime">{time} ago</span>
        </div>
      </div>
    </div>
  );
}

export default Chats;
