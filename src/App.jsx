import { useState, useEffect} from 'react'
import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';
import './App.css'


    function App(){ 
        let localMessages = Array.isArray(JSON.parse(localStorage.getItem('message'))) ? JSON.parse(localStorage.getItem('message')) : [];
        const [chatMessages, setChatMessages] = useState(localMessages);
        
        useEffect(()=>{
            const stringMessages = JSON.stringify(chatMessages);
            localStorage.setItem('message' , stringMessages);
        },[chatMessages]);

        //const [chatMessages, setChatMessages] = array;       -----> It is destructuring of array
        //const chatMessages = array[0];
        //const setChatMessages = array[1];

        return(
        <div className="App-container">
                <ChatMessages chatMessages={chatMessages} />
                <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}></ChatInput>
        </div>
        )
    }

export default App
