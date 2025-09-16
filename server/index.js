import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()

import { db } from "./util/FirebaseInit.js";
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
    res.send("Hello World");
});

function start() {
	app.listen(port, () => {
		console.log(`Started listening on http://localhost:${port}`)
	})
}

start()