import { List } from "antd";

interface UserListProps {
  users: string[];
}

export const UserList = ({ users }: UserListProps) => {
  return (
    <>
      <List>
        {users.map((user, idx) => (
          <List.Item key={idx}>{user}</List.Item>
        ))}
      </List>
    </>
  );
};
