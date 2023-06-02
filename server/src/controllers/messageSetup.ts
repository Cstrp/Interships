import { Server, Socket } from "socket.io";
import { Message as Msg } from "../types";
import Message from "../models/message";

export class MessageSetup {
  private socketIO: Server;
  private socket: Socket;

  private messages: Msg;

  constructor(socketIO: Server, socket: Socket) {
    this.socket = socket;
    this.socketIO = socketIO;

    this.handleMessageCreate();
    this.handleMessageDelete();
  }

  private getMessage() {
    this.socket.on("message:get", () => {});
  }

  private handleMessageCreate() {
    this.socket.on("message:create", async (message: Msg) => {
      try {
        const newMessage = new Message(message);
        await newMessage.save();

        this.socketIO.emit("message:created", newMessage);
      } catch (err) {
        console.log(`Error while creating message ${err}`);
      }
    });
  }

  private handleMessageDelete() {
    this.socket.on("message:delete", async (messageId: string) => {
      try {
        await Message.findByIdAndDelete(messageId);

        this.socketIO.emit("message:deleted", messageId);
      } catch (err) {
        console.log(`Error while delete message ${err} `);
      }
    });
  }
}
