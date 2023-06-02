import express from "express";
import * as http from "http";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { ConnectSetup, ServerSetup } from "../controllers";

class App {
  private readonly app: express.Application;
  private readonly server: http.Server;
  private readonly socketIO: Server;

  private static socketConfig = {
    cookie: false,
    pingTimeout: 5000,
    pingInterval: 10000,
    cors: { origin: "*" },
    serveClient: false,
  };

  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.socketIO = new Server(this.server, App.socketConfig);

    this.setupServer();
    this.setupSocket();
  }

  private setupServer() {
    new ServerSetup(this.app);
  }

  private setupSocket() {
    this.socketIO.on("connection", (socket: Socket) => {
      console.log(`New connection: ${socket.id}`);

      new ConnectSetup(this.socketIO, socket);

      socket.on("disconnect", () => {
        console.log("Disconnected");
      });
    });
  }

  public start(port?: number) {
    this.server.listen(port, () =>
      console.log(`Server listening on port ${port} | http://localhost:${port}`)
    );
  }
}

export const app = new App();
