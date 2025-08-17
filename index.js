const { Server } = require("socket.io");
const express = require("express");
const { createServer } = require("http");

const app = express()
const server = createServer(app)
const io = new Server(server)

app.get("/", async(req, res)=>{
    res.send("Hello World!");
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
})