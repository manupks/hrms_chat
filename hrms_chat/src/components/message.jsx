import notification from '../assets/notification.png';
function Message(){
    return (
        <div className="message">
            <h2>Messages
            <img alt="message" src={notification} className='notify'/>
            </h2>
            
        </div>
    )
}
export default Message