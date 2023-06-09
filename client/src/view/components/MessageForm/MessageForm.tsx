import { AutoComplete, Button, Form, Input } from "antd";
import {
  autoCompleteFilter,
  Message,
  sendMessage,
  userStore,
} from "../../../data";
import { MessageFormProps } from "./MessageFormProps.ts";
import { observer } from "mobx-react";

const { TextArea } = Input;

export const MessageForm = observer(({ users }: MessageFormProps) => {
  const [form] = Form.useForm<Message>();

  const currentUser = userStore.getUsername();

  const handleSubmit = (values: Message) => {
    const { recipient, subject, body } = values;

    const newMessage: Message = {
      sender: currentUser,
      recipient,
      subject,
      body,
    };

    sendMessage(newMessage);

    form.resetFields();
  };

  const autoCompleteOptions = users.map(u => ({
    value: u.userName,
    label: u.userName,
  }));

  return (
    <Form form={form} onFinish={handleSubmit} style={{ width: "100%" }}>
      <Form.Item name={"recipient"}>
        <AutoComplete
          options={autoCompleteOptions}
          filterOption={autoCompleteFilter}
          placeholder={"To: ..."}
          size={"large"}
        />
      </Form.Item>
      <Form.Item name={"subject"}>
        <Input placeholder={"Subject..."} size={"large"} />
      </Form.Item>
      <Form.Item name={"body"}>
        <TextArea placeholder={"Text..."} size={"small"} rows={5} />
      </Form.Item>
      <Button htmlType={"submit"} danger style={{ width: "30%" }}>
        SEND !
      </Button>
    </Form>
  );
});
