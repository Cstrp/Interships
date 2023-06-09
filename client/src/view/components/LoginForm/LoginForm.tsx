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
    <Form
      form={form}
      onFinish={handleSubmit}
      style={{
        width: "60%",
        padding: 5,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Form.Item name={"userName"} rules={[{ required: true }]}>
        <Input
          placeholder={"Type your name here..."}
          size={"large"}
          status={"warning"}
        />
      </Form.Item>
      <Button htmlType={"submit"} danger style={{ width: "40%" }}>
        Submit !!!
      </Button>
    </Form>
  );
});
