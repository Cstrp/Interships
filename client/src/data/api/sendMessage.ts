import { Message } from "../types";
import { api } from "./api.ts";

export const sendMessage = async (message: Message) => {
  try {
    const res = await api.post("/sendMessage", message);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
