import Head from "next/head";
import Image from "next/image";
import StartButton from "./startbutton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className="welcome">
          <Image src="/favicon.png" width={64} height={64}/>
          <h1 style={{ padding: "10px"}}>
            Hello World!
          </h1>
          <p style={{ fontSize: "36px" }}>
            Are you ready to say hello?
          </p>
          <StartButton />
        </div>
      </div>
    </>
  );
}
