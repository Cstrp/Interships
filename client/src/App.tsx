import "./App.css";

import React from "react";
import { Button, Form, Input, List } from "antd";
import { useChat } from "./data/hooks";

export const App: React.FC = () => {
  const [form] = Form.useForm();

  const { sendMessage } = useChat();

  const handleSendMessage = (value: any) => {
    sendMessage(value);
  };

  return (
    <div>
      <Form form={form} layout="vertical" onFinish={handleSendMessage}>
        <Form.Item
          label="Recipient"
          name="user_name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Title" name="topic_id" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message_content"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Form>

      <List
        dataSource={messages}
        renderItem={(message) => (
          <List.Item key={message._id}>
            <List.Item.Meta
              title={message.topic_id}
              description={message.message_content}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
