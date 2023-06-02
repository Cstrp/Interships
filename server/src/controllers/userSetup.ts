import { Server, Socket } from "socket.io";
import User from "../models/user";

export class UserSetup {
  private socketIO: Server;
  private socket: Socket;

  constructor(socketIO: Server, socket: Socket) {
    this.socketIO = socketIO;
    this.socket = socket;

    this.handleCreation();
    this.handleDelete();
  }

  private handleCreation() {
    this.socket.on("user:create", async (name: string) => {
      try {
        const newUser = new User({ name });
        await newUser.save();

        this.socketIO
          .to(this.socket.data.topicId)
          .emit("user:created", newUser);
      } catch (err) {
        console.log(`Error while creating user: ${err}`);
      }
    });
  }

  private handleDelete() {
    this.socket.on("user:delete", async (userId: string) => {
      try {
        await User.findByIdAndDelete(userId);

        this.socketIO.to(this.socket.data.topicId).emit("user:deleted", userId);
      } catch (err) {
        console.log(`Error while deleting user ${err}`);
      }
    });
  }
}
