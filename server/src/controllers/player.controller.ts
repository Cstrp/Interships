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
    console.log(players);

    players[gameId].push(player);
    socket.join(gameId);

    updatePlayersList(gameId);
  });

  socket.on("disconnect", () => {
    Object.keys(players).forEach(gameId => {
      players[gameId] = players[gameId].filter(p => p.id !== id);

      if (players[gameId].length === 0) {
        delete players[gameId];
      } else {
        updatePlayersList(gameId);
      }
    });
  });
};
