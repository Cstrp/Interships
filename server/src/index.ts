import express from 'express';
import {Server} from "socket.io";
import * as http from "http";

export const app = express();
const server = http.createServer(app);
const socket = new Server(server, {
    cors: {origin: '*'}
});

