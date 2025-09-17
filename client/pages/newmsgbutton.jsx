import Image from "next/image";

export default function NewMsgButton({ onClick }) {
    return (
        <div id="new-message-button" onClick={onClick}>
            <Image src="/assets/paperplane.png" width={48} height={48} />
        </div>
    );
}