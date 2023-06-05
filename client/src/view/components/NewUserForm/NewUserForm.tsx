import { Button, Form, Input } from "antd";
import { User } from "../../../data/types";
import { createUser } from "../../../data/api/createUser.ts";
import { Dispatch, SetStateAction } from "react";

interface NewUserFormProps<T> {
  setName: Dispatch<SetStateAction<T>>;
}

export const NewUserForm = <T,>({ setName }: NewUserFormProps<T>) => {
  const [form] = Form.useForm();

  const handleSubmit = (value: User) => {
    createUser(value);
    setName(value.name as T);
  };

  return (
    <div>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item name={"name"} rules={[{ required: true }]}>
          <Input placeholder={"Enter your name here..."} />
        </Form.Item>
        <Button htmlType={"submit"}>Join :3</Button>
      </Form>
    </div>
  );
};
