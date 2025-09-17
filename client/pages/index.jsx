import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Image src="/favicon.png" width={64} height={64}/>
        <h1>
          Hello World!
        </h1>
        <p>
          Are you ready to say hello?
        </p>
        <button>Let's do it</button>
      </div>
    </>
  );
}
