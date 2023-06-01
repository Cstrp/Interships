import { Card } from "antd";
import { MessagesList } from "../MessagesList/MessagesList.tsx";
import { UserList } from "../UserList/UserList.tsx";

export const Topic = () => {
  return (
    <Card>
      <div>
        <MessagesList />
      </div>
      <UserList />
    </Card>
  );
};
