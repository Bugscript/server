import express from "express";
import WebSocket from "ws";
import fs from "fs";

const app = express();
const server = WebSocket.Server({
	port: 8088
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

server.on("connection", (client) => {

	client.on("message", (data) => {
		client.send(`Hello from server.`);
	});
});

app.listen(PORT, () => {
	console.log(`Listening on port: ${8080}`);
});
