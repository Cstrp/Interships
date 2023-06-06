import { User } from "../../../data";
import { List, Typography } from "antd";
import styles from "./userlist.module.css";

interface UserListProps {
  users: User[];
}

const { Title } = Typography;

export const UserList = ({ users }: UserListProps) => {
  return (
    <>
      <div className={styles.userList}>
        <List
          header={<Title level={4}>User List</Title>}
          bordered
          style={{ height: "300px", overflow: "scroll" }}
          dataSource={users}
          renderItem={user => <List.Item>{user.userName}</List.Item>}
        />
      </div>{" "}
    </>
  );
};
