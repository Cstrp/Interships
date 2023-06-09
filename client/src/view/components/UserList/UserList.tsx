import { List, Typography } from "antd";
import styles from "./userlist.module.css";
import { UserListProps } from "./userListProps.ts";

const { Title } = Typography;

export const UserList = ({ users }: UserListProps) => {
  return (
    <div className={styles.userList}>
      <List
        header={<Title level={5}>User List</Title>}
        bordered
        style={{ maxHeight: "200px", overflow: "scroll" }}
        dataSource={users}
        renderItem={user => <List.Item>{user.userName}</List.Item>}
      />
    </div>
  );
};
