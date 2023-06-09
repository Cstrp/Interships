import { observer } from "mobx-react";
import { Alert, Typography } from "antd";
import { useEffect, useState } from "react";
import { LoginForm, MessageForm, MessageList } from "./view";
import { api, Message, User, userStore } from "./data";
import "./App.css";

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

    const interval = setInterval(fetchData, 5555);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      {currentUser ? (
        <div className="actions">
          <div className="welcome">
            <Title level={2}>Welcome dear... {currentUser}</Title>
          </div>
          {showNoMessages ? (
            <Alert
              message="No messages"
              description="You have no messages."
              type="info"
              showIcon
            />
          ) : (
            <div>
              <Title level={3}>List of messages: </Title>
              <MessageList messages={messages} currentUser={currentUser} />
            </div>
          )}
          <div className="message-form">
            <MessageForm users={users} />
          </div>
        </div>
      ) : (
        <div className="login">
          <LoginForm />
        </div>
      )}
    </div>
  );
});
