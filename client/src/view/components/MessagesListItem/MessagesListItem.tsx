import { localStorage } from "../../../data/utils/localStorage.ts";
import { Button, List } from "antd";

interface MessagesListItemProps {
  message: string;
  removeMessage: (message: string) => void;
}
export const MessagesListItem = ({
  message,
  removeMessage,
}: MessagesListItemProps) => {
  const user = localStorage.get("user");

  console.log(user);

  return (
    <List.Item>
      {message}
      <Button onClick={() => removeMessage}>Remove</Button>
    </List.Item>
  );
};
