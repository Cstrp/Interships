import { Button, Form, Input, Typography } from "antd";
import { useState } from "react";

export const LoginForm = () => {
  const [playerName, setPlayerName] = useState("");

  const [form] = Form.useForm();

  const handleSubmit = (value: string) => {
    setPlayerName(value);
    console.log(playerName);
  };

  return (
    <div className={"w-1/2 text-center mt-96 "}>
      <Typography.Title>Welcome...</Typography.Title>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item name={"playerName"}>
          <Input
            placeholder={"Type your nickname here..."}
            className={"border-green-500 "}
          />
        </Form.Item>
        <Button htmlType={"submit"} className={"w-full bg-amber-200"}>
          Submit!
        </Button>
      </Form>
    </div>
  );
};
