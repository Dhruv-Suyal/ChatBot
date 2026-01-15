import { useState} from 'react'
import {Chatbot} from 'supersimpledev'

export function ChatInput({chatMessages, setChatMessages}){
    const [inputMsg, setInputMsg] = useState('');

    function saveInputText(event){
        setInputMsg(event.target.value);
    }
    function pressEnter(event){
        console.log(event.key)
        if(event.key==='Enter'){
            sendMessage();
        }
        if(event.key === 'Escape'){
            setInputMsg('');
        }
    }

    async function sendMessage(){
        const newMessage = [
            ...chatMessages,
            {
                message:inputMsg,
                sender:"user",
                id:crypto.randomUUID()
            }
        ]
        setChatMessages(newMessage);
        setInputMsg('');
        setChatMessages([
            ...newMessage,
            {
                message:'Loading',
                sender: "robot",
                id:crypto.randomUUID()
            }
        ])
        const response = await Chatbot.getResponseAsync(inputMsg);
        setChatMessages([
            ...newMessage,
            {
                message:response,
                sender:"robot",
                id:crypto.randomUUID()
            }
        ])
    }

    return (
        
        <div className="inputBox">
        <input className="inputMsg" placeholder="Send a message to Chatbot" size="30" onKeyDown={pressEnter} onChange={saveInputText} value={inputMsg} />
        <button className="send-button" onClick={sendMessage}>Send</button>
        </div>
    )

}