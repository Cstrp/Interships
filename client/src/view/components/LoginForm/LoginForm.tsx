import { Button, Form, Input } from "antd";
import { observer } from "mobx-react";
import { createUser, userStore } from "../../../data";

export const LoginForm = observer(() => {
  const [form] = Form.useForm();

  const handleSubmit = (values: { userName: string }) => {
    const { userName } = values;

    userStore.setUsername(userName);
    createUser({ userName });
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item name={"userName"}>
        <Input placeholder={"Type your name here..."} />
      </Form.Item>
      <Button htmlType={"submit"}>Submit!</Button>
    </Form>
  );
});
