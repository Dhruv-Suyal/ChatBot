import robotImage from '../assets/robot.png'
import loadingSpinner from '../assets/loading-spinner.gif'
import userImage from '../assets/user.png'
export function ChatMsg({message, sender}){
    return (
        <div className={sender==='user' ? "userMsg" : "robotMsg"}>
            {sender==='robot' && <img className="messageImage" src={robotImage} alt=""/>}
            <div className="MsgText">
                {message === 'Loading' ? <img className="loadingImg" src={loadingSpinner}/> : message}
            </div>
            {sender==='user' && <img className="messageImage" src={userImage} width="50" alt=""/>}
        </div>
    )
}