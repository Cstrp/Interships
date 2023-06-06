import { Card, notification, Typography } from "antd";
import { Message } from "../../../data";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import moment from "moment";

interface MessageListProps {
  messages: Message[];
  currentUser?: string;
}

export const MessageList = observer(
  ({ messages, currentUser }: MessageListProps) => {
    const [processedMessageIds, setProcessedMessageIds] = useState<string[]>(
      []
    );

    useEffect(() => {
      const newMessages = messages.filter(
        message =>
          !processedMessageIds.includes(message._id!) &&
          message.recipient === currentUser
      );

      if (newMessages.length > 0) {
        newMessages.forEach(message => {
          notification.info({
            message: "New Message",
            placement: "bottomLeft",
            description: `You have received a new message from ${message.sender}.`,
          });
        });

        const newMessageIds = newMessages.map(message => message._id!);
        setProcessedMessageIds(prevIds => [...prevIds, ...newMessageIds]);
      }
    }, [messages, currentUser, processedMessageIds]);

    return (
      <div style={{ maxHeight: "300px", overflow: "scroll" }}>
        {messages
          .filter(message => message.recipient === currentUser)
          .map(message => (
            <Card
              key={message._id}
              size={"default"}
              bordered
              title={`From: ${message.sender}`}
              children={
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography.Text strong>
                    Subject: {message.subject}
                  </Typography.Text>
                  <Typography.Text strong>
                    Created at:{" "}
                    {message.createdAt
                      ? moment(message.createdAt).format("DD/MM/YYYY HH:mm ")
                      : ""}
                  </Typography.Text>
                </div>
              }
            />
          ))}
      </div>
    );
  }
);
