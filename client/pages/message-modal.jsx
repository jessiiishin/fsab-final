import { useState } from "react";

export default function MessageModal() {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h1>Write a new message:</h1>
                <input className="title-input" />
                <textarea className="body-input" />
            </div>
            <button className="modal-button">
                Send!
            </button>
            <button className="modal-button">
                Cancel
            </button>
        </div>
    )
}