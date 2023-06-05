import { api } from "./api.ts";
import { User } from "../types";

export const getUsers = async () => {
  try {
    const res = await api.get<User[]>("/getAll");

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
