import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      
      <div>
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
