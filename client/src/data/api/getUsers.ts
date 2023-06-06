import { api } from "./api.ts";
import { User } from "../types";

export const getUsers = async () => {
  try {
    const res = await api.get<User[]>("/getUsers");

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
