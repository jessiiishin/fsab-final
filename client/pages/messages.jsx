import { useEffect, useState } from "react";
import Msg from "./msg";
import NewMsgButton from "./newmsgbutton";
import MessageModal from "./message-modal";

export default function MessagesPage() {
    const [messages, setMessages] = useState([])
    const [showMsgModal, setModalVisible] = useState(false);

    async function getMessages() {
    // get messages from backend
        const res = await fetch("http://localhost:8080/messages", {
            method: "GET",
        })

        const resJSON = await res.json();
        setMessages(resJSON);
    }

    async function sendMessage(title, body) {
        const newMessage = {
            title,
            body
        }

        const res = await fetch("http://localhost:8080/messages", {
            method: "POST",
            headers: { // specifying what data we're sending
                "content-type": "application/json" // = we're sending JSON
            },
            body: JSON.stringify(newMessage)
        })
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
            <NewMsgButton onClick={() => setModalVisible(true)} />
                {
                    showMsgModal && (
                        <MessageModal
                            onClose={() => setModalVisible(false)}
                            onSend={async (title, body) => {
                                await sendMessage(title, body);
                                setModalVisible(false);
                                getMessages();
                            }}
                        ></MessageModal>
                    )
                }
        </div>
    );
}

