import { Server, Socket } from "socket.io";
import { users } from "./users";
import { messages } from "./messages";

export const connect = (server: Server, socket: Socket) => {
  const { roomId, userName } = socket.handshake.query;

  socket.data.roomId = roomId;
  socket.data.userName = userName;

  socket.join(roomId!);

  users(server, socket);

  messages(server, socket);
};
