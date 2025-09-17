import { useState } from "react";

export default function MessageModal({ onClose, onSend }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <textarea 
                    className="title-input" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Give it a title..."
                    wrap="off"/>
                <textarea 
                    className="body-input" 
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    placeholder="Write your message..."/>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <button className="modal-button" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="modal-button" onClick={() => onSend(title, body)}>
                        Send!
                    </button>
                </div>
            </div>
            
        </div>
    )
}