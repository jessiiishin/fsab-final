import Image from "next/image";

export default function NewMsgButton() {
    return (
        <div id="new-message-button">
            <Image src="/assets/paperplane.png" width={48} height={48} />
        </div>
    );
}