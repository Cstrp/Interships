import { Message } from "../types";
import { api } from "./api";

export const sendMessage = async (message: Message) => {
  try {
    const res = await api.post("/send", message);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
