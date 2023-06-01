import { localStorage } from "../utils/localStorage.ts";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export const useChat = () => {
  const user = localStorage.get("user");
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [log, setLog] = useState(null);
  const { current: socket } = useRef(
    io("http://localhost:1337", {
      query: {
        roomId: user.roomId,
        userName: user.userName,
      },
    })
  );

  useEffect(() => {
    socket.emit("user:add", user);

    socket.emit("message:get");

    socket.on("connection", () => {
      console.log("THIS IS SPARTA");
    });

    socket.on("log", (log) => {
      setLog(log);
    });

    socket.on("user_list:update", (users) => {
      setUsers(users);
    });

    socket.on("message_list:update", (messages) => {
      setMessages(messages);
    });
  }, []);

  const sendMessage = (message: any) => {
    socket.emit("message:add", message);
  };

  const removeMessage = (message: any) => {
    socket.emit("message:remove", message);
  };

  return { users, messages, log, sendMessage, removeMessage };
};
