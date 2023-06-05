import { api } from "./api.ts";
import { Message } from "../types";

export const getMessages = async () => {
  try {
    const res = await api.get<Message[]>("getMessages");

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
