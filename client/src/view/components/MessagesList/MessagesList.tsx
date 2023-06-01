import { useEffect, useRef } from "react";
import { List, Typography } from "antd";
import { MessagesListItem } from "../MessagesListItem/MessagesListItem.tsx";

interface MessagesListProps {
  log: string | string[];
  messages: string[];
  removeMessage: (message: string) => void;
}

export const MessagesList = ({
  log,
  messages,
  removeMessage,
}: MessagesListProps) => {
  const logRef: any = useRef();
  const botRef: any = useRef();

  useEffect(() => {
    botRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    if (log) {
      logRef.current.style.opacity = 0.8;
      logRef.current.style.zIndex = -1;

      const timer = setTimeout(() => {
        logRef.current.style.opacity = 0;
        logRef.current.style.zIndex = -1;

        clearTimeout(timer);
      }, 1000);
    }
  }, [log]);

  return (
    <div>
      <Typography>Messages</Typography>

      <List>
        {messages.map((message) => (
          <MessagesListItem
            key={message}
            message={message}
            removeMessage={removeMessage}
          />
        ))}
      </List>

      <div ref={botRef}></div>

      <Typography ref={logRef}>{log}</Typography>
    </div>
  );
};
