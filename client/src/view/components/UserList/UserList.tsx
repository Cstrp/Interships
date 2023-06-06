import { User } from "../../../data";
import { List, Typography } from "antd";

interface UserListProps {
  users: User[];
}

const { Title } = Typography;

export const UserList = ({ users }: UserListProps) => {
  return (
    <>
      <div className="user-list">
        <List
          header={<Title level={4}>User List</Title>}
          bordered
          dataSource={users}
          renderItem={user => <List.Item>{user.userName}</List.Item>}
        />
      </div>{" "}
    </>
  );
};
