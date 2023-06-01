import { localStorage } from "../../../data/utils/localStorage.ts";
import { Input } from "antd";

export const Home = () => {
  const user = localStorage.get("user");

  return user ? <></> : <Input />;
};
