import "./App.css";
import { useEffect, useState } from "react";
import { api, Message, User, userStore } from "./data";
import { LoginForm, MessageForm, MessageList, UserList } from "./view";
import { observer } from "mobx-react";
import { Alert, Typography } from "antd";

const { Title } = Typography;

export const App = observer(() => {
  const currentUser = userStore.getUsername();
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showNoMessages, setShowNoMessages] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await api.get<User[]>("/getUsers");
        setUsers(usersResponse.data);

        const messagesResponse = await api.get<Message[]>("/messages");
        setMessages(messagesResponse.data);
        setShowNoMessages(messagesResponse.data.length === 0);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => {
      clearInterval(interval);
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
                {showNoMessages ? (
                  <Alert
                    message="No messages"
                    description="You have no messages."
                    type="info"
                    showIcon
                  />
                ) : (
                  <MessageList messages={messages} currentUser={currentUser} />
                )}
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
