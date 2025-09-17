import { useEffect, useState } from "react";
import Msg from "./msg";

export default function MessagesPage() {
    const [messages, setMessages] = useState([])

    async function getMessages() {
    // get messages from backend
        const res = await fetch("http://localhost:8080/messages", {
            method: "GET",
        })

        const resJSON = await res.json();
        setMessages(resJSON);
    }

    useEffect(() => {
        getMessages();
    }, [])

    return (
        <div style={{ height: "100vh", backgroundColor: "var(--dark-primary)", padding: "40px"}}>
            <div style={{ marginBottom: "30px" }}>
                <h1 style={{ color: "white"}}>The World says Hello :D</h1>
            </div>

            <div>
                {messages.map((msg) => (
                    <Msg key={msg.id} title={msg.title} body={msg.body} time={msg.time} />
                ))}
            </div>
        </div>
        

    );
}

