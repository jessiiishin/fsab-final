import { useEffect, useState } from "react";

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
        <div>
            <h1 style={{ padding: "20px"}}>The World says Hello!</h1>
        </div>
    );
}

