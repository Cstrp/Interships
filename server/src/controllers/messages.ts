import { Server, Socket } from "socket.io";
import Chat from "../models/chat";
import { handleError } from "../services";
import { Message } from "../types";

const msgs: { [key: string]: string | string[] | Message } = {};

export const messages = (server: Server, socket: Socket) => {
  const { roomId } = socket.data;

  const updateMessages = () => {
    server.to(roomId).emit("messages:update", msgs[roomId]);
  };

  socket.on("message:get", async () => {
    try {
      msgs[roomId] = await Chat.find({ roomId });

      updateMessages();
    } catch (e: any) {
      handleError(e);
    }
  });

  socket.on("message:add", async (message) => {
    await Chat.create(message);

    message.createdAt = Date.now();

    if (Array.isArray(msgs)) msgs[roomId].push(message);

    updateMessages();
  });

  socket.on("message:remove", async (message) => {
    const { messageId } = message;

    await Chat.deleteOne({ messageId });

    if (Array.isArray(msgs))
      msgs[roomId] = msgs[roomId].filter(
        (m: { messageId: string }) => m.messageId !== messageId
      );

    updateMessages();
  });
};
