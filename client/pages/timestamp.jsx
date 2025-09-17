export default function TimeStamp({time}) {
    const date = time?.toDate();
    return (
        <p>{time}</p>
    )
}