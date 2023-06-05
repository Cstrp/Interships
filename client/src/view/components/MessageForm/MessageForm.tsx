import { AutoComplete, Button, Form, Input } from "antd";
import { Message } from "../../../data/types";

interface MessageFormProps {
  recipients: string[];
  sendMessage: (msg: Message) => Promise<void>;
}

export const MessageForm = ({ recipients, sendMessage }: MessageFormProps) => {
  const [form] = Form.useForm();

  const handleSendMessage = (msg: Message) => {
    sendMessage(msg);
    form.resetFields();
  };

  return (
    <div className="message-form">
      <Form form={form} onFinish={handleSendMessage}>
        <Form.Item
          name="recipient"
          rules={[{ required: true, message: "Please enter the recipient" }]}
        >
          <AutoComplete
            options={recipients.map(r => ({ value: r, label: r }))}
            placeholder="Enter recipient"
          />
        </Form.Item>
        <Form.Item
          name="subject"
          rules={[{ required: true, message: "Please enter the subject" }]}
        >
          <Input placeholder="Enter subject" />
        </Form.Item>
        <Form.Item
          name="content"
          rules={[{ required: true, message: "Please enter the message" }]}
        >
          <Input.TextArea placeholder="Enter message" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
