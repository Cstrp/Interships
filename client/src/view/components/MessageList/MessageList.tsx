import { Typography } from "antd";
import { Message, userStore } from "../../../data";
import { observer } from "mobx-react";

interface MessageListProps {
  messages: Message[];
}

export const MessageList = observer(({ messages }: MessageListProps) => {
  const currentUser = userStore.getUsername();

  return (
    <div>
      {messages.map(message => (
        <div key={message._id}>
          <Typography.Text>{`From: ${message.sender}`}</Typography.Text>
          <Typography.Text>{`Subject: ${message.subject}`}</Typography.Text>
        </div>
      ))}
    </div>
  );
});

export const handleIncomingMessage = observer((message: Message) => {
  const currentUser = userStore.getUsername();
});
