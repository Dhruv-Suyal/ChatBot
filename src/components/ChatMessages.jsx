import {useRef, useEffect } from 'react'
import { ChatMsg } from './ChatMsg';
export function ChatMessages({chatMessages}){
    const chatMessageRef = useRef(null);
    useEffect(()=>{
        const chatMessageElem = chatMessageRef.current;
        if(chatMessageElem){
            chatMessageElem.scrollTop = chatMessageElem.scrollHeight;
        }
    }, [chatMessages]);

    return (
        <div className="chatMessage" ref={chatMessageRef}>
            {chatMessages.map((item)=>{
                return (
                    <ChatMsg  message={item.message} sender={item.sender} key={item.id} ></ChatMsg>  
                )
            })}
            {chatMessages.length === 0 && <div className="welcomeMsg">
                <p>Welcome to the chatbot project! Send a message using the textbox below</p>
            </div>}
        </div>
    )
}
