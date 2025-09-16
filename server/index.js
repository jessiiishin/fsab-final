import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()

import { db } from "./utils/FirebaseInit.js";
import { collection, getDocs, addDoc } from "firebase/firestore"

const app = express()
const port = 8080;

app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:3000"
    })
)
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/messages", async (req, res) => {
    const messagesRef = collection(db, "messages");
    const messagesSnap = await getDocs(messagesRef);

    const messages = []
	messagesSnap.forEach((msg) => {
		messages.push(msg.data())
	})
	res.send(messages)
})

app.post("/messages", async (req, res) => {
    const messagesRef = collection(db, "messages");
    const newMessage = req.body;

    try {
		await addDoc(messagesRef, newMessage)
	} catch (e) {
		console.error(e)
		res.status(500)
	}
	res.status(200).send("Successfully posted message")
})

function start() {
	app.listen(port, () => {
		console.log(`Started listening on http://localhost:${port}`)
	})
}

start()