import "./App.css";
import { useEffect, useState } from "react";
import { api, Message, User, userStore } from "./data";
import { LoginForm, MessageForm, UserList } from "./view";
import { observer } from "mobx-react";
import { Typography } from "antd";

const { Title } = Typography;

export const App = observer(() => {
  const currentUser = userStore.getUsername();
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await api.get<User[]>("/getUsers");
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  return (
    <>
      {currentUser ? (
        <div>
          <div>
            <Title level={2}>Welcome dear... {currentUser}</Title>

            <div>
              {/*<MessageList messages={[]} />*/}
              <MessageForm users={users} />
            </div>
          </div>
          <div>
            <UserList users={users} />
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
});
