import { List } from "antd";
import { Message } from "../../../data";

interface MessageListProps {
  messages: Message[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  return (
    <>
      <List dataSource={messages} />
    </>
  );
};
