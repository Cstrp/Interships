import { Server, Socket } from "socket.io";

const usrs: { [key: string]: string | string[] } = {};

export const users = (server: Server, socket: Socket) => {
  const { roomId, userName } = socket.data;

  const updateUsers = () => {
    server.to(roomId).emit("users:update", usrs[roomId]);
  };

  socket.on("user:add", async (usr) => {
    socket.to(roomId).emit("logs", `Uses ${userName}  connected to chat`);

    usr.socketId = socket.id;

    if (Array.isArray(usrs)) {
      usrs[roomId].push(usr);
    }

    updateUsers();
  });

  socket.on("disconnect", () => {
    if (!usrs[roomId]) return;

    socket.to(roomId).emit("logs", `User ${userName} disconnected`);

    if (Array.isArray(usrs)) {
      usrs[roomId] = usrs[roomId].filter(
        (u: { socketId: string }) => u.socketId !== socket.id
      );
    }

    updateUsers();
  });
};
