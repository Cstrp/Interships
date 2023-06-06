import "./App.css";
import { useEffect, useState } from "react";
import { api, Message, User, userStore } from "./data";
import { LoginForm, MessageForm, MessageList, UserList } from "./view";
import { observer } from "mobx-react";
import { Typography } from "antd";

const { Title } = Typography;

export const App = observer(() => {
  const currentUser = userStore.getUsername();
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [showMessageContent, setShowMessageContent] = useState<boolean>(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await api.get<User[]>("/getUsers");
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    const getMessages = async () => {
      try {
        const res = await api.get<Message[]>("/messages");
        setMessages(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    const msgApp = setInterval(() => {
      getUsers();
      getMessages();
    }, 5000);

    return () => {
      clearTimeout(msgApp);
    };
  }, []);

  return (
    <>
      {currentUser ? (
        <div>
          <div>
            <Title level={2}>Welcome dear... {currentUser}</Title>

            <div>
              <div>
                <MessageList messages={messages} />
              </div>
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
