import "./App.scss";
import useLocalStorage from "use-local-storage";
import { MessageForm, MessageList, NewUserForm } from "./view/components";
import { useEffect, useState } from "react";
import { Message } from "./data/types";
import { getMessages } from "./data/api/getMessages.ts";
import { getUsers } from "./data/api/getUsers.ts";
import { sendMessage as sendNewMessage } from "./data/api/sendMessage.ts";
import { Divider } from "antd";

export const App = () => {
  const [name, setName] = useLocalStorage<string>("name", "");
  const [messages, setMessages] = useState<Message[]>([]);
  const [recipients, setRecipients] = useState<string[]>([]);

  useEffect(() => {
    const getMsgs = async () => {
      const data = await getMessages();
      setMessages(data ? data : []);
    };

    const getUsrs = async () => {
      const users = await getUsers();

      const names = users ? users.map(u => u.name) : [];
      setRecipients(names);
    };

    getMsgs();
    getUsrs();
  }, []);

  const sendMessage = async (msg: Message) => {
    const sender = name;
    const newMessage: Message = { ...msg, sender };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    sendNewMessage(newMessage);
  };

  return (
    <div className="app-container">
      {!name ? (
        <NewUserForm setName={setName} />
      ) : (
        <div className="chat-container">
          <div className="message-form-container">
            <MessageForm recipients={recipients} sendMessage={sendMessage} />
          </div>

          <Divider />

          <div className="message-list-container">
            <MessageList messages={messages} />
          </div>
        </div>
      )}
    </div>
  );
};
