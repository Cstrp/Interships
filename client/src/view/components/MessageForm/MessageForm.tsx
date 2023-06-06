import { AutoComplete, Form, Input } from "antd";
import { autoCompleteFilter, Message } from "../../../data";
import { MessageFormProps } from "./MessageFormProps.ts";

const { TextArea } = Input;

export const MessageForm = ({ users }: MessageFormProps) => {
  const [form] = Form.useForm<Message>();

  const handleSubmit = (values: Message) => {
    console.log(values);
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
          />
        </Form.Item>
        <Form.Item name={"subject"}>
          <Input />
        </Form.Item>
        <Form.Item name={"body"}>
          <TextArea />
        </Form.Item>
      </Form>
    </>
  );
};
