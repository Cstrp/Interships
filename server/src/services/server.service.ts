import * as http from "http";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Server } from "socket.io";

const ALLOWED_ORIGIN = "http://localhost:5173";
const app = express();
const server = http.createServer(app);
const socket = new Server(server, {
  cors: { origin: ALLOWED_ORIGIN },
  serveClient: false,
});

app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export { server, socket };
