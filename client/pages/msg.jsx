export default function msg({ title, body}) {
    return (
        <div id="msg">
            <h1 className="msg-title">{title}</h1>
            <p className="msg-body">{body}</p>
        </div>
    );
}