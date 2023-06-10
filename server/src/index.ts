import { Socket } from "socket.io";
import { playerController } from "./controllers/player.controller";

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

interface Player {
  id?: string;
  name?: string;
}

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  serveClient: false,
  cors: { origin: "*" },
});

io.on("connection", (socket: Socket) => {
  console.log("New player connected", socket.id);

  playerController(io, socket);
});

const port = 3001; // Replace with your desired port number
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
