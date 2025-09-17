export default function startButton() {
    return (
        <button id="start-button" onClick={event =>  window.location.href='/messages'}>
            Let's do it
        </button>
    )
}