import TimeStamp from "./timestamp";

export default function msg({ title, author, body, time}) {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>{author}</p>
            </div>
            <p>{body}</p>
            <TimeStamp time={time}/>
        </div>
    );
}