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
    <>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item name={"recipient"}>
          <AutoComplete
            options={autoCompleteOptions}
            status={"warning"}
            filterOption={autoCompleteFilter}
            placeholder={"To: ..."}
          />
        </Form.Item>
        <Form.Item name={"subject"}>
          <Input placeholder={"Subject..."} />
        </Form.Item>
        <Form.Item name={"body"}>
          <TextArea placeholder={"Text..."} />
        </Form.Item>
        <Button size={"middle"} htmlType={"submit"}>
          SEND !
        </Button>
      </Form>
    </>
  );
});
