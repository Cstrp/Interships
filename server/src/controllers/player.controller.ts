import { Server, Socket } from "socket.io";
import { Player } from "../types";

const players: { [key: string]: Player[] } = {};

export const playerController = (io: Server, socket: Socket) => {
  const { id } = socket;

  const updatePlayersList = (gameId: string) => {
    io.to(gameId).emit("players:update", players[gameId]);
  };

  socket.on("player:join", (name: string, gameId: string) => {
    const player: Player = {
      id,
      name,
    };

    if (!players[gameId]) {
      players[gameId] = [];
    }

    players[gameId].push(player);
    socket.join(gameId);

    console.log(players);

    updatePlayersList(gameId);
  });

  socket.on("disconnect", () => {});
};
