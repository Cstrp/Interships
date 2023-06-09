import { notification, Typography } from "antd";
import { Message } from "../../../data";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import moment from "moment";
import { Collapse } from "antd/lib";

interface MessageListProps {
  messages: Message[];
  currentUser?: string;
}

const { Panel } = Collapse;

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
      <div
        style={{ maxWidth: "700px", maxHeight: "300px", overflow: "scroll" }}
      >
        <Collapse
          size={"middle"}
          collapsible={"header"}
          style={{
            width: "700px",
          }}
        >
          {messages
            .filter(message => message.recipient === currentUser)
            .map(message => (
              <Panel
                key={message._id!}
                header={
                  <div>
                    <Typography.Text
                      strong
                    >{`From: ${message.sender} | `}</Typography.Text>
                    <Typography.Text
                      strong
                    >{`Subject: ${message.subject}`}</Typography.Text>
                  </div>
                }
                extra={
                  <Typography.Text>{`Created at: ${moment(
                    message.createdAt
                  ).format("DD/MM/YYYY HH:mm")}`}</Typography.Text>
                }
              >
                <Typography.Text>{message.body}</Typography.Text>
              </Panel>
            ))}
        </Collapse>
      </div>
    );
  }
);
