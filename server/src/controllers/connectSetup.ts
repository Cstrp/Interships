import { Server, Socket } from "socket.io";
import { UserSetup } from "./userSetup";
import { MessageSetup } from "./messageSetup";
import { TopicSetup } from "./topicSetup";

export class ConnectSetup {
  private readonly socketIO: Server;
  private readonly socket: Socket;

  constructor(socketIO: Server, socket: Socket) {
    this.socketIO = socketIO;
    this.socket = socket;

    this.handleConnect();
  }

  private handleConnect() {
    console.log(this.socket.data);
    new UserSetup(this.socketIO, this.socket);
    new MessageSetup(this.socketIO, this.socket);
    new TopicSetup(this.socketIO, this.socket);
  }
}
