import './App.css'
import Form from "./Form.tsx";
import "./Form.css"
import Lista from "./Lista.tsx";
import {useState} from "react";

function App() {

    const [messages, setMessages] = useState<string[]>([]);

    function getMsg(text: string){
        setMessages(prevMessage => [...prevMessage, text]);
    }

  return (
    <>
        <Form sendString={getMsg} />

        <Lista messages={messages}/>

    </>
  )
}

export default App
