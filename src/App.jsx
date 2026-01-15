import { useState} from 'react'
import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';
import './App.css'


    function App(){ 
        const [chatMessages, setChatMessages] = useState([]);
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
